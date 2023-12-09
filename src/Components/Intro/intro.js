import React from 'react';
import './intro.css';
import bg from '../../Assetes/surya.png.jpg'
import btnImg from '../../Assetes/hire.png'
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
           <span className="hello">Hello,</span>
           <span className="introText">I'm    <span className="introName">surya</span><br />MernStack Developer</span>
           <p className="introPara">I am a skilled mernstack developer ,to be able to contribute to the growth of the<br></br> organization and to achieve greater heights of excellence on par with the<br></br> brightest of the organization by performing my duties to the best of my ability</p>
           <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
