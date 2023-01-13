import produce from 'immer';
import GET from '../../../constants/crud/get';

export const getInitialState = {
    get: {
        all: {
            payload: null,
            loading: false,
            success: false,
            failure: false,
        },
        list: {
            payload: null,
            loading: false,
            success: false,
            failure: false,
        },
        one: {
            payload: null,
            loading: false,
            success: false,
            failure: false,
        },
    },
};

/* eslint-disable default-case, no-param-reassign */
const crudGetReducer =
    (reducerKey = '') =>
    // eslint-disable-next-line default-param-last
    (state = getInitialState, action) => {
        const { key } = action;
        if (key !== reducerKey) return state;
        return produce(state, (draft) => {
            switch (action.type) {
                case `${GET.ONE.KEY}${key}`: {
                    draft.get.one.payload = action.payload;
                    draft.get.one.loading = true;
                    break;
                }
                case `${GET.ALL.KEY}${key}`: {
                    draft.get.all.payload = action.payload;
                    draft.get.all.loading = true;
                    break;
                }
                case `${GET.LIST.KEY}${key}`: {
                    draft.get.list.payload = action.payload;
                    draft.get.list.loading = true;
                    break;
                }
                case `${GET.LIST.SUCCESS.KEY}${key}`: {
                    draft.get.list.payload = action.payload;
                    draft.get.list.success = true;
                    draft.get.list.loading = false;
                    break;
                }
                case `${GET.ONE.SUCCESS.KEY}${key}`: {
                    draft.get.one.payload = action.payload;
                    draft.get.one.success = true;
                    draft.get.one.loading = false;
                    break;
                }
                case `${GET.ALL.SUCCESS.KEY}${key}`: {
                    draft.get.all.payload = action.payload;
                    draft.get.all.success = true;
                    draft.get.all.loading = false;
                    break;
                }
                case `${GET.LIST.FAILURE.KEY}${key}`: {
                    draft.get.list.payload = action.payload;
                    draft.get.list.failure = true;
                    draft.get.list.loading = false;
                    break;
                }
                case `${GET.ONE.FAILURE.KEY}${key}`: {
                    draft.get.one.payload = action.payload;
                    draft.get.one.failure = true;
                    draft.get.one.loading = false;
                    break;
                }
                case `${GET.ALL.FAILURE.KEY}${key}`: {
                    draft.get.all.payload = action.payload;
                    draft.get.all.failure = true;
                    draft.get.all.loading = false;
                    break;
                }
                case `${GET.RESET.KEY}${key}`: {
                    draft.get.all.payload = null;
                    draft.get.all.failure = false;
                    draft.get.all.loading = false;
                    draft.get.all.success = false;

                    draft.get.list.payload = null;
                    draft.get.list.failure = false;
                    draft.get.list.loading = false;
                    draft.get.list.success = false;

                    draft.get.one.payload = null;
                    draft.get.one.failure = false;
                    draft.get.one.loading = false;
                    draft.get.one.success = false;
                    break;
                }
            }
        });
    };

export default crudGetReducer;
