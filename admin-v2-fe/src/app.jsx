import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import OrderList from 'page/order/index.jsx';
import OrderDetail from 'page/order/detail.jsx';
import UserList from 'page/user/index.jsx';
import ProductRouter from 'page/product/router.jsx';

class App extends React.Component {
  render () {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/product-category" component={ProductRouter} />
          <Route path="/order/index" component={OrderList} />
          <Route path="/order/detail/:orderNumber" component={OrderDetail} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact path="/order" to="/order/index" />
          <Redirect exact path="/user" to="/user/index" />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    )
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={() => LayoutRouter} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
