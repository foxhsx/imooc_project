import { Component } from "react";
import PropTypes from 'prop-types';
import { Card, WhiteSpace, WingBlank } from "antd-mobile";

const thumbStyle = {
  width: '50px'
}

class UserCard extends Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  }

  render () {
    const { userlist: data } = this.props;
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        { data.map(v => (
          v.avatar ? (<Card key={v._id}>
            <Card.Header
              title={v.user}
              thumb={v.avatar}
              thumbStyle={thumbStyle}
              extra={ <span>{v.title}</span> }
            ></Card.Header>
            <Card.Body>
              { v.type === 'boss' ? <p>公司：{v.company}</p>: null }
              { v.desc.split('\n').map(t => (
                <p key={t}>{t}</p>
              )) }
              { v.type === 'boss' ? <p>薪资：{v.money}</p>: null }
            </Card.Body>
          </Card>): null
        )) }
      </WingBlank>
    )
  }
}

export default UserCard;