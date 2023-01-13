import { useDispatch, useSelector } from 'react-redux';

import {
    makeSelectCrudGetListPayload,
    makeSelectCrudGetOnePayload,
    makeSelectCrudGetAllPayload,
    makeSelectCrudGetListFailure,
    makeSelectCrudGetOneFailure,
    makeSelectCrudGetAllFailure,
    makeSelectCrudGetListSuccess,
    makeSelectCrudGetOneSuccess,
    makeSelectCrudGetAllSuccess,
    makeSelectCrudGetListLoading,
    makeSelectCrudGetAllLoading,
    makeSelectCrudGetOneLoading,
} from '../../../selectors/crud/get';

import { crudGetOneAction, crudGetAllAction, crudGetListAction, crudGetResetAction } from '../../../actions/crud/get';

function useCrudGet(key) {
    const dispatch = useDispatch();

    const selectCrudGetListPayload = makeSelectCrudGetListPayload(key);
    const selectCrudGetOnePayload = makeSelectCrudGetOnePayload(key);
    const selectCrudGetAllPayload = makeSelectCrudGetAllPayload(key);
    const selectCrudGetListFailure = makeSelectCrudGetListFailure(key);
    const selectCrudGetOneFailure = makeSelectCrudGetOneFailure(key);
    const selectCrudGetAllFailure = makeSelectCrudGetAllFailure(key);
    const selectCrudGetListSuccess = makeSelectCrudGetListSuccess(key);
    const selectCrudGetOneSuccess = makeSelectCrudGetOneSuccess(key);
    const selectCrudGetAllSuccess = makeSelectCrudGetAllSuccess(key);
    const selectCrudGetListLoading = makeSelectCrudGetListLoading(key);
    const selectCrudGetAllLoading = makeSelectCrudGetAllLoading(key);
    const selectCrudGetOneLoading = makeSelectCrudGetOneLoading(key);

    const crudGetListPayload = useSelector(selectCrudGetListPayload);
    const crudGetAllPayload = useSelector(selectCrudGetAllPayload);
    const crudGetOnePayload = useSelector(selectCrudGetOnePayload);
    const crudGetAllSuccess = useSelector(selectCrudGetAllSuccess);
    const crudGetListSuccess = useSelector(selectCrudGetListSuccess);
    const crudGetOneSuccess = useSelector(selectCrudGetOneSuccess);
    const crudGetAllFailure = useSelector(selectCrudGetAllFailure);
    const crudGetListFailure = useSelector(selectCrudGetListFailure);
    const crudGetOneFailure = useSelector(selectCrudGetOneFailure);
    const crudGetListLoading = useSelector(selectCrudGetListLoading);
    const crudGetAllLoading = useSelector(selectCrudGetAllLoading);
    const crudGetOneLoading = useSelector(selectCrudGetOneLoading);

    const crudGetOne = (payload) => {
        dispatch(crudGetOneAction(key, payload));
    };
    const crudGetAll = (payload) => {
        dispatch(crudGetAllAction(key, payload));
    };
    const crudGetList = (payload) => {
        dispatch(crudGetListAction(key, payload));
    };
    const crudGetReset = () => {
        dispatch(crudGetResetAction(key));
    };

    return {
        crudGetOne,
        crudGetAll,
        crudGetList,
        crudGetReset,
        crudGetOnePayload,
        crudGetListPayload,
        crudGetAllPayload,
        crudGetOneLoading,
        crudGetAllLoading,
        crudGetListLoading,
        crudGetOneFailure,
        crudGetAllFailure,
        crudGetListFailure,
        crudGetOneSuccess,
        crudGetAllSuccess,
        crudGetListSuccess,
    };
}

export default useCrudGet;
