import React from 'react'

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
].sort((a, b) => b.population - a.population)

console.log(tenHighestPopulation)

const WorldPopulation = () => {
  const baseWidth = 300;
  const height = '20px';
  const widthBili = baseWidth / tenHighestPopulation[0].population;

  return (
    <div style={{ margin: '20px auto' }}>
      <div style={{ textAlign: 'center' }}>World Population</div>
      {
        tenHighestPopulation.map((country, index) => {
          return (
            <div key={index} style={{ display: 'flex', margin: '10px auto' }}>
              <div className="name" style={{ backgroundColor: country.country, width: '200px' }}>{country.country}</div>
              <div style={{ width: '310px', height, margin: '2px 10px' }}>
                <div style={{ width: `${widthBili * country.population}px`, height, backgroundColor: '#f2a93b' }}></div>
              </div>
              <div className="population">{country.population}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default WorldPopulation
