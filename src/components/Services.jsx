import React from 'react';
import './Services.css';
import webDesignImg from '../assets/webdesign.png';
import seoImg from '../assets/seo.png';
import brandingImg from '../assets/branding.png';

const Services = () => {
  return (
    <section className="services-section" id="services" data-aos="fade-right">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={webDesignImg} alt="Web Design" />
          <h3>Web Design</h3>
          <p>Modern, mobile-first and clean UI design.</p>
        </div>
        <div className="service-card">
          <img src={seoImg} alt="SEO Optimization" />
          <h3>SEO Optimization</h3>
          <p>Rank your site higher on search engines.</p>
        </div>
        <div className="service-card">
          <img src={brandingImg} alt="Branding" />
          <h3>Branding</h3>
          <p>Professional branding and logo design.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
