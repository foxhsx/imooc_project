import React from 'react';

// 通用tablelist
class TableList extends React.Component {
  constructor (props) {
    super(props);
    // 这里把isFirstLoading也直接放到组件里
    this.state = {
      isFirstLoading: true
    }
  }
  componentWillReceiveProps () {
    // 列表只有在第一次挂载的时候，isFirstLoading为true,其他为false
    this.setState({
      isFirstLoading: false
    })
  }
  render () {
    // 表头
    let tableHeader = this.props.tableHeads.map((tableHead, index) => {
      if (typeof tableHead === 'object') {
        return <th key={index} width={tableHead.width}>{tableHead.name}</th>
      } else if(typeof tableHead === 'string') {
        return <th key={index}>{tableHead}</th>
      }
    })
    // 列表内容
    let listBody = this.props.children;
    // 将将要渲染的部分写成jsx模式的
    let listError = (
      <tr>
        <td colSpan={this.props.tableHeads.length} className="text-center">
          {this.state.isFirstLoading ? '正在加载数据...' : '没有找到相应的结果~'}
        </td>
      </tr>
    );
    let tableBody = listBody.length > 0 ? listBody : listError;
    // 需要传入表头和tbody
    return (
      <div className="row">
        <div className="col-ma-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {tableHeader}
              </tr>
            </thead>
            <tbody>
              { tableBody }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableList;