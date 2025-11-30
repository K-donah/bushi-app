import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Navigation Bar - Same as Home */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🎯</span>
            <span className="logo-text">CareerPathLS</span>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">
              About <span className="gradient-text">Career Path Lesotho</span>
            </h1>
            <p className="about-subtitle">
              Empowering the future of Lesotho through education and career development
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                Career Path Lesotho is dedicated to bridging the gap between education and employment 
                in the Kingdom of Lesotho. We provide a comprehensive platform that connects students 
                with educational institutions and career opportunities.
              </p>
              <p>
                Our goal is to simplify the journey from education to employment, making it easier 
                for Basotho youth to build successful careers and contribute to national development.
              </p>
            </div>
            <div className="mission-visual">
              <div className="visual-card">
                <span className="visual-icon">🎯</span>
                <h3>Clear Pathways</h3>
                <p>Guiding students from education to career</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Making education and career opportunities accessible to all Basotho</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working with institutions and employers to create opportunities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Using technology to transform education and career development</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Empowerment</h3>
              <p>Empowering youth to take control of their future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <h3>For Students</h3>
              <ul>
                <li>✓ Discover educational programs</li>
                <li>✓ Streamlined application process</li>
                <li>✓ Career guidance and counseling</li>
                <li>✓ Job placement opportunities</li>
              </ul>
            </div>
            <div className="offering-card">
              <h3>For Institutions</h3>
              <ul>
                <li>✓ Reach more students</li>
                <li>✓ Streamlined admissions</li>
                <li>✓ Digital presence enhancement</li>
                <li>✓ Industry partnerships</li>
              </ul>
            </div>
            <div className="offering-card">
              <h3>For Employers</h3>
              <ul>
                <li>✓ Access to qualified graduates</li>
                <li>✓ Internship programs</li>
                <li>✓ Industry-academia collaboration</li>
                <li>✓ Talent pipeline development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>Be part of the movement to transform education and employment in Lesotho</p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;