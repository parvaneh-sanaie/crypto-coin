import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons/faDollar';

import KEYS from './keys';

import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import crudGetReducer from '../../reducers/crud/get';
import { InjectReducer, InjectSaga } from '../../utils';
import useCrudGet from '../../hooks/crud/get/useCrudGet';
import { getCoinDetailSaga, getTop10MarketsForCoinSaga } from './saga';

const graphConfig = [
    {
        name: 'Volume',
        dataKey: 'volume',
        fill: '#2347F3',
        stack: '0',
    },
];

function CoinDetail() {
    const { coinId } = useParams();

    const getCoinDetailsReducer = crudGetReducer(KEYS.COIN.DETAIL);
    InjectReducer({ key: KEYS.COIN.DETAIL, reducer: getCoinDetailsReducer });
    InjectSaga({ key: KEYS.COIN.DETAIL, saga: getCoinDetailSaga });

    const getTop10MarketsReducer = crudGetReducer(KEYS.COIN.TOP10MARKETS);
    InjectReducer({ key: KEYS.COIN.TOP10MARKETS, reducer: getTop10MarketsReducer });
    InjectSaga({ key: KEYS.COIN.TOP10MARKETS, saga: getTop10MarketsForCoinSaga });

    const {
        crudGetOne: getCoinDetail,
        crudGetOnePayload,
        crudGetOneLoading,
        crudGetOneSuccess,
    } = useCrudGet(KEYS.COIN.DETAIL);

    const {
        crudGetAll: getTop10MarketByCoinId,
        crudGetAllPayload,
        crudGetAllLoading,
        crudGetAllSuccess,
    } = useCrudGet(KEYS.COIN.TOP10MARKETS);

    const [top10Markets, setTop10Markets] = useState(null);
    const [coinDetail, setCoinDetail] = useState(null);

    useEffect(() => {
        if (crudGetOnePayload == null && crudGetAllPayload == null && !crudGetAllLoading && !crudGetOneLoading) {
            getCoinDetail({ id: coinId });
            getTop10MarketByCoinId({ id: coinId });
        }
    }, [
        coinId,
        crudGetAllLoading,
        crudGetAllPayload,
        crudGetOneLoading,
        crudGetOnePayload,
        getCoinDetail,
        getTop10MarketByCoinId,
    ]);

    useEffect(() => {
        if (crudGetOneSuccess) {
            setCoinDetail(crudGetOnePayload.data);
        }
    }, [crudGetOnePayload, crudGetOneSuccess]);

    useEffect(() => {
        if (crudGetAllSuccess) {
            setTop10Markets(crudGetAllPayload.data);
        }
    }, [crudGetAllPayload, crudGetAllSuccess]);

    return (
        <div data-testid="CoinDetail">
            <Header showProgress={crudGetOneLoading || crudGetAllLoading} />
            <div data-testid="container" className="container-fluid px-4 small">
                {coinDetail && top10Markets && (
                    <div className="row">
                        <div className="col-xl-7 col-md-6 mt-4">
                            <div data-testid="TitleCard" className="row card card-body flex-row">
                                <div className="col-xl-10 col-md-8">
                                    <img
                                        className="px-1 rounded-circle"
                                        src={`https://www.coinlore.com/img/25x25/${coinDetail.nameid}.png`}
                                        alt={coinDetail.symbol}
                                    />
                                    <strong data-testid="coin_symbol">{coinDetail.symbol}</strong> Price / Everything
                                    About <strong data-testid="coin_name">{coinDetail.name}</strong>
                                </div>
                                <div className="text-end align-self-end col-xl-2 col-md-4">
                                    Rank:{' '}
                                    <div
                                        data-testid="coin_rank"
                                        className={coinDetail.rank <= 10 ? `badge bg-success` : `badge bg-primary`}
                                    >
                                        {coinDetail.rank}
                                    </div>
                                </div>
                            </div>
                            <div className="card row mt-4">
                                <div className="card-body table-responsive">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Market Cap</th>
                                                <th>Vol (24H)</th>
                                                <th>Circulating Supply</th>
                                                <th>Total Supply</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${coinDetail.market_cap_usd}</td>
                                                <td>
                                                    <div>${coinDetail.volume24}</div>
                                                    <div className="text-secondary small">
                                                        {coinDetail.volume24_native}
                                                        <strong> {coinDetail.symbol}</strong>
                                                    </div>
                                                </td>
                                                <td data-testid="csupply">${coinDetail.csupply}</td>
                                                <td data-testid="tsupply">${coinDetail.tsupply}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row d-flex align-content-between">
                                <div className="col-xl-3 col-md-6 mt-4 pe-1 ps-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header">
                                                <FontAwesomeIcon icon={faDollar} className="me-1" />
                                                <strong>Price</strong>
                                            </div>
                                            <div className="list-group-flush">
                                                <div className="list-group-item">
                                                    <span>USD: </span>
                                                    <span data-testid="price_usd" className="text-primary small">
                                                        ${coinDetail.price_usd}
                                                    </span>
                                                </div>
                                                <div className="list-group-item">
                                                    <span>BTC: </span>
                                                    <span data-testid="price_btc" className="text-primary small">
                                                        {coinDetail.price_btc} <small>(BTC)</small>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-body col-xl-9 col-md-12 mt-4">
                                    <table className="table table-striped table-bordered table-hover table-sm">
                                        <thead>
                                            <tr>
                                                <th>VS</th>
                                                <th>1h</th>
                                                <th>24h</th>
                                                <th>7d</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>USD</td>
                                                <td
                                                    data-testid="percent_change_1h"
                                                    className={
                                                        coinDetail.percent_change_1h > 0
                                                            ? `text-success`
                                                            : `text-danger`
                                                    }
                                                >
                                                    {coinDetail.percent_change_1h}%
                                                </td>
                                                <td
                                                    data-testid="percent_change_24h"
                                                    className={
                                                        coinDetail.percent_change_24h > 0
                                                            ? `text-success`
                                                            : `text-danger`
                                                    }
                                                >
                                                    {coinDetail.percent_change_24h}%
                                                </td>
                                                <td
                                                    data-testid="percent_change_7d"
                                                    className={
                                                        coinDetail.percent_change_7d > 0
                                                            ? `text-success`
                                                            : `text-danger`
                                                    }
                                                >
                                                    {coinDetail.percent_change_7d}%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 mt-4">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faChartSimple} className="me-1" />
                                    Top 10 Markets for {coinDetail.name}({coinDetail.symbol})
                                </div>
                                <div data-testid="top10Markets" className="card-body flex-row pt-4">
                                    <BarChart
                                        width={600}
                                        height={268}
                                        data={top10Markets}
                                        barConfig={graphConfig}
                                        tooltip
                                        xAxisDataKey="name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default CoinDetail;
