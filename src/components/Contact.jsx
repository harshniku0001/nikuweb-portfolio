import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Let's build something amazing together</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Have a question?</h2>
          <p>We’d love to hear from you! Fill out the form and we’ll get in touch shortly.</p>

          <input type="text" placeholder="Your Name*" />
          <input type="email" placeholder="Your Email*" />
          <input type="text" placeholder="Your WhatsApp Number*" />
          <textarea placeholder="Your Message*" rows="5"></textarea>
          <button type="submit">Send Message</button>

          <div className="quick-info">
            <h3>Address</h3>
            <p>Village Shahzadpur, Sonipat, Haryana 131001</p>

            <h3>Email</h3>
            <p>numberdarji2580@gmail.com</p>

            <h3>Phone</h3>
            <p>+91 9671167544</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.321478812166!2d77.0068899754991!3d29.03978537494325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbb60a74f9825%3A0xbebfd51a2cb95bb0!2sShahzadpur%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1719654835330!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0', borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
