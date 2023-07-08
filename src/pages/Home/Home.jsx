import React from 'react';
import './Home.css';
import IMG1 from './1.jpg'
import IMG2 from './2.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title: 'Digital Twin Description',
    description: 'Digital twin adalah representasi digital dari objek fisik, proses, atau sistem yang mencerminkan secara real-time keadaan dan perilakunya.',
  },

  {
    id : 2,
    image : IMG2,
    title: 'Our Project',
    description: 'Projek kami mengerjakan tentang perancangan sistem monitor dan kontrol pada mesin Yanmar TF-65.',
  },
]

const Home = () => {
return (
  <div className='home-container'>
  <section id='portofolio'>
  <h1>Informasi Umum</h1>

  <div className="container home__container">
    {
      data.map(({id, image, title, description}) => {
        return(
          <article key={id} className="home__item">
            <div className="home__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="home__item-cta">
              <span href={description} className='home-des' target='_blank'>{description}</span>
            </div>
          </article>
        )
      })
    }
  </div>
  </section>
  </div>
    );
  }

export default Home;






























// import React from 'react'
// import './Home.css'
// import EP from './TF-85.png'
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.css';

// const Home = () => {
//   const cards = [
//     {
//       title : "Model Motor",
//       details : "Motor Diesel  4 langkah horizontal"
//     },
//     {
//       title : "Jumlah Silinder",
//       details : "1"
//     },
//     {
//       title : "Dimensi (P x L x T)(mm)",
//       details : "672 x 330,5 x 496"
//     },
//     {
//       title : "Bahan Bakar",
//       details : "Solar"
//     },
//     {
//       title : "Rasio Kompresi",
//       details : "18"
//     },
//     {
//       title : "Sistem Pendinginan",
//       details : "Hopper"
//     },
//   ]
//   return (
//     <div className='home-container'>
//       <div className='picture-container'>
//         <img className='diesel-pic' src={EP} height={400} width={400} alt='Diesel Engine' />
//       </div>
//       <div className='spec-container'>

//       {
//         cards.map((card, index) => {
//           return (

//             <Card className='card-spec bg-dark text-light border border-danger border-2' key={index} style={{ width: '18rem' }}>
//               <Card.Body>
//                 <Card.Title>{ card.title }</Card.Title>
//                 <Card.Text>{ card.details }</Card.Text>
//               </Card.Body>
//             </Card>      

//           )
//         })
//       }
//       </div>
      
//     </div>

    
//   )
// }

// export default Home