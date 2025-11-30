import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function StudentDashboard() {
  const links = [
    { to: "/student/profile", label: "Update Profile / Documents", icon: "👤", color: "#4facfe" },
    { to: "/student/apply", label: "Apply for Courses", icon: "📚", color: "#ff6b6b" },
    { to: "/student/admissions", label: "Admissions Results", icon: "🎓", color: "#a78bfa" },
    { to: "/student/jobs", label: "Job Postings", icon: "💼", color: "#4ade80" },
    { to: "/student/transcripts", label: "Upload Transcripts / Certificates", icon: "📄", color: "#f59e0b" },
  ];

  const stats = [
    { label: "Applications", value: "3", icon: "📝", color: "#4facfe", trend: "+2" },
    { label: "Pending", value: "2", icon: "⏳", color: "#f59e0b", trend: "1 new" },
    { label: "Accepted", value: "1", icon: "✅", color: "#4ade80", trend: "Congratulations!" },
    { label: "Jobs Saved", value: "5", icon: "⭐", color: "#a78bfa", trend: "3 matches" }
  ];

  const recentActivities = [
    { action: "Application submitted", course: "Computer Science", time: "2 hours ago", status: "pending" },
    { action: "Document uploaded", course: "Mathematics", time: "1 day ago", status: "completed" },
    { action: "Profile updated", course: "Personal Info", time: "2 days ago", status: "completed" }
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar links={links} />
        
        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome Header */}
          <div className="welcome-card">
            <div className="welcome-content">
              <div className="welcome-text">
                <h1 className="welcome-title">
                  Welcome back, Student! 👋
                </h1>
                <p className="welcome-subtitle">
                  Ready to continue your educational journey? Check your applications, explore new opportunities, and manage your profile.
                </p>
                <div className="welcome-actions">
                  <button className="action-btn primary">
                    <span>🚀</span>
                    Continue Applications
                  </button>
                  <button className="action-btn secondary">
                    <span>🔍</span>
                    Explore Courses
                  </button>
                </div>
              </div>
              <div className="welcome-visual">
                <div className="floating-element el-1">🎓</div>
                <div className="floating-element el-2">📚</div>
                <div className="floating-element el-3">💼</div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <div 
                    className="stat-icon-wrapper"
                    style={{ background: `${stat.color}20`, borderColor: `${stat.color}30` }}
                  >
                    <span className="stat-icon">{stat.icon}</span>
                  </div>
                  <div className="stat-trend" style={{ color: stat.color }}>
                    {stat.trend}
                  </div>
                </div>
                <div className="stat-content">
                  <div className="stat-value" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div 
                  className="stat-glow"
                  style={{ background: stat.color }}
                ></div>
              </div>
            ))}
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="content-grid">
            {/* Quick Actions */}
            <div className="actions-section">
              <div className="section-header">
                <h2 className="section-title">Quick Actions</h2>
                <p className="section-subtitle">Manage your academic journey</p>
              </div>
              <div className="actions-grid">
                {links.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="action-link"
                  >
                    <div 
                      className="action-icon"
                      style={{ 
                        background: `linear-gradient(135deg, ${link.color}20, ${link.color}40)`,
                        borderColor: `${link.color}30`
                      }}
                    >
                      {link.icon}
                    </div>
                    <div className="action-content">
                      <h3 className="action-title">{link.label}</h3>
                      <p className="action-desc">Access and manage your {link.label.toLowerCase()}</p>
                    </div>
                    <div 
                      className="action-arrow"
                      style={{ color: link.color }}
                    >
                      →
                    </div>
                    <div 
                      className="action-hover"
                      style={{ background: link.color }}
                    ></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="activity-section">
              <div className="section-header">
                <h2 className="section-title">Recent Activity</h2>
                <p className="section-subtitle">Your latest updates</p>
              </div>
              <div className="activity-list">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">
                      {activity.status === 'pending' ? '⏳' : '✅'}
                    </div>
                    <div className="activity-content">
                      <div className="activity-main">
                        <span className="activity-action">{activity.action}</span>
                        <span className="activity-course">{activity.course}</span>
                      </div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                    <div 
                      className={`activity-status ${activity.status}`}
                    >
                      {activity.status}
                    </div>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">
                View All Activity →
              </button>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="deadlines-section">
            <div className="section-header">
              <h2 className="section-title">Upcoming Deadlines</h2>
              <p className="section-subtitle">Important dates to remember</p>
            </div>
            <div className="deadlines-list">
              <div className="deadline-item urgent">
                <div className="deadline-icon">⏰</div>
                <div className="deadline-content">
                  <div className="deadline-title">Computer Science Application</div>
                  <div className="deadline-date">Due in 3 days</div>
                </div>
                <div className="deadline-badge urgent">Urgent</div>
              </div>
              <div className="deadline-item">
                <div className="deadline-icon">📅</div>
                <div className="deadline-content">
                  <div className="deadline-title">Scholarship Submission</div>
                  <div className="deadline-date">Due in 2 weeks</div>
                </div>
                <div className="deadline-badge">Upcoming</div>
              </div>
            </div>
          </div>

          {/* Support Footer */}
          <div className="support-footer">
            <div className="support-content">
              <div className="support-icon">💡</div>
              <div className="support-text">
                <strong>Need assistance?</strong> Our support team is here to help you succeed
              </div>
            </div>
            <button className="support-btn">
              Contact Support
            </button>
          </div>
        </main>
      </div>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .dashboard-main {
          flex: 1;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          overflow-y: auto;
        }

        /* Welcome Card */
        .welcome-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 3rem;
          border-radius: 24px;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .welcome-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .welcome-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .welcome-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .welcome-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-btn.primary {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .action-btn.primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .action-btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .welcome-visual {
          position: relative;
          height: 200px;
        }

        .floating-element {
          position: absolute;
          font-size: 3rem;
          animation: float 3s ease-in-out infinite;
        }

        .el-1 {
          top: 20%;
          right: 30%;
          animation-delay: 0s;
        }

        .el-2 {
          top: 50%;
          right: 10%;
          animation-delay: -1s;
        }

        .el-3 {
          bottom: 20%;
          right: 40%;
          animation-delay: -2s;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .stat-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
        }

        .stat-icon {
          font-size: 1.8rem;
        }

        .stat-trend {
          font-size: 0.8rem;
          font-weight: 700;
          opacity: 0.9;
        }

        .stat-content {
          text-align: left;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-size: 1rem;
          color: #64748b;
          font-weight: 600;
        }

        .stat-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0.7;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .section-header {
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Actions Grid */
        .actions-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .action-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .action-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 2px solid;
          flex-shrink: 0;
        }

        .action-content {
          flex: 1;
        }

        .action-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .action-desc {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        .action-arrow {
          font-size: 1.2rem;
          font-weight: 700;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .action-link:hover .action-arrow {
          transform: translateX(5px);
          opacity: 1;
        }

        .action-hover {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          transition: left 0.3s ease;
        }

        .action-link:hover .action-hover {
          left: 0;
        }

        /* Activity Section */
        .activity-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
        }

        .activity-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-main {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .activity-action {
          font-weight: 600;
          color: #1e293b;
        }

        .activity-course {
          color: #64748b;
          font-weight: 500;
        }

        .activity-time {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .activity-status {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .activity-status.pending {
          background: #fef3c7;
          color: #d97706;
        }

        .activity-status.completed {
          background: #d1fae5;
          color: #065f46;
        }

        .view-all-btn {
          width: 100%;
          padding: 1rem;
          background: transparent;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        /* Deadlines Section */
        .deadlines-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .deadlines-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .deadline-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 14px;
          border-left: 4px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .deadline-item.urgent {
          border-left-color: #ef4444;
          background: #fef2f2;
        }

        .deadline-item:hover {
          transform: translateX(5px);
          background: #f1f5f9;
        }

        .deadline-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .deadline-content {
          flex: 1;
        }

        .deadline-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .deadline-date {
          font-size: 0.9rem;
          color: #64748b;
        }

        .deadline-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .deadline-badge.urgent {
          background: #fecaca;
          color: #dc2626;
        }

        .deadline-badge {
          background: #dbeafe;
          color: #1d4ed8;
        }

        /* Support Footer */
        .support-footer {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          border-radius: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .support-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .support-icon {
          font-size: 2rem;
        }

        .support-text {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .support-btn {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .welcome-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .welcome-visual {
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .dashboard-main {
            padding: 1rem;
          }
          
          .welcome-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .support-footer {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .welcome-actions {
            flex-direction: column;
          }
          
          .action-btn {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}