import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const DialogStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '690px',
  padding: '20px 30px',
  borderRadius: '6px',
  border: '1px solid #ccc'
}

function hexaColor() {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index]
  }
  return '#' + color
}

const Button = (props) => <button {...props}>{props.children || '这是一个按钮组件'}</button>
const Input = (props) => <input type="text" placeholder='这是一个输入框组件' {...props} />
const Dialog = ({ type, content }) => {
  const [visible, setVisible] = useState(false)
  return <div>
    <Button onClick={() => setVisible(true)}>开启弹窗</Button>
    {visible && <div style={DialogStyle}>
      <div>{type === 'success' ? '这是一个成功的弹窗' : '这是一个警告的弹窗'}</div>
      <p>{content}</p>
      <Button onClick={() => setVisible(false)}>关闭</Button>
    </div>}
  </div>
}

const HexaColor = () => {
  const colors = []
  for (let i = 0; i < 5; i++) {
    colors.push(hexaColor())
  }
  return <div>
    {
      colors.map(color => <div style={{
        background: color,
        padding: '20px 30px',
        borderRadius: '6px',
        margin: '2px 0',
        color: '#fff',
        textAlign: 'center'
      }}>{color}</div>)
    }
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Button>这是可重用的 button</Button>
      <Input />
      <Dialog type="success" content="这是弹窗" />
      <HexaColor />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
