import React from 'react'
import './Cooling.css'
import Chart from 'react-google-charts'

const Cooling = () => {
  return (
    <div className='cooling-container'>
      <Chart 
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Cooling Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Cooling', 70]
        ]}
        options={{
          max:150,
          majorTicks: ['0','30','60','90','120','150'],
          greenFrom:0,
          greenTo:90,
          yellowFrom: 90,
          yellowTo: 120,
          redFrom: 120,
          redTo:150,
          minorTicks: 10,
        }}
      />
    </div>
  )
}

export default Cooling