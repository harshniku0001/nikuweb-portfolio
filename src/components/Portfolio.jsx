import React from 'react';
import './Portfolio.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio" data-aos="zoom-in-up">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid">
        <div className="project-card">
          <img src={project1} alt="MLA Portal" />
          <div className="project-info">
            <h3>MLA Portal Website</h3>
            <p>React + Node.js based public service platform.</p>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt="Freelancer Portfolio" />
          <div className="project-info">
            <h3>Freelancer Portfolio</h3>
            <p>Personal site with lead-gen and contact form.</p>
          </div>
        </div>
        <div className="project-card">
          <img src={project3} alt="E-commerce Website" />
          <div className="project-info">
            <h3>E-commerce Website</h3>
            <p>Product listing, cart, and online payments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
