import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { cloneDeep } from 'lodash'

let cache = []
const Counties = () => {
  const [countryLength, setCountryLength] = useState(0)
  const [countries, setCountries] = useState([])

  const fetchCountries = () => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(res => {
        const length = res.length;
        cache = cloneDeep(res)
        setCountries(res)
        setCountryLength(length)
      })
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) {
      setCountries(cache)
    } else {
      const searchResult = cache.filter(
        country => (
          country.name?.toLowerCase().indexOf(searchValue) > -1 ||
          country.capital?.toLowerCase().indexOf(searchValue) > -1 ||
          country.languages.some(language => language.name.toLowerCase().indexOf(searchValue) > -1)
        )
      )
      setCountries(searchResult)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <div className={styles.wrapper}>
      <header className='country-header'>
        <h2>World Countries Data</h2>
        <p className='subtitle'>Currently, we have {countryLength} countries</p>
      </header>
      <div className='controls'>
        <input className='search-input' placeholder='Search countries by name, city and languages' onChange={handleSearch} />
      </div>
      <div className='countries-wrapper'>
        {
          countries.length ? 
          countries.map(country => (
          <div className='country' key={country.name}>
            <div className='country_flag'>
              <img src={country.flag} alt={country.name} />
            </div>
            <h3 className='country_name'>{country.name.toUpperCase()}</h3>
            <div className="country_text">
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages.map(language => language.name).join(',')}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
            </div>
          </div>
        )) : 'No Data'}
      </div>
    </div>
  )
}

export default Counties