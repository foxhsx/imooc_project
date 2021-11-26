import React, { Component } from "react";
import { ImagePicker } from 'antd-mobile'
import PropTypes from 'prop-types'

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class AvatarSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      files: data,
      multiple: false,
    }
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
    this.props.onChange(files[0])
  }
  render() {
    const { files } = this.state
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </div>
    )
  }
}

export default AvatarSelector