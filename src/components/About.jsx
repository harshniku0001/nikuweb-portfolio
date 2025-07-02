import React from 'react';
import './About.css';
import myImage from '../assets/girl.png';

const About = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-left">
      <div className="about-heading">
        <h1>About us</h1>
        <button className="highlight-btn">Rank. Reach. Impact</button>
      </div>

      <div className="about-main">
        <div className="about-left">
          <p>
            We started this journey with a mission to empower businesses with high-conversion digital assets. 
            From UI to performance, we take care of everything that turns clicks into clients.
          </p>

          <div className="about-box">
            <h2>Vision</h2>
            <ul>
              <li>Build conversion-focused digital assets</li>
              <li>Help businesses rank & grow online</li>
              <li>Simplify tech for every client</li>
            </ul>

            <h2>Mission</h2>
            <ul>
              <li>Set the modern web design benchmark</li>
              <li>Grow online reach in just 3 clicks</li>
              <li>Create seamless digital journeys</li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <img src={myImage} alt="Niku Dev" className="founder-img" />
          <div className="founder-quote">
            <h3>Niku Dev</h3>
            <p className="founder-title">Founder, NikuWeb</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
