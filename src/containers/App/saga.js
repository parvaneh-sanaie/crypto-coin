import { takeLatest, call, put } from 'redux-saga/effects';

import GET from '../../constants';
import KEYS from './keys';
import { crudGetListFailureAction, crudGetListSuccessAction } from '../../actions/crud/get';

function* getList(action) {
    try {
        const { start, limit } = action.payload.pagination;
        const URL = `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`;
        const result = {};
        const request = () =>
            fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    result.data = data;
                    return data;
                })
                .catch((error) => {
                    result.error = error;
                });

        yield call(request);
        if (result.error) {
            yield put(crudGetListFailureAction(action.key, { error: result.error }));
        } else if (result.data) {
            yield put(crudGetListSuccessAction(action.key, { data: result.data, success: true }));
        }
    } catch (error) {
        yield put(crudGetListFailureAction(action.key, { error }));
    }
}

export default function* getTickersSaga() {
    yield takeLatest(`${GET.LIST.KEY}${KEYS.COINS.LIST}`, getList);
}
