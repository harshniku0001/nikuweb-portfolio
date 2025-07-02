import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero" data-aos="fade-up">
      <div className="hero-left">
        <h1>
          Get Your <br />
          <span className="highlight">Professional</span><br />
          <span className="blue-text">Business Website</span>
        </h1>

        <p>
          A website without conversions is like missing its true purpose. We build modern, high-performing sites with <strong>Lead Forms</strong>, <strong>AI Chatbots</strong>, and <strong>User Tracking</strong> to turn traffic into real results.
        </p>
<form
  className="hero-form"
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const number = e.target[1].value;
    const message = `Hi, I am ${name}. My WhatsApp number is ${number}. I want a 1:1 call.`;
    const url = `https://wa.me/919671167544?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }}
>
  <input type="text" placeholder="Enter Your Name*" required />
  <input type="text" placeholder="Enter your WhatsApp Number*" required />
  <button type="submit">Request 1:1 Call</button>
</form>

      </div>

      <div className="hero-right">
        <img src="/images/girl.png" alt="AI Chatbot Girl" className="main-image" />
        <img src="/images/chart.png" alt="Chart" className="chart-overlay" />
        <div className="features">
          <p>AI Chatbot</p>
          <p>Hook Strategy</p>
          <p>Smart Lead Form</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
