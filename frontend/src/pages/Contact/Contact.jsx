import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Navigation Bar - Same as Home */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🎯</span>
            <span className="logo-text">CareerPathLS</span>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Our Location</h3>
                    <p>Maseru, Lesotho</p>
                    <p>Kingsway Street</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Phone Number</h3>
                    <p>+266 1234 5678</p>
                    <p>Mon - Fri, 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h3>Email Address</h3>
                    <p>info@careerpathls.co.ls</p>
                    <p>support@careerpathls.co.ls</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      <a href="#" className="social-link">Facebook</a>
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-item">
                  <h4>How do I register as a student?</h4>
                  <p>Click on the "Get Started" button and follow the registration process for students.</p>
                </div>
                <div className="faq-item">
                  <h4>Can institutions partner with you?</h4>
                  <p>Yes! We welcome partnerships with educational institutions across Lesotho.</p>
                </div>
                <div className="faq-item">
                  <h4>Is the platform free for students?</h4>
                  <p>Yes, our platform is completely free for students to use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <h2>Quick Links</h2>
          <div className="action-buttons">
            <Link to="/register" className="action-btn">
              <span className="btn-icon">🚀</span>
              Student Registration
            </Link>
            <Link to="/institutions" className="action-btn">
              <span className="btn-icon">🏫</span>
              Institution Portal
            </Link>
            <Link to="/careers" className="action-btn">
              <span className="btn-icon">💼</span>
              Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;