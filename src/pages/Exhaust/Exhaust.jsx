import React from 'react'
import './Exhaust.css'
import { Chart } from 'react-google-charts';

const Exhaust = () => {
  return (
    <div className='exhaust-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Exhaust Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Exhaust', 70]
        ]}
        options={{
          max:300,
          majorTicks: ['0','50','100','150','200','250','300'],
          greenFrom:0,
          greenTo:225,
          yellowFrom: 225,
          yellowTo: 270,
          redFrom: 270,
          redTo:300,
          minorTicks: 10,
        }}
        />
    </div>
  )
}

export default Exhaust