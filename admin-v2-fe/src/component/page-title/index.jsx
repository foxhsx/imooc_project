import React from 'react';

class PageTitle extends React.Component {
  constructor (props) {
    super(props)
  }
  // 使用componentWillMount
  componentWillMount () {
    document.title = this.props.title
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">{ this.props.title }</h1>
          {/* 容器式的组件 */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PageTitle;