import React, { useMemo } from 'react'
import morning from './imgs/morning.jpg'
import afternoon from './imgs/afternoon.jpg'
import evening from './imgs/evening.jpg'
import night from './imgs/night.jpg'

function getTimeLine(hour) {
  if (hour >= 6 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon'
  } else if (hour >= 18 && hour < 24) {
    return 'evening'
  } else if (hour >= 0 && hour < 6) {
    return 'night'
  }
}

const bgMap = {
  morning,
  afternoon,
  evening,
  night,
}

const Time = () => {
  const currentTime = new Date().getHours()
  const timeLine = getTimeLine(currentTime)
  const containerStyle = useMemo(() => ({
    background: `url(${bgMap[timeLine]})`,
    height: '100vh',
    color: '#fff',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }), [timeLine])
  return (
    <div style={containerStyle}>现在是 {timeLine} 的 {currentTime} 点钟</div>
  )
}

export default Time