import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Chat from './containers/Chat';
import Login from './components/Login';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/chat" component={Chat}/>
    </Route>
);
