import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../index';

jest.mock('react-redux');
jest.mock('../saga');
jest.mock('../../../hooks/crud/get/useCrudGet', () => ({
    __esModule: true,
    default: () => ({
        crudGetList: jest.fn(),
        crudGetListPayload: null,
        crudGetListLoading: false,
        crudGetListFailure: false,
    }),
}));

jest.mock('../../../utils', () => ({
    InjectReducer: jest.fn(),
    InjectSaga: jest.fn(),
}));

describe('<App />', () => {
    it('should render an empty dev with data-testid="App"', () => {
        expect.assertions(1);
        act(() => {
            render(<App />);
        });
        const input = screen.getByTestId('App');
        expect(input).toBeInTheDocument();
    });
});
