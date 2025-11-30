import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    if (!name || !email || !password) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    const res = await register({ name, email, password, role });
    setIsLoading(false);
    
    if (!res.success) {
      setError(res.message || "Registration failed");
      return;
    }

    if (role === "admin") nav("/admin");
    else if (role === "institute") nav("/institute");
    else if (role === "student") nav("/student");
    else if (role === "company") nav("/company");
    else nav("/");
  };

  const getRoleIcon = (role) => {
    const icons = {
      student: "🎓",
      institute: "🏫",
      company: "💼",
      admin: "⚙️"
    };
    return icons[role] || "👤";
  };

  return (
    <div className="register-container">
      {/* Animated Background */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Main Register Card */}
      <div className="register-card">
        {/* Header Section */}
        <div className="register-header">
          <div className="logo-wrapper">
            <div className="logo-icon">🌱</div>
            <span className="logo-text">EduPath</span>
          </div>
          <h1 className="register-title">Start Your Journey</h1>
          <p className="register-subtitle">Join thousands building their future with us</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <div className="input-wrapper">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                className="form-input"
                disabled={isLoading}
              />
              <label className="input-label">Full Name</label>
              <span className="input-icon">👤</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="form-input"
                disabled={isLoading}
              />
              <label className="input-label">Email Address</label>
              <span className="input-icon">📧</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="form-input"
                disabled={isLoading}
              />
              <label className="input-label">Password</label>
              <span className="input-icon">🔒</span>
            </div>
            <div className="password-strength">
              <div className={`strength-bar ${password.length > 0 ? 'active' : ''}`}></div>
              <div className={`strength-bar ${password.length >= 6 ? 'active' : ''}`}></div>
              <div className={`strength-bar ${password.length >= 8 ? 'active' : ''}`}></div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="role-selection">
            <label className="role-label">I am a</label>
            <div className="role-options">
              {[
                { value: "student", label: "Student", icon: "🎓", desc: "Looking for education" },
                { value: "institute", label: "Institute", icon: "🏫", desc: "Educational provider" },
                { value: "company", label: "Company", icon: "💼", desc: "Hiring talent" },
                { value: "admin", label: "Admin", icon: "⚙️", desc: "Platform management" }
              ].map((option) => (
                <div
                  key={option.value}
                  className={`role-option ${role === option.value ? 'selected' : ''}`}
                  onClick={() => !isLoading && setRole(option.value)}
                >
                  <div className="role-icon">{option.icon}</div>
                  <div className="role-content">
                    <div className="role-name">{option.label}</div>
                    <div className="role-desc">{option.desc}</div>
                  </div>
                  <div className="role-check">
                    {role === option.value && "✓"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="terms-agreement">
            <label className="checkbox-wrapper">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              <span className="terms-text">
                I agree to the <Link to="/terms" className="terms-link">Terms of Service</Link> and <Link to="/privacy" className="terms-link">Privacy Policy</Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`register-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Creating Account...
              </>
            ) : (
              <>
                <span className="btn-icon">🚀</span>
                Create My Account
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or sign up with</span>
        </div>

        {/* Social Registration */}
        <div className="social-register">
          <button type="button" className="social-btn google-btn">
            <span className="social-icon">🔍</span>
            Google
          </button>
          <button type="button" className="social-btn microsoft-btn">
            <span className="social-icon">💼</span>
            Microsoft
          </button>
        </div>

        {/* Sign In Link */}
        <div className="signin-section">
          <p>Already have an account?</p>
          <Link to="/login" className="signin-link">
            Sign in here
          </Link>
        </div>

        {/* Role Benefits Info */}
        <div className="role-benefits">
          <div className="benefits-icon">💡</div>
          <div className="benefits-content">
            <strong>Choose your path:</strong> Each role unlocks different features and dashboards
          </div>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          padding: 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Animated Background Shapes */
        .bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 180px;
          height: 180px;
          top: 5%;
          left: 8%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 65%;
          left: 4%;
          animation-delay: -2s;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 15%;
          right: 6%;
          animation-delay: -4s;
        }

        .shape-4 {
          width: 90px;
          height: 90px;
          bottom: 10%;
          right: 15%;
          animation-delay: -1s;
        }

        .shape-5 {
          width: 70px;
          height: 70px;
          bottom: 35%;
          left: 25%;
          animation-delay: -3s;
        }

        /* Register Card */
        .register-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3.5rem 2.5rem;
          border-radius: 28px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.3);
          width: 100%;
          max-width: 500px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .register-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .register-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .register-subtitle {
          color: #718096;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* Error Message */
        .error-message {
          background: linear-gradient(135deg, #fed7d7, #feb2b2);
          color: #c53030;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border: 1px solid #fc8181;
        }

        .error-icon {
          font-size: 1.1rem;
        }

        /* Form Styles */
        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .input-group {
          position: relative;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1.25rem 1rem 1.25rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 500;
          background: #ffffff;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input:focus + .input-label,
        .form-input:not(:placeholder-shown) + .input-label {
          transform: translateY(-120%) scale(0.85);
          color: #667eea;
        }

        .input-label {
          position: absolute;
          left: 3rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          font-weight: 500;
          font-size: 1rem;
          pointer-events: none;
          transition: all 0.3s ease;
          background: white;
          padding: 0 0.5rem;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
          color: #a0aec0;
        }

        /* Password Strength */
        .password-strength {
          display: flex;
          gap: 4px;
          margin-top: 8px;
        }

        .strength-bar {
          flex: 1;
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .strength-bar.active {
          background: #48bb78;
        }

        /* Role Selection */
        .role-selection {
          margin: 1rem 0;
        }

        .role-label {
          display: block;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #2d3748;
          font-size: 1rem;
        }

        .role-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .role-option {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
        }

        .role-option:hover {
          border-color: #cbd5e0;
          transform: translateY(-1px);
        }

        .role-option.selected {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }

        .role-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .role-content {
          flex: 1;
        }

        .role-name {
          font-weight: 600;
          color: #2d3748;
          font-size: 0.9rem;
        }

        .role-desc {
          font-size: 0.75rem;
          color: #718096;
          margin-top: 2px;
        }

        .role-check {
          color: #667eea;
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* Terms Agreement */
        .terms-agreement {
          margin: 1rem 0;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .checkbox-wrapper input {
          display: none;
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 2px solid #cbd5e0;
          border-radius: 4px;
          margin-top: 2px;
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .checkbox-wrapper input:checked + .checkmark {
          background: #667eea;
          border-color: #667eea;
        }

        .checkbox-wrapper input:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          color: white;
          font-size: 12px;
          font-weight: 700;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .terms-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .terms-link:hover {
          color: #764ba2;
        }

        /* Register Button */
        .register-btn {
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1rem;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .register-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }

        .register-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .register-btn.loading {
          background: linear-gradient(135deg, #a0aec0, #718096);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        /* Divider */
        .divider {
          text-align: center;
          margin: 2rem 0;
          position: relative;
          color: #a0aec0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          position: relative;
        }

        /* Social Registration */
        .social-register {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-btn {
          padding: 1rem 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .social-btn:hover {
          border-color: #667eea;
          transform: translateY(-1px);
        }

        /* Sign In Section */
        .signin-section {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
          color: #718096;
          font-size: 0.95rem;
        }

        .signin-link {
          color: #667eea;
          font-weight: 700;
          text-decoration: none;
          margin-left: 0.5rem;
          transition: color 0.3s ease;
        }

        .signin-link:hover {
          color: #764ba2;
        }

        /* Role Benefits Info */
        .role-benefits {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          padding: 1rem 1.25rem;
          border-radius: 12px;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .benefits-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .benefits-content {
          font-size: 0.85rem;
          color: #4a5568;
          font-weight: 500;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .register-card {
            padding: 2.5rem 1.5rem;
            margin: 1rem;
          }

          .register-title {
            font-size: 2rem;
          }

          .role-options {
            grid-template-columns: 1fr;
          }

          .social-register {
            grid-template-columns: 1fr;
          }

          .logo-text {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .register-card {
            padding: 2rem 1.25rem;
          }

          .register-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}