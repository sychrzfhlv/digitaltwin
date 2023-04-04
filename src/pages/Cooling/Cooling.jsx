import React from 'react'
import './Cooling.css'
import GaugeChart from 'react-gauge-chart'

const Cooling = () => {
  return (
    <div className='cooling-container'>
      <GaugeChart 
      animate={true}
      nrOfLevels={15}
      percent={0.5}
      needleColor="red"
      textColor="black"
      marginInPercent = {0.13}
      />
    </div>
  )
}

export default Cooling