import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import { mainRoutes, adminRoutes } from './routes/index'
import { Provider } from 'react-redux'
import store from './store';

const router = createHashRouter(mainRoutes.concat(adminRoutes))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
