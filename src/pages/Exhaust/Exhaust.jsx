import React from 'react'
import './Exhaust.css'
import GaugeChart from 'react-gauge-chart'

const Exhaust = () => {
  return (
    <div className='exhaust-container'>
      <GaugeChart className='gauge-chart'
      nrOfLevels={20}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#5BE12C', '#F5CD19', '#EA4228']}
      arcPadding={0.02}
      percent={0.4}
      textColor={'#000000'}
      marginInPercent = {0.1}
      />
    </div>
  )
}

export default Exhaust