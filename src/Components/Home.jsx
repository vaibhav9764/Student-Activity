import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import Letter from './letter';

function Home() {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (clickedLocation === 'CRC' || clickedLocation === 'MAC' ||clickedLocation === 'AUDITORIUM' ||clickedLocation === 'OAT' ||clickedLocation === 'Lawns'  ) {
      setShowLetter(true);
    } else {
      setShowLetter(false);
    }
  }, [clickedLocation]);

  const handleItemClick = (location) => {
    setClickedLocation(location);
  };

  return (
    <main className='main-container'>
      {showLetter ? (
        <Letter />
      ) : (
        <>
          <div className='main-title'>
            <h3>PERMISSION FOR LOCATIONS</h3>
            <BsFillArchiveFill />
          </div>

          <div className='main-cards'>
            <div className='card' onClick={() => handleItemClick('AUDITORIUM')}>
              <div className='card-inner'>
                <h3>AUDITORIUM</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card' onClick={() => handleItemClick('MAC')}>
              <div className='card-inner'>
                <h3>MAC</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card' onClick={() => handleItemClick('CRC')}>
              <div className='card-inner'>
                <h3>CRC</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card' onClick={() => handleItemClick('OAT')}>
              <div className='card-inner'>
                <h3>OAT</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card' onClick={() => handleItemClick('LAWNS')}>
              <div className='card-inner'>
                <h3>LAWNS</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
          </div>

          <div className='main-title'>
            <h3>PERMISSION FOR PURCHASE</h3>
            <BsFillArchiveFill />
          </div>
          <div className='main-card'>
            <div className='card'>
              <div className='card-inner'>
                <h3>SPORTS</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>DEPARTMENT</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>CLUB</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
            </div>
          </div>
          
          <div className='main-title'>
            <h3>APPROVAL STATUS</h3>
            <BsFillArchiveFill />
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
