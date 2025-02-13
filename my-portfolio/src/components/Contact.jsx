import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Get In Touch</h2>
    <form className="contact-form">
      <input type="text" placeholder="Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <textarea placeholder="Message" className="input-field"></textarea>
      <button type="submit" className="btn">Send Message</button>
    </form>
  </section>
);

export default Contact;
