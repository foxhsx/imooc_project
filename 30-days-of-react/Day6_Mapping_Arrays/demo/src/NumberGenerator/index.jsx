import React from 'react'
import './index.css'

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const numbers = [];
for (let i = 0; i < 32; i++) {
  numbers.push(i);
}

const NumberGenerator = () => {
  return (
    <div className='flex'>
      {
        numbers.map(number => <div className={`square ${isPrime(number)? 'prime' : ''}`} key={number}>{number}</div>)
      }
    </div>
  )
}

export default NumberGenerator;
