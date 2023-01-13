import React from 'react';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './reducerInjectors';

const InjectReducer = ({ key, reducer }) => {
    const context = React.useContext(ReactReduxContext);

    React.useEffect(() => {
        getInjectors(context.store).injectReducer(key, reducer);
    });
};

export default InjectReducer;
