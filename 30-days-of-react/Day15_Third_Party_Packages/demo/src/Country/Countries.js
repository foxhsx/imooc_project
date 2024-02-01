import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const Countries = () => {
  const [data, setData] = useState([])

  const fetchData = useCallback(() => {
    const API_URL = 'https://www.mxnzp.com/api/address/v2/list?app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09';

    axios
      .get(API_URL)
      .then((response) => {
        setData(response?.data?.data || [])
      })
      .catch(console.log)
  }, [])

  const renderCountries = useMemo(() => data?.map((country) => {
    const languageOrLanguages =
      country.languages.length > 1 ? 'Languages' : 'Language'
    const formatLanguages = country.languages
      .map(({ name }) => name)
      .join(', ')
    return (
      <div>
        <div>
          {' '}
          <img src={country.flag} alt={country.name} />{' '}
        </div>
        <div>
          <h1>{country.name}</h1>
          <p>Capital: {country.capital}</p>
          <p>
            {languageOrLanguages}: {formatLanguages}
          </p>
          <p>Population: {country.population}</p>
        </div>
      </div>
    )
  }), [data])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='App'>
      <h1>Fetching Data Using Axios</h1>
      <div>
        <p>There are {data?.length} countries in the api</p>
        <div className='countries-wrapper'>{renderCountries}</div>
      </div>
    </div>
  )
}

export default Countries