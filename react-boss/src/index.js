import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './axios.config'

import reducers from './reducer'
import Login from './container/login/Login';
import BossInfo from './container/bossinfo/BossInfo'
import Register from './container/register/Register';

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : () => {}
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevTools
))
 
ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* 检验路由 */}
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  ), 
  document.getElementById('root')
)