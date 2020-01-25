import React from 'react';
import Simditor from 'simditor';

import 'simditor/styles/simditor.scss';
import './index.scss';

// 通用富文本编辑器，以来jQuery
class RichEditor extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount(){
    this.loadEditor();
  }
  componentWillReceiveProps(nextProps) {
    // 只有defaultDetail发生变化的时候，才触发setValue
    // 如果这里写detail的话，会陷入循环，因为detail一改变，相当于props发生了变化，那么componentWillReceiveProps会一直触发

    if (this.props.defaultDetail !== nextProps.defaultDetail) {
      // 自带渲染数值的方法
      this.simditor.setValue(nextProps.defaultDetail)
    }
    
  }
  loadEditor () {
    let element = this.refs['textarea'];
    this.simditor = new Simditor({
      textarea: $(element),
      defayltValue: this.props.placeholder || "请输入内容",
      upload: {
        url: '/manage/product/richtext_img_upload.do',
        defaultImage: '',
        fileKey: 'upload_file'
      }
    })
    this.bindEditorEvent();
  }
  // 初始化富文本编辑器的事件，把jQuery的事件暴露给外边
  bindEditorEvent () {
    this.simditor.on('valuechanged', (e) => {
      this.props.onValueChange(this.simditor.getValue());
    })
  }
  render () {
    return (
      <div className="rich-editor">
        <textarea ref="textarea"></textarea>
      </div>
    )
  }
}

export default RichEditor;