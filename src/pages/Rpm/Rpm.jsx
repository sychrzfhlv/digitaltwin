import './Rpm.css'
import React, { useState } from 'react';

let speed = 0;
const Rpm = () => {
  const [displaySpeed, setDisplaySpeed] = useState(0);
  function setSpeed(s) {
    speed = speed + s;
    const arrow = document.getElementsByClassName("arrow-wrapper")[0];
    arrow.style.transform = 'rotate('+speed+'deg)'
    if(s === -1) {
      let scale = Math.floor(speed / 10) + 2
      const speedometerScale = document.getElementsByClassName(`speedometer-scale-${scale}`)[0];
      speedometerScale.style.background = 'black'
    }
    
    if(s === 1) {
      let color = 'green'
      if(speed >= 45) color = 'yellow';
      if(speed >= 90) color = 'orange';
      if(speed >= 135) color = 'red';
      let scale = Math.floor(speed / 10) + 1 
      const speedometerScale = document.getElementsByClassName(`speedometer-scale-${scale}`)[0];
      speedometerScale.style.background = color
    }
  }


  return (
    <div className='rpm-container'>
      <div className="speedometer-container">
        <div className="speedometer-text">
          <div className="static">Speed </div>
          <div className="dynamic">
            <span className="km" id='rpm_display'>{displaySpeed}</span>
            <span className="unit"> RPM</span>
          </div>
        </div>
        <div className="center-point"></div>
        <div className="speedometer-center-hide"></div>
        <div className="speedometer-bottom-hide"></div>
        <div className="arrow-container">

          <div className="arrow-wrapper speed-0">
            <div className="arrow"></div>
          </div>

        </div>
        <div className="speedometer-scale speedometer-scale-1"></div>
        <div className="speedometer-scale speedometer-scale-2"></div>
        <div className="speedometer-scale speedometer-scale-3"></div>
        <div className="speedometer-scale speedometer-scale-4"></div>
        <div className="speedometer-scale speedometer-scale-5"></div>
        <div className="speedometer-scale speedometer-scale-6"></div>
        <div className="speedometer-scale speedometer-scale-7"></div>
        <div className="speedometer-scale speedometer-scale-8"></div>
        <div className="speedometer-scale speedometer-scale-9"></div>
        <div className="speedometer-scale speedometer-scale-10"></div>
        <div className="speedometer-scale speedometer-scale-11"></div>
        <div className="speedometer-scale speedometer-scale-12"></div>
        <div className="speedometer-scale speedometer-scale-13"></div>
        <div className="speedometer-scale speedometer-scale-14"></div>
        <div className="speedometer-scale speedometer-scale-15"></div>
        <div className="speedometer-scale speedometer-scale-16"></div>
        <div className="speedometer-scale speedometer-scale-17"></div>
        <div className="speedometer-scale speedometer-scale-18"></div>
        <div className="speedometer-scale speedometer-scale-19"></div>
      </div>
      <div className="accelerate-container">
        <button className='increase' onClick={() => { 
          if(displaySpeed < 180) {
            setSpeed(1);
            setDisplaySpeed(displaySpeed + 1);
          };
          }}>Increase Speed
        </button>
        <button className='decrease' onClick={() => { 
          if(speed > 0) {
            setSpeed(-1);
            setDisplaySpeed(displaySpeed - 1);
          };
          }}>Decrease Speed
        </button>
      </div>
    </div>
    
  )
}

export default Rpm
