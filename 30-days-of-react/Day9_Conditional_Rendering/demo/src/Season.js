import React, { useMemo, useState } from 'react'
import Spring from './imgs/Spring.jpg'
import Summer from './imgs/Summer.jpg'
import Autumn from './imgs/Autumn.jpg'
import Winter from './imgs/Winter.jpg'

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']
const seasonToMonthMap = {
  Spring: [3, 4, 5],
  Summer: [6, 7, 8],
  Autumn: [9, 10, 11],
  Winter: [12, 1, 2],
}
const seasonPhotoMap = {
  Spring,
  Summer,
  Autumn,
  Winter,
}

const textAlign = {
  textAlign: 'center',
}

const btnStyle = {
  width: '100px',
  height: '40px',
  margin: '10px',
  border: '1px solid #000',
  borderRadius: '3px',
  background: '#fff',
  color: '#000',
  fontSize: '16px',
  cursor: 'pointer',
}

const Season = () => {
  const currentTime = new Date().getMonth() + 1;
  const currentSeason = Object.keys(seasonToMonthMap).find(season => seasonToMonthMap[season].includes(currentTime))
  const [season, setSeason] = useState(currentSeason)
  const seasonContainerStyle = useMemo(() => ({
    background: `url(${seasonPhotoMap[season]})`,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }), [season])
  
  return (
    <div style={seasonContainerStyle}>
      <div style={textAlign}>现在是 {currentTime} 月，是 {currentSeason}</div>
      <div style={textAlign}>您看到的是 {season} 的图片</div>
      <div>
        {
          seasons.map(season => <button style={btnStyle} key={season} onClick={() => setSeason(season)}>{season}</button>)
        }
      </div>
    </div>
  )
}

export default Season