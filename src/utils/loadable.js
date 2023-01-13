import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
    const LazyComponent = lazy(importFunc);

    return function (props) {
        return (
            <Suspense fallback={fallback}>
                <LazyComponent {...props} />
            </Suspense>
        );
    };
};
export default loadable;
