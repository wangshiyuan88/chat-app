import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import SocketContext from 'react-socket-context';
import thunk from 'redux-thunk';
import React from "react";
import reducers from './reducers';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import { CHAT_PATH, SERVER_SOCEKT_ACTION_PATH } from '../common/SocketConstants';

injectTapEventPlugin();

require('../../public/scss/main.scss');

const socket = io();
const socketIoMiddleware = createSocketIoMiddleware(socket, SERVER_SOCEKT_ACTION_PATH);

const store = createStore(
    reducers,
    applyMiddleware(thunk, socketIoMiddleware)
)
const containerEl = document.getElementById("container");

// store.subscribe(()=>{
//   console.log('new client state', store.getState());
// });

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    containerEl
);
