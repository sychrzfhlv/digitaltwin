import React from 'react';
import './About.css';
import IMG1 from './1.jpeg'
import IMG2 from './2.jpeg'
import IMG3 from './3.jpeg'
import IMG4 from './4.jpeg'

const data = [
  {
    id : 1,
    image : IMG1,
    title: 'Syach Reza Fahlevi',
    description: 'Perancangan aplikasi long-range and fuel consumption monitoring berbasis digital platform untuk pengembangan digital twin.',
  },

  {
    id : 2,
    image : IMG2,
    title: 'Rayhan',
    description: 'Judul TA Rayhan.',
  },

  {
    id : 3,
    image : IMG3,
    title: 'Kiel',
    description: 'Judul TA Kiel.',
  },

  {
    id : 4,
    image : IMG4,
    title: 'Andre',
    description: 'Judul TA Andre.',
  },
]

const About = () => {
return (
  <div className='about-container'>
  <section id='about'>
  <h1>Tentang Kami</h1>

  <div className="container about__container">
    {
      data.map(({id, image, title, description}) => {
        return(
          <article key={id} className="about__item">
            <div className="about__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="about__item-cta">
              <span href={description} className='des' target='_blank'>{description}</span>
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

export default About;

