import React, {useEffect, useState} from 'react'
import Chart from 'react-google-charts'
import axios from 'axios'

const Servo = () => {

  const Getrealtime = 'https://dtdigitaltwin.my.id/api';
  const [servoValue, setServoValue] = useState(0);
  const getservo = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["servo"]) 
      setServoValue(value)
      console.log(servoValue)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getservo();
  }, )

  return (
    <div className='fuel-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Fuel Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Servo', servoValue]
        ]}
        options={{
          max:250,
          majorTicks: ['0','50','100','150','200','250'],
          redFrom: 0,
          redTo:50,
          yellowFrom: 50,
          yellowTo: 150,
          greenFrom:150,
          greenTo:250,
          minorTicks: 25,
      }}
      />
    </div>
  )
}

export default Servo








































// import React, {useState, useEffect} from 'react'
// import './Servo.css'
// import Chart from 'react-google-charts'

// const Servo = () => {
  
//   return (
//     <div className='servo-container'>
//       <Chart className='gauge-chart'
//         width={'150px'}
//         height={'150px'}
//         chartType="Gauge"
//         loader={<div>Servo Chart</div>}
//         data={[
//           ['Label', 'Value'],
//           ['Servo', 70]
//         ]}
//         options={{
//           max:180,
//           majorTicks: ['0','30','60','90','120','150', '180'],
//           greenFrom: 0,
//           greenTo: 90,
//           yellowFrom: 90,
//           yellowTo: 150,
//           redFrom: 150,
//           redTo:180,
//           minorTicks: 6,
//       }}
//       />
//     </div>
//   )
// }

// export default Servo



























// import React, { useState } from 'react';

// let speed = 0;
// const Servo = () => {
//   const [displaySpeed, setDisplaySpeed] = useState(0);
//   function setSpeed(s) {
//     speed = speed + s;
//     const arrow = document.getElementsByClassName("arrow-wrapper")[0];
//     arrow.style.transform = 'rotate('+speed+'deg)'
//     if(s === -1) {
//       let scale = Math.floor(speed / 10) + 2
//       const speedometerScale = document.getElementsByClassName(`speedometer-scale-${scale}`)[0];
//       speedometerScale.style.background = 'black'
//     }
    
//     if(s === 1) {
//       let color = 'green'
//       if(speed >= 45) color = 'yellow';
//       if(speed >= 90) color = 'orange';
//       if(speed >= 135) color = 'red';
//       let scale = Math.floor(speed / 10) + 1 
//       const speedometerScale = document.getElementsByClassName(`speedometer-scale-${scale}`)[0];
//       speedometerScale.style.background = color
//     }
//   }


//   return (
//     <div className='rpm-container'>
//       <div className="speedometer-container">
//         <div className="speedometer-text">
//           <div className="static">Servo </div>
//           <div className="dynamic">
//             <span className="km" id='rpm_display'>{displaySpeed}</span>
//             <span className="unit"> deg</span>
//           </div>
//         </div>
//         <div className="center-point"></div>
//         <div className="speedometer-center-hide"></div>
//         <div className="speedometer-bottom-hide"></div>
//         <div className="arrow-container">

//           <div className="arrow-wrapper speed-0">
//             <div className="arrow"></div>
//           </div>

//         </div>
//         <div className="speedometer-scale speedometer-scale-1"></div>
//         <div className="speedometer-scale speedometer-scale-2"></div>
//         <div className="speedometer-scale speedometer-scale-3"></div>
//         <div className="speedometer-scale speedometer-scale-4"></div>
//         <div className="speedometer-scale speedometer-scale-5"></div>
//         <div className="speedometer-scale speedometer-scale-6"></div>
//         <div className="speedometer-scale speedometer-scale-7"></div>
//         <div className="speedometer-scale speedometer-scale-8"></div>
//         <div className="speedometer-scale speedometer-scale-9"></div>
//         <div className="speedometer-scale speedometer-scale-10"></div>
//         <div className="speedometer-scale speedometer-scale-11"></div>
//         <div className="speedometer-scale speedometer-scale-12"></div>
//         <div className="speedometer-scale speedometer-scale-13"></div>
//         <div className="speedometer-scale speedometer-scale-14"></div>
//         <div className="speedometer-scale speedometer-scale-15"></div>
//         <div className="speedometer-scale speedometer-scale-16"></div>
//         <div className="speedometer-scale speedometer-scale-17"></div>
//         <div className="speedometer-scale speedometer-scale-18"></div>
//         <div className="speedometer-scale speedometer-scale-19"></div>
//       </div>
//       <div className="accelerate-container">
//         <button className='increase' onClick={() => { 
//           if(displaySpeed < 180) {
//             setSpeed(5);
//             setDisplaySpeed(displaySpeed + 5);
//           };
//           }}>Increase Speed
//         </button>
//         <button className='decrease' onClick={() => { 
//           if(speed > 0) {
//             setSpeed(-5);
//             setDisplaySpeed(displaySpeed - 5);
//           };
//           }}>Decrease Speed
//         </button>
//       </div>
//     </div>
    
//   )
// }

// export default Servo
