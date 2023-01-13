import GET from '../../../constants';

const crudGetOneAction = (key, payload) => ({
    key,
    type: `${GET.ONE.KEY}${key}`,
    payload,
});

const crudGetAllAction = (key, payload) => ({
    key,
    type: `${GET.ALL.KEY}${key}`,
    payload,
});

const crudGetListAction = (key, payload) => ({
    key,
    type: `${GET.LIST.KEY}${key}`,
    payload,
});

const crudGetListSuccessAction = (key, payload) => ({
    key,
    type: `${GET.LIST.SUCCESS.KEY}${key}`,
    payload,
});
const crudGetOneSuccessAction = (key, payload) => ({
    key,
    type: `${GET.ONE.SUCCESS.KEY}${key}`,
    payload,
});
const crudGetAllSuccessAction = (key, payload) => ({
    key,
    type: `${GET.ALL.SUCCESS.KEY}${key}`,
    payload,
});

const crudGetListFailureAction = (key, payload) => ({
    key,
    type: `${GET.LIST.FAILURE.KEY}${key}`,
    payload,
});

const crudGetOneFailureAction = (key, payload) => ({
    key,
    type: `${GET.ONE.FAILURE.KEY}${key}`,
    payload,
});

const crudGetAllFailureAction = (key, payload) => ({
    key,
    type: `${GET.ALL.FAILURE.KEY}${key}`,
    payload,
});

const crudGetResetAction = (key) => ({
    key,
    type: `${GET.RESET.KEY}${key}`,
});
export {
    crudGetOneAction,
    crudGetAllAction,
    crudGetListAction,
    crudGetListSuccessAction,
    crudGetOneSuccessAction,
    crudGetAllSuccessAction,
    crudGetListFailureAction,
    crudGetOneFailureAction,
    crudGetAllFailureAction,
    crudGetResetAction,
};
