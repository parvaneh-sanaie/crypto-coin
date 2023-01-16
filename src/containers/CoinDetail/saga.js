import { takeLatest, call, put } from 'redux-saga/effects';
import lodash from 'lodash';

import KEYS from './keys';
import GET from '../../constants';
import request from '../../utils/request';
import {
    crudGetOneFailureAction,
    crudGetOneSuccessAction,
    crudGetAllFailureAction,
    crudGetAllSuccessAction,
} from '../../actions/crud/get';

function* getCoinDetail(action) {
    try {
        const { id } = action.payload;
        const URL = `https://api.coinlore.net/api/ticker/?id=${id}`;
        const result = yield call(request, URL);
        if (result.error) {
            yield put(crudGetOneFailureAction(action.key, { error: result.error }));
        } else if (result.data) {
            yield put(crudGetOneSuccessAction(action.key, { data: result.data[0], success: true }));
        }
    } catch (error) {
        yield put(crudGetOneFailureAction(action.key, { error }));
    }
}

function* getTop10MarketsForCoin(action) {
    try {
        const { id } = action.payload;
        const URL = `https://api.coinlore.net/api/coin/markets/?id=${id}`;
        const result = yield call(request, URL);
        if (result.error) {
            yield put(crudGetAllFailureAction(action.key, { error: result.error }));
        } else if (result.data) {
            const data = lodash.orderBy(result.data, ['volume'], ['desc']).slice(0, 10);
            yield put(crudGetAllSuccessAction(action.key, { data, success: true }));
        }
    } catch (error) {
        yield put(crudGetAllFailureAction(action.key, { error }));
    }
}

export function* getCoinDetailSaga() {
    yield takeLatest(`${GET.ONE.KEY}${KEYS.COIN.DETAIL}`, getCoinDetail);
}

export function* getTop10MarketsForCoinSaga() {
    yield takeLatest(`${GET.ALL.KEY}${KEYS.COIN.TOP10MARKETS}`, getTop10MarketsForCoin);
}
