/**
*
* app/main.js
* Main
*
**/

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from 'core/reducersIndex'; // TODO to review

import './style/base.styl';
import './style/fonts.styl';

import Layout from 'views/Layout';
import Home from 'views/Home';
import TodoApp from 'views/TodoApp';


// Enable react dev-tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
window.React = React;

const store = createStore(
  combineReducers(
    Object.assign(
      reducers,
      { routing: routerReducer }
    )
  )
);

const history = syncHistoryWithStore(
  browserHistory,
  store,
);

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/todo" component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
