import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">🌱</div>
            <span className="brand-name">EduPath Lesotho</span>
          </div>
          <div className="nav-menu">
            <Link to="/programs" className="nav-item">Programs</Link>
            <Link to="/institutions" className="nav-item">Institutions</Link>
            <Link to="/careers" className="nav-item">Careers</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/login" className="nav-login">Sign In</Link>
            <Link to="/register" className="nav-register">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-orbit orbit-1"></div>
          <div className="hero-orbit orbit-2"></div>
          <div className="hero-orbit orbit-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🌟 Transform Your Future</span>
            </div>
            <h1 className="hero-title">
              Find Your Perfect
              <span className="hero-accent"> Educational Path</span>
              in Lesotho
            </h1>
            <p className="hero-description">
              Connect with top institutions, discover career-focused programs, and launch 
              your professional journey with confidence. Your future starts here.
            </p>
            <div className="hero-actions">
              <Link to="/discover" className="btn btn-primary">
                <span className="btn-icon">🔍</span>
                Explore Programs
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/quiz" className="btn btn-secondary">
                <span className="btn-icon">🎯</span>
                Career Quiz
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">150+</div>
                <div className="stat-label">Learning Paths</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">45+</div>
                <div className="stat-label">Partner Institutions</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5K+</div>
                <div className="stat-label">Successful Students</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🎓</div>
              <div className="card-text">University Programs</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <div className="card-text">Vocational Training</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💼</div>
              <div className="card-text">Career Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="pathways">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Learning Journey</h2>
            <p className="section-subtitle">Choose from multiple educational pathways tailored to your goals</p>
          </div>
          <div className="pathways-grid">
            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">🎓</div>
                <h3>Academic Excellence</h3>
              </div>
              <p>University degrees and advanced academic programs for comprehensive education</p>
              <ul className="pathway-features">
                <li>Bachelor's & Master's Degrees</li>
                <li>Research Opportunities</li>
                <li>International Partnerships</li>
              </ul>
              <Link to="/academic" className="pathway-link">
                Explore Academic Paths →
              </Link>
            </div>

            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">🛠️</div>
                <h3>Vocational Training</h3>
              </div>
              <p>Hands-on skills development for immediate career entry and technical expertise</p>
              <ul className="pathway-features">
                <li>Certificate Programs</li>
                <li>Apprenticeships</li>
                <li>Industry Certifications</li>
              </ul>
              <Link to="/vocational" className="pathway-link">
                Discover Vocational Training →
              </Link>
            </div>

            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">🚀</div>
                <h3>Professional Development</h3>
              </div>
              <p>Short courses and workshops to enhance your skills and advance your career</p>
              <ul className="pathway-features">
                <li>Professional Certificates</li>
                <li>Skill Upgrading</li>
                <li>Executive Education</li>
              </ul>
              <Link to="/professional" className="pathway-link">
                Boost Your Career →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Showcase */}
      <section className="institutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partner Institutions</h2>
            <p className="section-subtitle">Connect with leading educational providers across Lesotho</p>
          </div>
          <div className="institutions-grid">
            <div className="institution-card">
              <div className="institution-logo">🏛️</div>
              <h3>National University of Lesotho</h3>
              <p>Comprehensive university offering diverse academic programs</p>
              <div className="program-count">120+ Programs</div>
            </div>
            <div className="institution-card">
              <div className="institution-logo">⚡</div>
              <h3>Lesotho TVET Institute</h3>
              <p>Technical and vocational education for practical skills</p>
              <div className="program-count">85+ Courses</div>
            </div>
            <div className="institution-card">
              <div className="institution-logo">🌍</div>
              <h3>International College</h3>
              <p>Global education partnerships and exchange programs</p>
              <div className="program-count">60+ Opportunities</div>
            </div>
          </div>
          <div className="institutions-cta">
            <Link to="/institutions" className="btn btn-outline">
              View All Institutions
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Hear from students who transformed their lives</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "EduPath helped me discover my passion for renewable energy and connected me with the perfect vocational program. Today, I'm working in a field I love!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💼</div>
                <div className="author-info">
                  <div className="author-name">Matseliso Mokoena</div>
                  <div className="author-role">Solar Technician</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The career quiz matched me with computer science programs I never knew existed in Lesotho. I'm now pursuing my dream degree!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🎓</div>
                <div className="author-info">
                  <div className="author-name">Teboho Letsoela</div>
                  <div className="author-role">Computer Science Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-container">
          <h2>Begin Your Educational Journey Today</h2>
          <p>Join thousands of Basotho students building their future with confidence</p>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-cta-primary">
              Create Free Account
            </Link>
            <Link to="/discover" className="btn btn-cta-secondary">
              Browse Programs First
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">🌱</div>
              <span className="brand-name">EduPath Lesotho</span>
              <p className="footer-tagline">Building the future of education in Lesotho, one student at a time.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <Link to="/programs">All Programs</Link>
                <Link to="/institutions">Institutions</Link>
                <Link to="/careers">Career Paths</Link>
                <Link to="/scholarships">Scholarships</Link>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/guidance">Career Guidance</Link>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/news">News</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2024 EduPath Lesotho. Empowering students nationwide.
            </div>
            <div className="footer-social">
              <span>Follow us: </span>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;