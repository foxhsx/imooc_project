import { InputItem, List, NavBar, Icon, Grid } from 'antd-mobile'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import { getChatId } from '../../utils'

const Item = List.Item
const emoji = '😀 😃 😄 😆 😍 🤩 🥰 😳 😟 😲'.split(' ').filter(v => v).map(v => ({text: v}))

@connect(
  state=>state,
  {getMsgList, sendMsg, recvMsg}
)
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      showEmoji: false
    }
  }
  componentDidMount() {
    if (!this.props.chat.chatMsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }
  fixCarousel() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }
  handleSubmit() {
    const from  = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg(from, to, msg)
    this.setState({
      text: ''
    })
  }
  render() {
    const user = this.props.match.params.user
    const users = this.props.chat.users
    const chatid = getChatId(user, this.props.user._id)
    const chatMsgs = this.props.chat.chatMsg.filter(v => v.chatid == chatid)
    const row = Math.ceil(emoji.length/9)
    if (!users[user]) return null;
    return (
      <div id="chat-page">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.goBack()}}
        >
          { users[user].name }
        </NavBar>
        <div className="chat-me">
          {
            chatMsgs.map(v => {
              return v.to == user ? (
                <List key={v._id}>
                  <Item extra={<img src={users[v.to].avatar} />}>{v.content}</Item>
                </List>
              ) : (
                <List key={v._id}>
                  <Item
                    thumb={users[v.from].avatar}
                  >{v.content}</Item>
                </List>
              )
            })
          }
        </div>
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={ this.state.text }
              onChange={ v => this.setState({ text: v }) }
              extra={
                (
                  <div>
                    <span onClick={() => {
                      this.setState({ showEmoji: !this.state.showEmoji })
                      this.fixCarousel()
                    }}>😀 </span>
                    <span onClick={ () => this.handleSubmit() }>发送</span>
                  </div>
                )
              }
            ></InputItem>
          </List>
          {
            this.state.showEmoji ? (
              <Grid
               data={emoji}
               columnNum={9}
               carouselMaxRow={row}
               isCarousel={true}
               onClick={el => {
                 this.setState({
                   text: this.state.text + el.text
                 })
               }}
              />
            ) : null
          }
          
        </div>
      </div>
    )
  }
}

export default Chat