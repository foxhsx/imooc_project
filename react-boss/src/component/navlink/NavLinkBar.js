import { Component } from "react";
import PropTypes from 'prop-types'
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";

@withRouter
class NavLinkBar extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    const navList = this.props.data.filter(v => !v.hide);
    const { pathname } = this.props.location
    return (
      <TabBar>
        {
          navList.map(v => (
            <TabBar.Item
              title={v.text}
              key={v.path}
              icon=""
              selectedIcon=""
              selected={ pathname === v.path }
              onPress={() => {
                this.props.history.push(v.path)
              }}
            ></TabBar.Item>
          ))
        }
      </TabBar>
    )
  }
}

export default NavLinkBar