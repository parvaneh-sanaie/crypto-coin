import React from 'react';
import { cleanup, render, act, screen, within, fireEvent } from '@testing-library/react';

import Pagination from '../index';

describe('<Pagination />', () => {
    it('Should be match to the snapshot', () => {
        let renderResult = null;
        act(() => {
            renderResult = render(<Pagination />);
        });
        expect(renderResult).toMatchSnapshot();
    });

    it('should render the component with 1 page and disabled next and previous link', () => {
        expect.assertions(11);
        let renderResult = null;
        act(() => {
            renderResult = render(<Pagination />);
        });
        const pageList = screen.getByTestId('pagination-page-list');
        const nextLink = screen.getByTestId('pagination-next-link');
        const previousLink = screen.getByTestId('pagination-previous-link');
        expect(pageList).toBeInTheDocument();
        expect(nextLink).toBeInTheDocument();
        expect(previousLink).toBeInTheDocument();
        expect(screen.getByTestId('pagination-page-info').innerHTML).toBe('1-1 of 1');
        expect(renderResult.container.getElementsByClassName('active').length).toBeGreaterThanOrEqual(1);
        expect(within(pageList).getByText('1').className).toContain('page-link active');
        expect(previousLink.className).toContain('disabled');
        expect(nextLink.className).toContain('disabled');
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.getByTestId('pagination-page-info')).toBeInTheDocument();
        expect(screen.getByTestId('pagination-page-size-records')).toBeInTheDocument();
    });

    it('should go to the next page when click on next link', () => {
        expect.assertions(2);

        const handleClickNextPage = jest.fn();
        act(() => {
            render(<Pagination size={5} currentPage={1} totalCount={10} onPageChange={handleClickNextPage} />);
        });
        const nextLink = within(screen.getByTestId('pagination-next-link')).getByRole('button');

        fireEvent.click(nextLink);
        expect(handleClickNextPage).toHaveBeenCalledTimes(1);
        expect(handleClickNextPage).toHaveBeenCalledWith(2);
    });

    it('should go to the previous page when click on previous link', () => {
        expect.assertions(2);

        const handleClickPreviousPage = jest.fn();
        act(() => {
            render(<Pagination size={5} currentPage={2} totalCount={100} onPageChange={handleClickPreviousPage} />);
        });
        const previousLink = within(screen.getByTestId('pagination-previous-link')).getByRole('button');

        fireEvent.click(previousLink);
        expect(handleClickPreviousPage).toHaveBeenCalledTimes(1);
        expect(handleClickPreviousPage).toHaveBeenCalledWith(1);
    });

    it('should change page size and set current page to 1', () => {
        expect.assertions(4);

        const handleChangePageSize = jest.fn();
        act(() => {
            render(<Pagination size={5} currentPage={2} totalCount={100} onPageSizeChange={handleChangePageSize} />);
        });
        const pageSizeSelect = screen.getByTestId('pagination-page-size-records');

        fireEvent.change(pageSizeSelect, { target: { value: 10 } });

        const pageList = screen.getByTestId('pagination-page-list');
        expect(handleChangePageSize).toHaveBeenCalledTimes(1);
        expect(handleChangePageSize).toHaveBeenCalledWith(10);
        expect(screen.getByTestId('pagination-page-info').innerHTML).toBe('1-10 of 100');
        expect(within(pageList).getByText('1').className).toContain('page-link active');
    });

    afterAll(cleanup);
});
