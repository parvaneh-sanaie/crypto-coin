import { combineReducers } from 'redux';
import produce from 'immer';

const defaultReducer =
    (reducerKey = '') =>
    (state, action) => {
        const { key } = action;
        if (key !== reducerKey) return state;
        return produce(state, () => null);
    };

const staticReducers = { defaultReducer };

const createReducer = (asyncReducers = {}) =>
    combineReducers({
        ...asyncReducers,
        ...staticReducers,
    });

export default createReducer;
