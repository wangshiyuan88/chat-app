import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import React from "react";
import reducers from './reducers';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

require('../../public/scss/main.scss');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)
const containerEl = document.getElementById("container");

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    containerEl
);
