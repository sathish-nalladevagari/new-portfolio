import React from 'react';
import "./About.css";
import pythondev from "../assets/pythondev.png"
import frontend from "../assets/frontend.png"
import backend from "../assets/backend.png";

function About() {
  return (
    <div id="about" className='about-me' data-aos="zoom-in-up">
      
  <h1 className='about-head'>ART IS <span className='span'>CHAOS</span> TAKING SHAPE</h1>
  <div class="card-container">
    <div class="card">
      <img src={backend} alt="Image 1"/>
      <h2>Backend Developer</h2>
      <p>Creative and self-starting Backend Developer with 1 year experience building server side of websites in fast-paced, collaborative environments. Highly skilled in node/express/mongoDB and working knowledge of sanity.io</p>
    </div>
    <div class="card">
      <img src={frontend} alt="Image 2"/>
      <h2>Frontend Developer</h2>
      <p>Creative and self-starting Front-End Developer with 1 years experience building stable websites in fast-paced, collaborative environments. Highly skilled in html/ css/ scss/ JavaScript/React and working knowledge of Canva and Figma</p>
    </div>
    <div class="card">
      <img src={pythondev} alt="Image 3"/>
      <h2>Python Developer</h2>
      <p>Creative and self-starting Python Developer with 1 year experience building stable Python based Applications in fast-paced, collaborative environments. Highly skilled in Tkinter/OpenCV/NLP and working knowledge of web scraping.</p>
    </div>

  </div>
</div>

    
  );
}

export default About;
