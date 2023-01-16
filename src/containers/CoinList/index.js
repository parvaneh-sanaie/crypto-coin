import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';

import KEYS from './keys';

import crudGetReducer from '../../reducers/crud/get';
import { InjectReducer, InjectSaga } from '../../utils';
import useCrudGet from '../../hooks/crud/get/useCrudGet';
import { getTickersSaga } from './saga';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import SearchField from '../../components/SearchField';

function CoinList() {
    const getTickersReducer = crudGetReducer(KEYS.COINS.LIST);
    InjectReducer({ key: KEYS.COINS.LIST, reducer: getTickersReducer });
    InjectSaga({ key: KEYS.COINS.LIST, saga: getTickersSaga });

    const { crudGetList, crudGetListPayload, crudGetListLoading, crudGetListFailure, crudGetListSuccess } = useCrudGet(
        KEYS.COINS.LIST,
    );

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [coinList, setCoinList] = useState(null);
    const [totalCount, setTotalCount] = useState(0);

    const escapeRegExp = (value) => value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    useEffect(() => {
        if (crudGetListPayload == null && !crudGetListLoading && !crudGetListFailure) {
            crudGetList({ start: (pageNumber - 1) * pageSize, limit: pageSize });
        }
    }, [crudGetListLoading, crudGetList, crudGetListPayload, crudGetListFailure, pageNumber, pageSize]);

    useEffect(() => {
        if (crudGetListSuccess) {
            setCoinList(crudGetListPayload.data.data);
            setTotalCount(crudGetListPayload.data.info.coins_num);
        }
    }, [crudGetListPayload, crudGetListSuccess]);

    const handlePageChange = (page) => {
        setPageNumber(page);
        crudGetList({ start: (page - 1) * pageSize, limit: pageSize });
    };

    const handlePageSizeChange = (size) => {
        setPageSize(size);
        setPageNumber(1);
        crudGetList({ start: 0, limit: size });
    };

    const handleSearchInDataTable = (value) => {
        const searchRegex = new RegExp(escapeRegExp(value), 'i');
        if (value.length === 0) {
            setCoinList(crudGetListPayload.data.data);
            setTotalCount(crudGetListPayload.data.info.coins_num);
            return;
        }
        const filteredRows = crudGetListPayload.data.data.filter((row) =>
            Object.keys(row).some((field) => {
                if (row[field]) {
                    return searchRegex.test(row[field].toString());
                }
                return null;
            }),
        );
        setCoinList(filteredRows);
        setTotalCount(filteredRows.length);
    };

    return (
        <div data-testid="CoinList">
            <Header showProgress={crudGetListLoading} />
            {crudGetListSuccess && coinList && (
                <div data-testid="page-container" className="container-fluid py-2 px-4 small">
                    <div className="card mb-2">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faTable} className="me-1" />
                            Coins
                        </div>
                        <div className="text-end mt-1">
                            <SearchField onSearch={handleSearchInDataTable} />
                        </div>
                        <div
                            data-testid="table-container"
                            className="card-body table-responsive px-5 m-1"
                            style={{ maxHeight: '300px' }}
                        >
                            <table className="overflow-scroll table table-sm table-hover table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Price</th>
                                        <th>1h</th>
                                        <th>24h</th>
                                        <th>7d</th>
                                        <th>Market Cap</th>
                                    </tr>
                                </thead>
                                <tbody data-testid="table-body">
                                    {coinList.map((item) => {
                                        const key = new Date().getMilliseconds() + Math.random();
                                        return (
                                            <tr key={`${key}`}>
                                                <td key={`${key}_rank`}>{item.rank}</td>
                                                <td key={`${key}_name`}>
                                                    <div className="row d-flex">
                                                        <img
                                                            style={{ height: '25px', maxWidth: 'fit-content' }}
                                                            alt={item.name}
                                                            className="col-2 rounded w-auto pe-0"
                                                            src={`https://www.coinlore.com/img/25x25/${item.nameid}.png`}
                                                        />

                                                        <a
                                                            className="text-decoration-none col-10"
                                                            href={`/coins/${item.id}`}
                                                            key={`${key}_detail`}
                                                        >
                                                            <div className="text-black fw-bolder"> {item.name}</div>
                                                            <div className="small text-primary">{item.symbol}</div>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td key={`${key}_price`} className="fs-6">
                                                    ${item.price_usd}
                                                </td>
                                                <td
                                                    key={`${key}_percent_1h`}
                                                    className={
                                                        item.percent_change_1h > 0 ? `text-success` : `text-danger`
                                                    }
                                                >
                                                    {item.percent_change_1h}%
                                                </td>
                                                <td
                                                    key={`${key}_percent_24h`}
                                                    className={
                                                        item.percent_change_24h > 0 ? `text-success` : `text-danger`
                                                    }
                                                >
                                                    <strong>{item.percent_change_24h}%</strong>
                                                </td>
                                                <td
                                                    key={`${key}_percent_7d`}
                                                    className={
                                                        item.percent_change_7d > 0 ? `text-success` : `text-danger`
                                                    }
                                                >
                                                    {item.percent_change_7d}%
                                                </td>
                                                <td key={`${key}_market`}>${item.market_cap_usd}</td>
                                            </tr>
                                        );
                                    })}
                                    {coinList.length === 0 && (
                                        <tr>
                                            <td className="text-secondary text-center" colSpan={7}>
                                                No results Found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            currentPage={pageNumber}
                            size={pageSize}
                            totalCount={totalCount}
                            onPageChange={handlePageChange}
                            onPageSizeChange={handlePageSizeChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default CoinList;
