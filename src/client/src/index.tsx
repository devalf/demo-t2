import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './state/store';

const render = () => {
    const App = require('./app').default;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app', render);
}
