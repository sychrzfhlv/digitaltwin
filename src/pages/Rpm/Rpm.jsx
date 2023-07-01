import React from 'react'
import './Rpm.css'
import { Chart } from 'react-google-charts';

const Rpm = () => {
  return (
    <div className='exhaust-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Exhaust Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Rpm', 70]
        ]}
        options={{
          max:2500,
          majorTicks: ['0','500','1000','1500','2000','2500'],
          greenFrom: 0,
          greenTo: 1000,
          yellowFrom: 1000,
          yellowTo: 2000,
          redFrom: 2000,
          redTo:2500,
          minorTicks: 10,
        }}
        />
    </div>
  )
}

export default Rpm