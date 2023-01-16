import { takeLatest, call, put } from 'redux-saga/effects';

import request from '../../utils/request';
import {
    crudGetListFailureAction,
    crudGetListSuccessAction,
    crudGetAllFailureAction,
    crudGetAllSuccessAction,
} from '../../actions/crud/get';

import KEYS from './keys';
import GET from '../../constants';

function* getList(action) {
    try {
        const { start, limit } = action.payload;
        const URL = `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`;
        const result = yield call(request, URL);

        if (result.error) {
            yield put(crudGetListFailureAction(action.key, { error: result.error }));
        } else if (result.data) {
            yield put(crudGetListSuccessAction(action.key, { data: result.data, success: true }));
        }
    } catch (error) {
        yield put(crudGetListFailureAction(action.key, { error }));
    }
}

function* getGlobalInfo(action) {
    try {
        const URL = `https://api.coinlore.net/api/global/`;
        const result = yield call(request, URL);
        if (result.error) {
            yield put(crudGetAllFailureAction(action.key, { error: result.error }));
        } else if (result.data) {
            yield put(crudGetAllSuccessAction(action.key, { data: result.data, success: true }));
        }
    } catch (error) {
        yield put(crudGetAllFailureAction(action.key, { error }));
    }
}

export function* getTickersSaga() {
    yield takeLatest(`${GET.LIST.KEY}${KEYS.COINS.LIST}`, getList);
}

export function* getGlobalInfoSaga() {
    yield takeLatest(`${GET.ALL.KEY}${KEYS.COINS.GLOBAL}`, getGlobalInfo);
}
