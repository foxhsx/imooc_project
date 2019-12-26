import React from 'react';

import { Link, NavLink } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            <li>
              {/* activeClassName是NavLink提供给我们的，to里的地址和当前页面地址一样时，即是选中的状态,跳到首页时，每个页面都能
              匹配到 / 所以这里加一个exact */}
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-dashboard"></i>
                <span>首页</span>  
              </NavLink>
            </li>
            <li className="active">
              <Link to="/product">
                <i className="fa fa-sitemap"></i>
                <span>商品</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                </li>
                <li>
                  <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/order">
                <i className="fa fa-sitemap"></i>
                <span>订单</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/user">
                <i className="fa fa-sitemap"></i>
                <span>用户</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>

      </div>
    )
  }
}

export default SideNav;