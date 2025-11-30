import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    if (!email || !password) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }
    
    const res = await login({ email, password });
    setIsLoading(false);
    
    if (!res.success) {
      setError("Invalid credentials");
      return;
    }
    
    const role = res.user?.role;
    if (role === "admin") nav("/admin");
    else if (role === "institute") nav("/institute");
    else if (role === "student") nav("/student/dashboard");
    else if (role === "company") nav("/company");
    else nav("/");
  };

  return (
    <div className="login-container">
      {/* Animated Background */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Main Login Card */}
      <div className="login-card">
        {/* Header Section */}
        <div className="login-header">
          <div className="logo-wrapper">
            <div className="logo-icon">🌱</div>
            <span className="logo-text">EduPath</span>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Continue your educational journey with us</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
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
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-link">
              Forgot your password?
            </Link>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Signing In...
              </>
            ) : (
              <>
                <span className="btn-icon">🚀</span>
                Sign In to Your Account
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or continue with</span>
        </div>

        {/* Social Login Options */}
        <div className="social-login">
          <button type="button" className="social-btn google-btn">
            <span className="social-icon">🔍</span>
            Google
          </button>
          <button type="button" className="social-btn microsoft-btn">
            <span className="social-icon">💼</span>
            Microsoft
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="signup-section">
          <p>New to EduPath?</p>
          <Link to="/register" className="signup-link">
            Create an account
          </Link>
        </div>

        {/* Demo Info */}
        <div className="demo-info">
          <div className="demo-icon">💡</div>
          <div className="demo-content">
            <strong>Demo Access:</strong> Try different roles to explore various dashboards
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
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
          width: 120px;
          height: 120px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 5%;
          animation-delay: -2s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 20%;
          right: 8%;
          animation-delay: -4s;
        }

        .shape-4 {
          width: 100px;
          height: 100px;
          bottom: 15%;
          right: 12%;
          animation-delay: -1s;
        }

        .shape-5 {
          width: 60px;
          height: 60px;
          bottom: 40%;
          left: 20%;
          animation-delay: -3s;
        }

        /* Login Card */
        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3.5rem 2.5rem;
          border-radius: 28px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.3);
          width: 100%;
          max-width: 440px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .login-header {
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

        .login-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .login-subtitle {
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
        .login-form {
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

        /* Forgot Password */
        .forgot-password {
          text-align: right;
          margin-top: -0.5rem;
        }

        .forgot-link {
          color: #667eea;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .forgot-link:hover {
          color: #764ba2;
        }

        /* Login Button */
        .login-btn {
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
          margin-top: 0.5rem;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-btn.loading {
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

        /* Social Login */
        .social-login {
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

        /* Sign Up Section */
        .signup-section {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
          color: #718096;
          font-size: 0.95rem;
        }

        .signup-link {
          color: #667eea;
          font-weight: 700;
          text-decoration: none;
          margin-left: 0.5rem;
          transition: color 0.3s ease;
        }

        .signup-link:hover {
          color: #764ba2;
        }

        /* Demo Info */
        .demo-info {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          padding: 1rem 1.25rem;
          border-radius: 12px;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .demo-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .demo-content {
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
        @media (max-width: 480px) {
          .login-card {
            padding: 2.5rem 1.5rem;
            margin: 1rem;
          }

          .login-title {
            font-size: 2rem;
          }

          .social-login {
            grid-template-columns: 1fr;
          }

          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}