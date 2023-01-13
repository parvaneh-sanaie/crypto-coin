import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';
import 'bootstrap/dist/css/bootstrap.min.css';

import KEYS from './keys';

import crudGetReducer from '../../reducers/crud/get';
import { InjectReducer, InjectSaga } from '../../utils';
import useCrudGet from '../../hooks/crud/get/useCrudGet';
import getTickersSaga from './saga';

function App() {
    const getTickersReducer = crudGetReducer(KEYS.COINS.LIST);
    InjectReducer({ key: KEYS.COINS.LIST, reducer: getTickersReducer });
    InjectSaga({ key: KEYS.COINS.LIST, saga: getTickersSaga });

    const { crudGetList, crudGetListPayload, crudGetListLoading, crudGetListFailure } = useCrudGet(KEYS.COINS.LIST);
    const [pagination] = useState({ start: 0, limit: 10 });

    useEffect(() => {
        if (crudGetListPayload == null && !crudGetListLoading && !crudGetListFailure) {
            crudGetList({ pagination });
        }
    }, [crudGetListLoading, crudGetList]);

    return (
        <div data-testid="App">
            {crudGetListLoading && <span>Loading...</span>}
            {!crudGetListLoading && crudGetListPayload && (
                <div className="card mb-4">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faTable} className="me-1" />
                        List of Coins
                    </div>
                    <div className="card-body">
                        <table id="datatablesSimple" className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Rank</th>
                                    <th>Price (USD)</th>
                                    <th>Market Cap (USD)</th>
                                    <th>Percentages - Change rate (1hr)</th>
                                    <th>Percentages - Change rate (24hrs)</th>
                                    <th>Percentages - Change rate (7days)</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Rank</th>
                                    <th>Price (USD)</th>
                                    <th>Market Cap (USD)</th>
                                    <th>Percentages - Change rate (1hr)</th>
                                    <th>Percentages - Change rate (24hrs)</th>
                                    <th>Percentages - Change rate (7days)</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {crudGetListPayload.data.data.map((item) => {
                                    const key = new Date().getMilliseconds() + Math.random();
                                    return (
                                        <tr key={`${key}`}>
                                            <td key={`${key}_name`}>{item.name}</td>
                                            <td key={`${key}_rank`}>{item.rank}</td>
                                            <td key={`${key}_price`}>{item.price_usd}</td>
                                            <td key={`${key}_market`}>{item.market_cap_usd}</td>
                                            <td key={`${key}_percent_1h`}>{item.percent_change_1h}</td>
                                            <td key={`${key}_percent_24h`}>{item.percent_change_24h}</td>
                                            <td key={`${key}_percent_7d`}>{item.percent_change_7d}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
