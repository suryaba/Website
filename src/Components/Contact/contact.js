import React from 'react'
import './contact.css';
import instagram from '../../Assetes/instagram.png'
import linkedin from '../../Assetes/linkedin.png'
import youtube from '../../Assetes/youtube.png'
import indeed from '../../Assetes/indeed.png'
import github from '../../Assetes/github.png'


const contact = () => {
  return (
    <div> 
      <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work oppertunities</span>
            <form className="contactform">
                <input type='text' className='name' placeholder='Your Name'/><br></br>
                <input type='email' className='email' placeholder='Your Email'/><br></br>
                <textarea className="msg"name='message'rows="5" placeholder='Your Message'></textarea><br></br>
                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                <div className="contactImgs">
                    <img src={instagram} alt='Instagram' className='contactImg'/>
                    <img src={linkedin} alt='Linkedin' className='contactImg'/>
                    <img src={youtube} alt='Youtube' className='contactImg'/>
                    <img src={indeed} alt='Indeed' className='contactImg'/>
                    <img src={github} alt='Github' className='contactImg'/>

                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default contact
