import React from 'react';
import { cleanup, render, act, screen } from '@testing-library/react';

import CoinDetail from '../index';
import { coinId, mockTop10Markets, mockCoinDetail } from './testData';

let mockUseCrudGetReturnValue = {
    crudGetOne: jest.fn(),
    crudGetOnePayload: null,
    crudGetOneLoading: false,
    crudGetOneSuccess: false,
    crudGetAll: jest.fn(),
    crudGetAllPayload: null,
    crudGetAllLoading: false,
    crudGetAllSuccess: false,
};

jest.mock('react-redux');
jest.mock('../saga');
jest.mock('../../../components/BarChart');
jest.mock('../../../hooks/crud/get/useCrudGet', () => ({
    __esModule: true,
    default: () => mockUseCrudGetReturnValue,
}));

jest.mock('react-resize-detector', () => ({
    __esModule: true,
    default: () =>
        jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        })),
}));

jest.mock('../../../utils', () => ({
    InjectReducer: jest.fn(),
    InjectSaga: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({ coinId: 90 }),
}));

describe('<CoinDetail />', () => {
    beforeEach(() => {
        mockUseCrudGetReturnValue = {
            crudGetOne: jest.fn(),
            crudGetOnePayload: null,
            crudGetOneLoading: false,
            crudGetOneSuccess: false,
            crudGetAll: jest.fn(),
            crudGetAllPayload: null,
            crudGetAllLoading: false,
            crudGetAllSuccess: false,
        };
    });
    it('Should render an empty page', () => {
        expect.assertions(1);
        act(() => {
            render(<CoinDetail />);
        });
        const container = screen.getByTestId('container');
        expect(container).toBeInTheDocument();
    });

    it('Should display progress bar when coin detail is loading', () => {
        expect.assertions(1);
        mockUseCrudGetReturnValue.crudGetOneLoading = true;
        mockUseCrudGetReturnValue.crudGetOnePayload = { id: coinId };
        act(() => {
            render(<CoinDetail />);
        });
        expect(screen.getByTestId('progressBar')).toBeInTheDocument();
    });

    it('Should display progress bar when top 10 markets are loading', () => {
        expect.assertions(1);
        mockUseCrudGetReturnValue.crudGetAllLoading = true;
        mockUseCrudGetReturnValue.crudGetAllPayload = { id: coinId };
        act(() => {
            render(<CoinDetail />);
        });
        expect(screen.getByTestId('progressBar')).toBeInTheDocument();
    });

    it('Should display coin name in TitleCard', () => {
        expect.assertions(3);
        mockUseCrudGetReturnValue.crudGetOnePayload = { data: mockCoinDetail };
        mockUseCrudGetReturnValue.crudGetAllPayload = { data: mockTop10Markets };
        mockUseCrudGetReturnValue.crudGetOneSuccess = true;
        mockUseCrudGetReturnValue.crudGetAllSuccess = true;
        act(() => {
            render(<CoinDetail />);
        });
        expect(screen.getByTestId('TitleCard')).toBeInTheDocument();
        expect(screen.getByTestId('coin_name')).toBeInTheDocument();
        expect(screen.getByText(mockCoinDetail.name)).toBeInTheDocument();
    });

    it('Should display coin symbol in TitleCard', () => {
        expect.assertions(3);
        mockUseCrudGetReturnValue.crudGetOnePayload = { data: mockCoinDetail };
        mockUseCrudGetReturnValue.crudGetAllPayload = { data: mockTop10Markets };
        mockUseCrudGetReturnValue.crudGetOneSuccess = true;
        mockUseCrudGetReturnValue.crudGetAllSuccess = true;
        act(() => {
            render(<CoinDetail />);
        });
        expect(screen.getByTestId('TitleCard')).toBeInTheDocument();
        expect(screen.getByTestId('coin_symbol')).toBeInTheDocument();
        expect(screen.getAllByText(mockCoinDetail.symbol).length).toBeGreaterThanOrEqual(1);
    });

    afterAll(cleanup);
});
