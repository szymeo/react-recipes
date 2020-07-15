import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'reset.css';

import store from './redux/store';
import './index.css';
import Root from './containers/Root';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root'),
);