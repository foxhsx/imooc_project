import { Badge, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(
  state => state,
)
class Msg extends Component {
  getLast(arr) {
    return arr[arr.length - 1]
  }
  render() {
    // 根据聊天用户分组
    const msgGroup = {}
    const Brief = List.Item.Brief
    this.props.chat.chatMsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const userid = this.props.user._id;
    const chatList = Object.values(msgGroup).sort((a, b) => {
      const a_last = this.getLast(a).create_time
      const b_last = this.getLast(b).create_time
      return b_last - a_last  // 排序，最新消息在列表最上面
    })
    return (
      <div>
        <List>
          {
            chatList.map(v => {
              const lastItem = this.getLast(v)
              const targetId = v[0].from == userid ? v[0].to : v[0].from 
              const userInfo = this.props.chat.users[targetId] || {}
              const unreadNum = v.filter(n => !n.read && n.to == userid).length
              return (<List.Item
                key={lastItem._id}
                thumb={userInfo.avatar}
                extra={<Badge text={unreadNum}></Badge>}
                arrow="horizontal"
                onClick={() => this.props.history.push(`/chat/${targetId}`)}
              >
                {lastItem.content}
                <Brief>{userInfo.name}</Brief>
              </List.Item>)
              }
            )
          }
        </List>
      </div>
    )
  }
}

export default Msg