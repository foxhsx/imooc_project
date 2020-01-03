import React from 'react';

import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Statisitic from 'service/statisitic-service.jsx';
import './index.scss';

const _mm = new MUtil();
const _statistic = new Statisitic();


class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userCount: '-',
      productCount: '-',
      orderCount: '-'
    }
  }
  componentDidMount () {
    this.loadCount();
  }
  loadCount () {
    _statistic.getHomeCount().then(res => {
      this.setState(res);
    }, errMsg => {
      _mm.errorTips(errMsg)
    })
  }
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页"/>
        {/* <button className="btn btn-warning">test</button>
        </PageTitle> */}
        <div className="row">
          <div className="col-md-4">
            <Link to="/user" className="color-box brown">
              <p className="count">{ this.state.userCount }</p>
              <p className="desc">
                <i className="fa fa-user-o"></i>
                <span>用户总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/product" className="color-box green">
              <p className="count">{ this.state.productCount }</p>
              <p className="desc">
                <i className="fa fa-list"></i>
                <span>商品总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/order" className="color-box blue">
              <p className="count">{ this.state.orderCount }</p>
              <p className="desc">
                <i className="fa fa-check-square-o"></i>
                <span>用户总数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;