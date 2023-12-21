import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { countriesData } from './data/countries'

const generateIndex = () => {
  return Math.floor(Math.random() * 250);
}
let timer;
const labelStyle = {
  color: '#333',
  fontWeight: 'bold',
}
const wrapperStyle = {
  padding: '20px 30px',
  borderRadius: '3px',
  boxShadow: '2px 2px 10px #000',
  width: '500px',
  margin: '0 auto',
}

const buttonStyle = {
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  backgroundColor: '#61dbfb',
  textAlign: 'center',
  margin: '10px auto',
}

const SelectCountry = () => {
  const [index, setIndex] = useState(0)
  const country = useMemo(() => countriesData[index], [index])

  const showCountry = useCallback(() => {
    timer = setInterval(() => {
      const newIndex = generateIndex();
      setIndex(newIndex)
    }, 1000)
  }, [])

  const selectCountry = useCallback(() => {
    clearInterval(timer)
  }, [])

  useEffect(() => {
    showCountry()

    return () => {
      clearInterval(timer)
    }
  }, [showCountry])

  return (
    <div style={wrapperStyle}>
      <h3 style={{ textAlign: 'center' }}>Select Country</h3>
      <div key={country.name}>
        <img src={country.flag} alt='' />
        <ul>
          <li>
            <label style={labelStyle}>Capital: </label>
            <span>{country.capital}</span>
          </li>
          <li>
            <label style={labelStyle}>Language: </label>
            <span>{country.languages[0]}</span>
          </li>
          <li>
            <label style={labelStyle}>Population: </label>
            <span>{country.population}</span>
          </li>
          <li>
            <label style={labelStyle}>Currency: </label>
            <span>{country.currency}</span>
          </li>
        </ul>
      </div>
      <button style={buttonStyle} onClick={selectCountry}>Select Country</button>
      <button style={{
        ...buttonStyle,
        marginLeft: '20px'
      }} onClick={showCountry}>Restart</button>
    </div>
  )
}

export default SelectCountry
