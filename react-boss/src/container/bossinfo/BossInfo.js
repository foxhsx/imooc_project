import { Component } from "react";
import { Button, InputItem, NavBar, TextareaItem  } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/AvatarSelector'

class BossInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: ''
    }
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
        >BOSS完善信息页面</NavBar>
        <AvatarSelector />
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
        <Button type="primary">保存</Button>
      </div>
    )
  }
}

export default BossInfo