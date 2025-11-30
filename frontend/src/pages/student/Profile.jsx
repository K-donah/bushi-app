import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [bio, setBio] = useState(user.bio || "");
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  const handleSave = async () => {
    if (!name.trim()) return alert("Name cannot be empty");
    setSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateUser({ ...user, name: name.trim(), phone, bio });
    
    setSaving(false);
    alert("Profile updated successfully!");
  };

  const getRoleIcon = (role) => {
    const icons = {
      student: "🎓",
      admin: "⚙️",
      institute: "🏫",
      company: "💼"
    };
    return icons[role] || "👤";
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <main className="profile-main">
          <div className="profile-content">
            {/* Header Section */}
            <div className="profile-header">
              <div className="header-content">
                <div className="avatar-section">
                  <div className="avatar-wrapper">
                    <div className="avatar-icon">👤</div>
                    <div className="avatar-status"></div>
                  </div>
                  <div className="avatar-info">
                    <h1 className="user-name">{user.name || "Student User"}</h1>
                    <p className="user-email">{user.email}</p>
                    <div className="user-badge">
                      <span className="badge-icon">{getRoleIcon(user.role)}</span>
                      <span className="badge-text">{user.role}</span>
                    </div>
                  </div>
                </div>
                <div className="header-stats">
                  <div className="stat-item">
                    <div className="stat-value">12</div>
                    <div className="stat-label">Applications</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">3</div>
                    <div className="stat-label">Accepted</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">98%</div>
                    <div className="stat-label">Profile Complete</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="content-grid">
              {/* Navigation Tabs */}
              <div className="tabs-section">
                <div className="tabs-header">
                  <h2 className="tabs-title">Profile Settings</h2>
                  <p className="tabs-subtitle">Manage your personal information and preferences</p>
                </div>
                <div className="tabs-navigation">
                  <button 
                    className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
                    onClick={() => setActiveTab("personal")}
                  >
                    <span className="tab-icon">👤</span>
                    Personal Info
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                    onClick={() => setActiveTab("education")}
                  >
                    <span className="tab-icon">🎓</span>
                    Education
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === "documents" ? "active" : ""}`}
                    onClick={() => setActiveTab("documents")}
                  >
                    <span className="tab-icon">📄</span>
                    Documents
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === "security" ? "active" : ""}`}
                    onClick={() => setActiveTab("security")}
                  >
                    <span className="tab-icon">🔒</span>
                    Security
                  </button>
                </div>
              </div>

              {/* Profile Form */}
              <div className="form-section">
                <div className="form-card">
                  <div className="form-header">
                    <h3 className="form-title">Personal Information</h3>
                    <p className="form-subtitle">Update your basic profile details</p>
                  </div>

                  <div className="form-content">
                    {/* Name Field */}
                    <div className="input-group">
                      <label className="input-label">
                        <span className="label-icon">👤</span>
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="input-group">
                      <label className="input-label">
                        <span className="label-icon">📧</span>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        readOnly
                        className="form-input readonly"
                        placeholder="Your email address"
                      />
                      <div className="input-note">
                        Email cannot be changed for security reasons
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="input-group">
                      <label className="input-label">
                        <span className="label-icon">📱</span>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="form-input"
                        placeholder="+266 1234 5678"
                      />
                    </div>

                    {/* Bio Field */}
                    <div className="input-group">
                      <label className="input-label">
                        <span className="label-icon">📝</span>
                        Bio
                      </label>
                      <textarea
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        className="form-textarea"
                        placeholder="Tell us about yourself, your interests, and career goals..."
                        rows="4"
                      />
                      <div className="input-note">
                        Brief description about yourself (max 200 characters)
                      </div>
                    </div>

                    {/* Save Button */}
                    <button
                      onClick={handleSave}
                      disabled={saving || !name.trim()}
                      className={`save-btn ${saving ? 'loading' : ''} ${!name.trim() ? 'disabled' : ''}`}
                    >
                      {saving ? (
                        <>
                          <div className="spinner"></div>
                          Saving Changes...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">💾</span>
                          Save Profile Changes
                          <span className="btn-arrow">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="sidebar-section">
                {/* Profile Completion */}
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">📊</div>
                    <h4 className="card-title">Profile Completion</h4>
                  </div>
                  <div className="completion-section">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                    <div className="progress-text">85% Complete</div>
                  </div>
                  <div className="completion-tips">
                    <div className="tip-item">
                      <span className="tip-icon">✅</span>
                      <span className="tip-text">Personal info added</span>
                    </div>
                    <div className="tip-item">
                      <span className="tip-icon">⏳</span>
                      <span className="tip-text">Education history needed</span>
                    </div>
                    <div className="tip-item">
                      <span className="tip-icon">⏳</span>
                      <span className="tip-text">Documents pending</span>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">💡</div>
                    <h4 className="card-title">Profile Tips</h4>
                  </div>
                  <div className="tips-list">
                    <div className="tip-item">
                      <div className="tip-bullet">🎯</div>
                      <div className="tip-content">
                        <strong>Complete your profile</strong> to increase application success
                      </div>
                    </div>
                    <div className="tip-item">
                      <div className="tip-bullet">📄</div>
                      <div className="tip-content">
                        <strong>Upload documents</strong> for faster application processing
                      </div>
                    </div>
                    <div className="tip-item">
                      <div className="tip-bullet">🔔</div>
                      <div className="tip-content">
                        <strong>Keep information updated</strong> for accurate matching
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Card */}
                <div className="support-card">
                  <div className="support-icon">🛟</div>
                  <div className="support-content">
                    <h4 className="support-title">Need Help?</h4>
                    <p className="support-text">Contact our support team for assistance</p>
                    <button className="support-btn">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .profile-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .profile-main {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          min-height: 100vh;
        }

        .profile-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Section */
        .profile-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 3rem;
          border-radius: 24px;
          color: white;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .header-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .avatar-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .avatar-wrapper {
          position: relative;
        }

        .avatar-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .avatar-status {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 20px;
          height: 20px;
          background: #4ade80;
          border: 3px solid white;
          border-radius: 50%;
        }

        .avatar-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .user-name {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .user-email {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
          font-weight: 500;
        }

        .user-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .header-stats {
          display: flex;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: 600;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 280px 1fr 320px;
          gap: 2rem;
        }

        /* Tabs Section */
        .tabs-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          height: fit-content;
        }

        .tabs-header {
          margin-bottom: 2rem;
        }

        .tabs-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .tabs-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0;
        }

        .tabs-navigation {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: transparent;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .tab-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateX(5px);
        }

        .tab-btn.active {
          background: rgba(102, 126, 234, 0.1);
          border-color: #667eea;
          color: #667eea;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        /* Form Section */
        .form-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .form-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0;
        }

        .form-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-label {
          font-weight: 700;
          color: #1e293b;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .label-icon {
          font-size: 1rem;
        }

        .form-input, .form-textarea {
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          background: white;
          outline: none;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input.readonly {
          background: #f8fafc;
          color: #64748b;
          cursor: not-allowed;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .input-note {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .save-btn {
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

        .save-btn:hover:not(.disabled):not(.loading) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }

        .save-btn.disabled {
          background: linear-gradient(135deg, #cbd5e1, #94a3b8);
          cursor: not-allowed;
          box-shadow: none;
        }

        .save-btn.loading {
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

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .save-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* Sidebar Section */
        .sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card, .support-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          font-size: 1.25rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        /* Progress Section */
        .completion-section {
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #4ade80, #22c55e);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
          text-align: center;
        }

        .completion-tips {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tip-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tip-icon {
          font-size: 0.9rem;
        }

        .tip-text {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Tips List */
        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-item {
          display: flex;
          gap: 0.75rem;
        }

        .tip-bullet {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .tip-content {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
        }

        /* Support Card */
        .support-card {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-align: center;
        }

        .support-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .support-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .support-text {
          font-size: 0.9rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .support-btn {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .support-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .header-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .avatar-section {
            justify-content: center;
          }
          
          .header-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .profile-main {
            padding: 1rem;
          }
          
          .profile-header {
            padding: 2rem;
          }
          
          .user-name {
            font-size: 1.5rem;
          }
          
          .header-stats {
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          .tabs-navigation {
            flex-direction: row;
            overflow-x: auto;
          }
          
          .tab-btn {
            white-space: nowrap;
          }
        }

        @media (max-width: 480px) {
          .avatar-section {
            flex-direction: column;
            text-align: center;
          }
          
          .header-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .form-section, .tabs-section, .info-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}