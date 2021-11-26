import React from "react";

import Login from "./container/login/Login";
import BossInfo from "./container/bossinfo/BossInfo";
import GenuisInfo from "./container/genuisinfo/GenuisInfo";
import Register from "./container/register/Register";
import AuthRoute from "./component/AuthRoute/AuthRoute";
import Chat from "./component/chat/Chat";
import Dashboard from "./component/dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 检验路由 */}
        <AuthRoute />
        <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/genuisinfo" component={GenuisInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/chat/:user" component={Chat}></Route>
          <Route path="/register" component={Register}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
