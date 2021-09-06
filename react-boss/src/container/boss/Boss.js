import { Component } from "react";
import { connect } from "react-redux";
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from "../../component/usercard/UserCard";

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends Component {
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    const { userlist } = this.props;
    return <UserCard userlist={userlist}></UserCard>
  }
}

export default Boss