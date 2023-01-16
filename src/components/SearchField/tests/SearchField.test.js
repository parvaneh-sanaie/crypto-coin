import React from 'react';
import { cleanup, render, act, screen, fireEvent } from '@testing-library/react';

import SearchField from '../index';

describe('<SearchField />', () => {
    it('Should be match to the snapshot', () => {
        let renderResult = null;
        act(() => {
            renderResult = render(<SearchField />);
        });
        expect(renderResult).toMatchSnapshot();
    });

    it('should render the component', () => {
        expect.assertions(3);
        const handleSearch = jest.fn();
        act(() => {
            render(<SearchField onSearch={handleSearch} />);
        });
        expect(screen.getByTestId('search-field-form')).toBeInTheDocument();
        expect(screen.getByTestId('search-field-input')).toBeInTheDocument();
        expect(screen.getByTestId('search-field-button')).toBeInTheDocument();
    });

    it('should call onSearch when input value changes', () => {
        expect.assertions(3);

        const handleSearch = jest.fn();
        act(() => {
            render(<SearchField onSearch={handleSearch} />);
        });

        const input = screen.getByTestId('search-field-input');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'value changed' } });
        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith('value changed');
    });
    afterAll(cleanup);
});
