import React, {useEffect, useState} from 'react'
import { Chart } from 'react-google-charts';
import axios from 'axios'

const Exhaust = () => {
  const Getrealtime = 'http://localhost:8000/api';
  const [exhaustValue, setExhaustValue] = useState(0);
  const getexhaust = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["exhaust"]) 
      setExhaustValue(value)
      console.log(exhaustValue)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getexhaust();
  }, )

  return (
    <div className='exhaust-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Exhaust Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Exhaust', exhaustValue]
        ]}
        options={{
          max:300,
          majorTicks: ['0','50','100','150','200','250','300'],
          greenFrom:0,
          greenTo:200,
          yellowFrom: 200,
          yellowTo: 250,
          redFrom: 250,
          redTo:300,
          minorTicks: 10,
        }}
        />
    </div>
  )
}

export default Exhaust