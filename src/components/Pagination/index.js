import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import calculatePaginationRecords from '../../utils/pagination';

function Pagination(props) {
    const { currentPage, size, totalCount, onPageChange, onPageSizeChange, className } = props;

    const MAX_DISPLAY_PAGES = 6;
    const [page, setPage] = useState(currentPage);
    const [totalPages, setTotalPages] = useState(Math.floor(totalCount / size));
    const [displayPages, setDisplayPages] = useState(
        calculatePaginationRecords({ currentPage, maxDisplayPages: MAX_DISPLAY_PAGES, totalCount, size }),
    );

    useEffect(() => {
        setDisplayPages(
            calculatePaginationRecords({ currentPage, maxDisplayPages: MAX_DISPLAY_PAGES, totalCount, size }),
        );
    }, [totalCount, currentPage, size, totalPages]);

    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
        setPage(pageNumber);
    };

    const handleClickPreviousPage = () => {
        onPageChange(page - 1);
        setPage(page - 1);
    };

    const handleClickNextPage = () => {
        if (page - 1 <= totalPages) {
            onPageChange(page + 1);
            setPage(page + 1);
        }
    };

    const handleChangePageSize = (event) => {
        const pageSize = event.target.value;
        onPageSizeChange(Number(pageSize));
        setTotalPages(Math.floor(totalCount / pageSize));
    };
    return (
        <div className={`container flex-fill ${className}`}>
            <div className="row">
                <div className="col-xl-3 col-md-2 d-flex flex-fill justify-content-start">
                    <label>
                        {(currentPage - 1) * size + 1}-{totalCount < size ? totalCount : currentPage * size} of{' '}
                        {totalCount}
                    </label>
                </div>
                <div className="col-xl-6 col-md-8 d-flex flex-fill justify-content-center">
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                                <button type="button" className="page-link" onClick={handleClickPreviousPage}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            {displayPages.map((pageNumber) => {
                                const key = new Date().getMilliseconds() + Math.random();
                                return (
                                    <li className="page-item" key={`${key}`}>
                                        {pageNumber !== currentPage && (
                                            <button
                                                type="button"
                                                className="page-link"
                                                onClick={() => handlePageChange(pageNumber)}
                                                data-page={pageNumber}
                                                key={`${key}${pageNumber}`}
                                            >
                                                <span aria-hidden="true">{pageNumber}</span>
                                            </button>
                                        )}
                                        {pageNumber === currentPage && (
                                            <span key={`${key}${pageNumber}`} className="page-link active">
                                                {pageNumber}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                            <li className={`page-item ${page >= totalPages || totalCount < size ? 'disabled' : ''}`}>
                                <button type="button" className="page-link" onClick={handleClickNextPage}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-3 col-md-2 d-flex flex-fill justify-content-end">
                    <label>
                        Rows per page:
                        <select value={size} onChange={handleChangePageSize}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
}
Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    size: PropTypes.number,
    totalCount: PropTypes.number,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
    className: PropTypes.string,
};
Pagination.defaultProps = {
    size: 10,
    totalCount: 1,
    onPageChange: (pageNumber) => pageNumber,
    onPageSizeChange: (size) => size,
    className: ``,
};
export default Pagination;
