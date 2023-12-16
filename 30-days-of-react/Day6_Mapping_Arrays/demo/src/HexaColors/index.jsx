import React, { Fragment } from 'react'
import './index.css'

function hexaColor() {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index]
  }
  return '#' + color
}

const numbers = [];
for (let i = 0; i < 32; i++) {
  numbers.push(i);
}

const HexaColors = () => {
  return (
    <Fragment>
      <div style={{ margin: '30px 0', fontSize: '24px', textAlign: 'center' }}>HexaColor</div>
      <div className='flex' style={{ marginTop: '20px' }}>
        {
          numbers.map(number => {
            const color = hexaColor();
            return <div className="color" style={{ backgroundColor: color }} key={number}>{color}</div>
          })
        }
      </div>
    </Fragment>
  )
}

export default HexaColors;
