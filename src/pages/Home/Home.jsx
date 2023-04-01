import React from 'react'
import './Home.css'
import EP from './TF-85.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const cards = [
    {
      title : "Model Motor",
      details : "Motor Diesel  4 langkah horizontal"
    },
    {
      title : "Jumlah Silinder",
      details : "1"
    },
    {
      title : "Dimensi (P x L x T)(mm)",
      details : "672 x 330,5 x 496"
    },
    {
      title : "Bahan Bakar",
      details : "Solar"
    },
    {
      title : "Rasio Kompresi",
      details : "18"
    },
    {
      title : "Sistem Pendinginan",
      details : "Hopper"
    },
  ]
  return (
    <div className='home-container'>
      <div className='picture-container'>
        <img className='diesel-pic' src={EP} height={400} width={400} alt='Diesel Engine' />
      </div>
      <div className='spec-container'>

      {
        cards.map((card, index) => {
          return (

            <Card className='card-spec bg-dark text-light border border-danger border-2' key={index} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{ card.title }</Card.Title>
                <Card.Text>{ card.details }</Card.Text>
              </Card.Body>
            </Card>      

          )
        })
      }
      </div>
      
    </div>

    
  )
}

export default Home