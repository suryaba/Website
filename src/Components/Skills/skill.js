import React from 'react'
import './skills.css';
import WebDeveloper from '../../Assetes/WebDeveloper.png';
import WebsiteDesign from '../../Assetes/WebsiteDesign.png';
import SoftwareDeveloper from '../../Assetes/SoftwareDeveloper.png';

const Skills = () => {
  return (
    <section id="skills">     
       <span className="skillTitle">What I do</span><br></br>
       <span className="skillDesc">I am a skilled and passionate web Software Developer with experience in crteating projects and websites.<br></br>I have strong understanding of design and project creation.In my skills are React.js, Node.js,<br></br> Express.js, MongoDB, Javascript, HTML, CSS </span>
    <div className="skillBar">
      <img src={WebDeveloper} alt="WebDeveloper" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Web Developer</h2>
        <p>The Web Developers to create and maintain websites.</p>
      </div>
    </div>

    <div className="skillBar">
      <img src={WebsiteDesign} alt="WebsiteDesign" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Website Design</h2>
        <p>Web designing is the process of planning,conceptualizing,and implimenting
the plan for designing a website in a way that is functional and offers a good user experience .</p>
      </div>
    </div>

    <div className="skillBar">
      <img src={SoftwareDeveloper} alt="SoftwareDeveloper" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Software Developer</h2>
        <p>The process of creating,designing,deploying and supporting Software.</p>
      </div>
    </div>

    </section>
  )
}

export default Skills;
