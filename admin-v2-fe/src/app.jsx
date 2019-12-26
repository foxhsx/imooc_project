import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
