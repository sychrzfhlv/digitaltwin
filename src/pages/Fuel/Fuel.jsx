import React from 'react'
import './Fuel.css'
import GaugeChart from 'react-gauge-chart'

const Fuel = () => {
  return (
    <div className='fuel-container'>
      <GaugeChart className='gauge-chart'
      nrOfLevels={20}
      percent={0.23}
      textColor={'#000000'}
      marginInPercent = {0.1}
      />
    </div>
  )
}

export default Fuel