import React, { useEffect, useState } from 'react'
import { hexaColor } from './hexaColor'
import styles from './index.module.scss'

function Colors() {
  const [colors, setColors] = useState([])

  const generatorColors = () => {
    const crls = []
    for (let i = 0; i < 27; i++) {
      crls.push(hexaColor())
    }
    setColors(crls)
  }

  useEffect(() => {
    generatorColors()
  }, [])
  return (
    <div className={styles['colors-container']}>
      <button onClick={generatorColors}>重新生成</button>
      <div className='colors-wrapper'>
        {colors.map(c => (
          <div key={c} style={{ backgroundColor: c }}>{c}</div>
        ))}
      </div>
    </div>
  )
}

export default Colors