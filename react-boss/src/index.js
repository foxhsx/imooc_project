import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./axios.config";

import reducers from "./reducer";

const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension()
  : () => {};
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), reduxDevTools)
);

// boss genius me msg 4个页面
ReactDom.hydrate(
  // react 16 服务端渲染需要用 hydrate API
  // ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
