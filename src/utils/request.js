const request = (url) => {
    const result = {};
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            result.data = data;
            return result;
        })
        .catch((error) => {
            result.error = error;
            return result;
        });
};

export default request;
