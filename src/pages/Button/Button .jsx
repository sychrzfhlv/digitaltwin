import React, { useState, useEffect } from 'react';
import './Button.css'
import axios from 'axios';

const Getrealtime = 'http://103.175.219.228/api'; 

const Button = () => {
  const [servoValue, setServoValue] = useState(0);

  const getservo = async () => {
    try {
      const response = await axios.get(`${Getrealtime}/antarespost`);
      const value = parseInt(response["data"]["con"]["servo"]) 

      console.log( JSON.stringify(value) );

      setServoValue(value);
      console.log(servoValue);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getservo();
  }, []);

  const increaseSpeed = () => {
    setServoValue(value => value + 25);
  };

  const decreaseSpeed = () => {
    setServoValue(value => value - 25);
  };

  const sendServoValue = async () => {
    try {
      await axios.post(`${Getrealtime}/antarespost`, {
        servo: servoValue
      });
      console.log('Servo value sent successfully:', servoValue);
    } catch (e) {
      console.log('Error sending servo value:', e.message);
    }
  };

  useEffect(() => {
    // Memanggil fungsi sendServoValue saat komponen di-mount
    sendServoValue();
  }, [servoValue]); // Tambahkan dependency array [servoValue] agar fungsi dipanggil saat nilai servoValue berubah

  return (
    <div className="accelerate-container">
      <button className='increase' onClick={increaseSpeed}>
        + Throttle
      </button>
      <button className='decrease' onClick={decreaseSpeed}>
        - Throttle
      </button>
    </div>
  );
};

export default Button;