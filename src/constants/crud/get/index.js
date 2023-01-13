const KEY = `/CRUD/GET`;

const GET = {
    ALL: {
        KEY: `${KEY}/ALL/`,
        FAILURE: { KEY: `${KEY}/ALL/FAILURE/` },
        SUCCESS: { KEY: `${KEY}/ALL/SUCCESS/` },
    },
    LIST: {
        KEY: `${KEY}/LIST/`,
        FAILURE: { KEY: `${KEY}/LIST/FAILURE/` },
        SUCCESS: { KEY: `${KEY}/LIST/SUCCESS/` },
    },
    ONE: {
        KEY: `${KEY}/ONE/`,
        FAILURE: { KEY: `${KEY}/ONE/FAILURE/` },
        SUCCESS: { KEY: `${KEY}/ONE/SUCCESS/` },
    },
    RESET: {
        KEY: `${KEY}/RESET/`,
    },
};

export default GET;
