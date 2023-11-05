import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vnmar38',
        'template_en8baes',
        e.target,
        '_bT1wmgDS2E-Xnt8d'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Email could not be sent:', error);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-container" id='contact'>
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" className="input-field" />
        <input type="email" name="email" placeholder="Email" className="input-field" />
        <textarea name="message" placeholder="Your message" className="input-field message-input"></textarea>
        <button type="submit" className="submit-button">Send Email</button>
      </form>
    </div>
  );
}

export default Contact;
