import React, { useState } from 'react';
import './Contact.css'; // Import styles for the form

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/send-email', {  //  https://portfolio-3-l44c.onrender.com/api/send-email
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(result.message || 'Failed to send email.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="form-contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;