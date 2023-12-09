import React from 'react'
import './works.css';
import portfolio1 from '../../Assetes/portfolio1.png'
import portfolio2 from '../../Assetes/portfolio2.png'
import portfolio3 from '../../Assetes/portfolio3.png'
import portfolio4 from '../../Assetes/portfolio4.png'
import portfolio5 from '../../Assetes/portfolio5.png'
import project1 from '../../Assetes/project1.png.jpg'

const works = () => {
  return (
    
      <section id="works">
        <h2 className="workstitle">My Portfolio and Projects</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to <br></br>bring my skills and experience to help business achieve their goals and create a strong online presence</span>
        <div className="worksImags">
            <img src={portfolio1} alt='' className="worksImg"  />
            <img src={portfolio2} alt='' className="worksImg"  />
            <img src={portfolio3} alt='' className="worksImg" />

            <img src={portfolio4} alt='' className="worksImg" />
            <img src={portfolio5} alt='' className="worksImg" />
           <img src={project1} alt='' className="worksImg" />

        </div>
        <button className="workBtn">See More</button>
      </section>
    
  );
}

export default works;
