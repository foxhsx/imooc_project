import React, { useEffect, useState } from 'react'
import loading from './imgs/loading.svg'

const loadingStyle = {
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000000000
}

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    showLoading && <div style={loadingStyle}>
      <img src={loading} alt='' />
    </div>
  )
}

export default Loading