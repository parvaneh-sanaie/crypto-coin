import React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import CoinList from '../index';
import mockCoinList from './testData';

let mockUseCrudGetReturnValue = {
    crudGetList: jest.fn(),
    crudGetListPayload: null,
    crudGetListLoading: false,
    crudGetListSuccess: false,
    crudGetListFailure: false,
};

jest.mock('react-redux');
jest.mock('../saga');
jest.mock('../../../hooks/crud/get/useCrudGet', () => ({
    __esModule: true,
    default: () => mockUseCrudGetReturnValue,
}));

jest.mock('../../../utils', () => ({
    InjectReducer: jest.fn(),
    InjectSaga: jest.fn(),
}));

describe('<CoinList />', () => {
    beforeEach(() => {
        mockUseCrudGetReturnValue = {
            crudGetList: jest.fn(),
            crudGetListPayload: null,
            crudGetListLoading: false,
            crudGetListSuccess: false,
            crudGetListFailure: false,
        };
    });
    it('Should be match to the snapshot', () => {
        let renderResult = null;
        act(() => {
            renderResult = render(<CoinList />);
        });
        expect(renderResult).toMatchSnapshot();
    });

    it('should render an empty dev with data-testid="CoinList"', () => {
        expect.assertions(1);
        act(() => {
            render(<CoinList />);
        });
        const component = screen.getByTestId('CoinList');
        expect(component).toBeInTheDocument();
    });

    it('Should display progress bar when coin detail is loading', () => {
        expect.assertions(1);
        mockUseCrudGetReturnValue.crudGetListLoading = true;
        mockUseCrudGetReturnValue.crudGetListPayload = { start: 1, limit: 5 };
        act(() => {
            render(<CoinList />);
        });
        expect(screen.getByTestId('progressBar')).toBeInTheDocument();
    });

    it('Should display coin list after page successfully loaded', () => {
        expect.assertions(6);
        mockUseCrudGetReturnValue.crudGetListPayload = { data: mockCoinList };
        mockUseCrudGetReturnValue.crudGetListSuccess = true;
        act(() => {
            render(<CoinList />);
        });
        const pageContainer = screen.getByTestId('page-container');
        expect(pageContainer).toBeInTheDocument();

        expect(within(pageContainer).getByTestId('search-field-form')).toBeInTheDocument();
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.getByTestId('table-container')).toBeInTheDocument();

        const tableBody = screen.getByTestId('table-body');
        expect(tableBody).toBeInTheDocument();

        expect(tableBody.children.length).toBe(5);
    });

    it('Should filter table data based on the searched value', () => {
        expect.assertions(3);
        mockUseCrudGetReturnValue.crudGetListPayload = { data: mockCoinList };
        mockUseCrudGetReturnValue.crudGetListSuccess = true;
        act(() => {
            render(<CoinList />);
        });
        const tableBody = screen.getByTestId('table-body');
        const pageContainer = screen.getByTestId('page-container');
        const input = within(pageContainer).getByTestId('search-field-input');

        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'e' } });
        expect(tableBody.children.length).toBe(3);
        fireEvent.change(input, { target: { value: 'et' } });
        expect(tableBody.children.length).toBe(2);
    });
});
