import React, { useState } from 'react';
import "./Work.css";
import react from "../assets/socialview.png"
import node from "../assets/pdfextract.png";
import python from "../assets/python.png";  
const Work = () => {
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    {  tech: 'react', description: 'Social Media clone using React and firebase',image:react ,link:"https://social-view-87e9c.web.app/"},
    { tech: 'nodejs', description: 'Pdf page extractor using react and nodejs' ,image:node,link:"https://pdfweb.onrender.com/"},
    {  tech: 'python', description: 'Environmental analysis using regression.',image:python,link:"https://github.com/sathish-nalladevagari/Design-of-virtual-sensors-for-environmental-analysis"},
    // Add more projects as needed
  ];

  const handleTechFilter = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className=" work" id='portfolio' data-aos="zoom-in-up" >
      <h1>Portfolio</h1>
      <div className="technology-options">
        <button className="tech-button" onClick={() => handleTechFilter('all')}>All</button>
        <button className="tech-button" onClick={() => handleTechFilter('react')}>React</button>
        <button className="tech-button" onClick={() => handleTechFilter('nodejs')}>Node.js</button>
        <button className="tech-button" onClick={() => handleTechFilter('python')}>Python</button>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          (selectedTech === 'all' || selectedTech === project.tech) && (
            <div className={`project ${selectedTech === 'all' || selectedTech === project.tech ? 'expanded' : ''}`} key={index}>
              <img src={project.image} className='image'/>
              
              <h2>{project.description}</h2>
              <a className='desc' href={project.link} target='_blank'>Link Here</a>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Work;
