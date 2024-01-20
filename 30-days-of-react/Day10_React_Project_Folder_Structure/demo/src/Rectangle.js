import React, { useState } from 'react';

const Rectangle = () => {
  const [position, setPosition] = useState({ x: 250, y: 50 });

  const handleMouseEnter = () => {
    const newX = getRandomPosition(0, window.innerWidth - 500);
    const newY = getRandomPosition(0, window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  const getRandomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '500px',
        height: '100px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
    >
      30 Days of React
    </div>
  );
};

export default Rectangle;
