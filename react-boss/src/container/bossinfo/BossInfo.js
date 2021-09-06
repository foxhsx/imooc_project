import { Component } from "react";
import { Button, InputItem, NavBar, TextareaItem } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/AvatarSelector'
import { connect } from "react-redux";
import { update } from '../../redux/user.redux'
import { Redirect } from "react-router-dom";

@connect(
  state => state.user,
  { update }
)
class BossInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
      avatar: ''
    }
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  changAvatar(file) {
    this.setState({
      avatar: file.url
    })
  }
  render() {
    return (
      <div>
        {
          this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null
        }
        <NavBar
          mode="dark"
        >BOSS完善信息页面</NavBar>
        <AvatarSelector onChange={(file) => this.changAvatar(file)} />
        <InputItem
          onChange={(v) => this.onChange('title', v)}
        >招聘职位</InputItem>
        <InputItem
          onChange={(v) => this.onChange('company', v)}
        >公司名称</InputItem>
        <InputItem
          onChange={(v) => this.onChange('money', v)}
        >职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={(v) => this.onChange('desc', v)}
        />
        <Button
          onClick={() => {
            this.props.update(this.state)
          }}
          type="primary">保存</Button>
      </div>
    )
  }
}

export default BossInfo