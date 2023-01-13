import { createSelector } from 'reselect';
import { getInitialState } from '../../../reducers/crud/get';

const selectGetData = (state, key) => state[key] || getInitialState;

const makeSelectCrudGetListFailure = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.list.failure,
    );

const makeSelectCrudGetOneFailure = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.one.failure,
    );

const makeSelectCrudGetAllFailure = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.all.failure,
    );

const makeSelectCrudGetListSuccess = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.list.success,
    );

const makeSelectCrudGetOneSuccess = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.one.success,
    );

const makeSelectCrudGetAllSuccess = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.all.success,
    );

const makeSelectCrudGetListLoading = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.list.loading,
    );

const makeSelectCrudGetAllLoading = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.all.loading,
    );

const makeSelectCrudGetOneLoading = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.one.loading,
    );

const makeSelectCrudGetListPayload = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.list.payload,
    );

const makeSelectCrudGetOnePayload = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.one.payload,
    );

const makeSelectCrudGetAllPayload = (key) =>
    createSelector(
        (state) => selectGetData(state, key),
        (getState) => getState.get.all.payload,
    );

export {
    makeSelectCrudGetListFailure,
    makeSelectCrudGetOneFailure,
    makeSelectCrudGetAllFailure,
    makeSelectCrudGetListSuccess,
    makeSelectCrudGetOneSuccess,
    makeSelectCrudGetAllSuccess,
    makeSelectCrudGetListLoading,
    makeSelectCrudGetAllLoading,
    makeSelectCrudGetOneLoading,
    makeSelectCrudGetListPayload,
    makeSelectCrudGetOnePayload,
    makeSelectCrudGetAllPayload,
};
