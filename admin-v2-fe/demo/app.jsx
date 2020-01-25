import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Component extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Cecil',
      age: 18
    }
    // 把hanleClick里的this修正到component里，做一下作用域的改变
    // this.hanleClick = this.hanleClick.bind(this)
  }
  hanleClick() {
    this.setState({
      age: this.state.age + 1
    })
  }
  onValueChange (e) {
    this.setState({
      age: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <p>I am {this.state.age} years old!</p>
        {/* 事件必须是驼峰式 */}
        {/* <button onClick={this.hanleClick}>加一岁</button> */}

        {/* 使用箭头函数 */}
        <button onClick={(e) => {this.hanleClick(e)}}>加一岁</button>
        {/* 输入事件 */}
        <input type="text" onChange={(e) => {this.onValueChange(e)}} />
      </div>
    )
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props)
  }
  render (props) {
    return <h1>{this.props.title}</h1>
  }
}

class TitleChildren extends React.Component {
  constructor(props) {
    super(props)
  }
  render (props) {
    return <h1>{this.props.children}</h1>
  }
}

class App extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      data: 'Old State'
    }
    console.log('初始化数据');
  }
  // 组件将要加载
  componentWillMount(){
    console.log('componentWillMount');
  }
  // 组件加载完成
  componentDidMount(){
    console.log('componentDidMount');
  }
  // 接收从父组件传过来的props的时候，就会触发 
  componentWillReceiveProps(){
      console.log('componentWillReceiveProps');
  }
  // 需要有返回值，判断子组件是不是应该更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // 组件将要更新,如果上一个shouldComponentUpdate返回值为true的话，就会触发
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  // 更新完成 
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // 组件销毁时调用
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // 点击事件
  handleClick() {
    console.log('这里是更新');
    this.setState({
      data: 'New Date'
    })
  }
  // 渲染
  render() {
    console.log('render');
    return (
      <div className="">
        <h1>{this.props.data}</h1>
        {/* 纯组件形式的 */}
        {/* <Title title="Cecil" /> */}
        {/* 类似vue插槽——容器式的 */}
        {/* <TitleChildren>
          <span>Cecil_He study React</span>
        </TitleChildren> */}
        {/* <hr/> */}
         {/* <Component/> */}
         <button onClick={() => {this.handleClick()}}>更新组件</button>
      </div>
    )
  }
}

class AppFather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Old Props',
      hasChild: true
    }
  }
  onPropsChange() {
    console.log('传入props');
    this.setState({
      data: 'New Props'
    })
  }
  onChangeChild() {
    console.log('这是销毁')
    this.setState({
      hasChild: false
    })
  }
  render() {
    return (
      <div>
        {
          this.state.hasChild ? <App data={this.state.data}/> : null
        }
        <button onClick={()=>{this.onPropsChange()}}>改变props</button>
        <button onClick={()=>{this.onChangeChild()}}>干掉子组件</button>
      </div>
    )
  }
}

// 子组件改变父组件的数据
class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  hanleClick() {
    // 调用父组件的changeColor
    this.props.changeColor('red')
  }
  render() {
    return (
      <div>
        <h1>父组件背景颜色 {this.props.bgColor}</h1>
        <button onClick={(e) => {this.hanleClick(e)}}>改变父组件颜色</button>
      </div>
    )
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#999'
    }
  }
  onBgColorChange (color) {
    this.setState({
      bgColor: color
    })
  }
  render (props) {
    return (
      <div style={{background: this.state.bgColor}}>
        {/* 自定义changeColor事件，并返回子组件传来的color */}
        <Child bgColor={this.state.bgColor} changeColor={(color) => {this.onBgColorChange(color)}} />
      </div>
    )
  }
}

// 兄弟组件之间传值
// 说白了就是由一个组件先改变父组件中会传给另一个组件的值，然后父组件把这个值传过去就完事儿了。
class Child1 extends React.Component {
  constructor(props) {
    super(props);
  }
  hanleClick() {
    // 调用父组件的changeColor
    this.props.changeChild2Color('red')
  }
  render() {
    return (
      <div>
        <h1>Child1 {this.props.bgColor}</h1>
        <button onClick={(e) => {this.hanleClick(e)}}>改变Child2颜色</button>
      </div>
    )
  }
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{color: this.props.color}}>
        <h1>Child2 {this.props.color}</h1>
      </div>
    )
  }
}

class Father2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: '#333'
    }
  }
  onChangeChild2Color (color) {
    this.setState({
      childColor: color
    })
  }
  render () {
    return (
      <div>
        <Child1 changeChild2Color={(color) => {this.onChangeChild2Color(color)}}/>
        <Child2 color={this.state.childColor}/>
      </div>
    )
  }
}


class A extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        Component A
        <Switch>
          <Route exact path={`${this.props.match.path}`} render={(route) => {
            return (
            <div>这是不带参数的A</div>
            )
          }} />
          {/* 不是参数，而是子路径 */}
          <Route path={`${this.props.match.path}/sub`} render={(route) => {
            return (
            <div>这是带子路径的组件</div>
            )
          }} />
          <Route path={`${this.props.match.path}/:id`} render={(route) => {
            return (
            <div>这是带参数的A，参数是：{route.match.params.id}</div>
            )
          }} />
        </Switch>
      </div>
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>Component B</div>
    )
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Link to="/a">组件A</Link>
        <br/>
        <Link to="/a/123">带参数组件A</Link>
        <br/>
        <Link to="/b">组件B</Link>
        <br/>
        <Link to="/a/sub">子路径</Link>
        <br/>
        {/* children预留字段，效果类似插槽 */}
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Router>
      <Wrapper>
        <Route path="/a" component={A} />
        {/* <Route path="/a/:id" component={A} /> */}
        <Route path="/b" component={B} />
      </Wrapper>
    </Router>
    <AppFather/>
    <Father/>
    <Father2/>
  </div>,
  document.getElementById('app')
);
