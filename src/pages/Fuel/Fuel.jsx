import React from 'react'
import './Fuel.css'
import Chart from 'react-google-charts'

const Fuel = () => {
  return (
    <div className='fuel-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Fuel Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Fuel', 70]
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

export default Fuel