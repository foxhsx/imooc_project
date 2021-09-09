import { Component } from 'react'

export default function hsxForm(Comp) {
  return class WrapperComp extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    handleChange = (key, val) => {
      this.setState({
        [key]: val
      })
    }
    render() {
      return <Comp
       {...this.props}
       handleChange={this.handleChange}
       state={this.state}
      ></Comp>
    }
  }
}