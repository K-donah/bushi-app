import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CompanyDashboard() {
  const { user } = useAuth();
  
  const links = [
    { to: "/company/post-job", label: "Post Job", icon: "📝", color: "#4facfe" },
    { to: "/company/applicants", label: "View Applicants", icon: "👥", color: "#ff6b6b" },
    { to: "/company/profile", label: "Update Profile", icon: "🏢", color: "#4ade80" },
    { to: "/company/settings", label: "Settings", icon: "⚙️", color: "#a78bfa" },
  ];

  const stats = [
    { label: "Active Jobs", value: "12", icon: "💼", color: "#4facfe", trend: "+3 this month" },
    { label: "New Applicants", value: "45", icon: "📨", color: "#ff6b6b", trend: "15 today" },
    { label: "Interviews", value: "8", icon: "🤝", color: "#4ade80", trend: "2 scheduled" },
    { label: "Hired", value: "15", icon: "🎉", color: "#a78bfa", trend: "5 this quarter" }
  ];

  const recentActivities = [
    { action: "New application received", position: "Frontend Developer", time: "2 hours ago", status: "new" },
    { action: "Interview scheduled", position: "Product Manager", time: "1 day ago", status: "scheduled" },
    { action: "Job published", position: "Data Scientist", time: "2 days ago", status: "published" }
  ];

  const topPositions = [
    { title: "Senior Developer", applicants: 23, status: "active", urgency: "high" },
    { title: "UX Designer", applicants: 15, status: "active", urgency: "medium" },
    { title: "DevOps Engineer", applicants: 8, status: "active", urgency: "low" }
  ];

  return (
    <>
      <Navbar />
      <div className="company-dashboard">
        <Sidebar links={links} />
        
        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome Header */}
          <div className="welcome-card">
            <div className="welcome-content">
              <div className="welcome-text">
                <h1 className="welcome-title">
                  Welcome back, {user?.name}! 🚀
                </h1>
                <p className="welcome-subtitle">
                  Grow your team with top talent. Post jobs, filter qualified applicants, and make hiring decisions faster.
                </p>
                <div className="welcome-actions">
                  <button className="action-btn primary">
                    <span>📝</span>
                    Post New Job
                  </button>
                  <button className="action-btn secondary">
                    <span>🔍</span>
                    Find Candidates
                  </button>
                </div>
              </div>
              <div className="welcome-visual">
                <div className="floating-element el-1">💼</div>
                <div className="floating-element el-2">👥</div>
                <div className="floating-element el-3">🎯</div>
              </div>
            </div>
            <div className="company-quick-stats">
              <div className="quick-stat">
                <div className="stat-icon">🏢</div>
                <div className="stat-info">
                  <div className="stat-value">Active</div>
                  <div className="stat-label">Company Status</div>
                </div>
              </div>
              <div className="quick-stat">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <div className="stat-value">4.8/5</div>
                  <div className="stat-label">Employer Rating</div>
                </div>
              </div>
              <div className="quick-stat">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Response Rate</div>
                </div>
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

          {/* Main Content Grid */}
          <div className="content-grid">
            {/* Quick Actions */}
            <div className="actions-section">
              <div className="section-header">
                <h2 className="section-title">Hiring Management</h2>
                <p className="section-subtitle">Manage your recruitment process</p>
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
                      <p className="action-desc">
                        {link.label === "Post Job" && "Create new job postings with qualifications and requirements"}
                        {link.label === "View Applicants" && "View automatically filtered qualified applicants"}
                        {link.label === "Update Profile" && "Update company information and hiring preferences"}
                        {link.label === "Settings" && "Manage security and notification preferences"}
                      </p>
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

            {/* Recent Activity & Top Positions */}
            <div className="sidebar-sections">
              {/* Recent Activity */}
              <div className="activity-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Activity</h2>
                  <p className="section-subtitle">Latest hiring updates</p>
                </div>
                <div className="activity-list">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className={`activity-status ${activity.status}`}>
                        {activity.status === 'new' && '🆕'}
                        {activity.status === 'scheduled' && '📅'}
                        {activity.status === 'published' && '✅'}
                      </div>
                      <div className="activity-content">
                        <div className="activity-main">
                          <span className="activity-action">{activity.action}</span>
                          <span className="activity-position">{activity.position}</span>
                        </div>
                        <div className="activity-time">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="view-all-btn">
                  View All Activity →
                </button>
              </div>

              {/* Top Positions */}
              <div className="positions-section">
                <div className="section-header">
                  <h2 className="section-title">Top Positions</h2>
                  <p className="section-subtitle">Most popular jobs</p>
                </div>
                <div className="positions-list">
                  {topPositions.map((position, index) => (
                    <div key={index} className="position-item">
                      <div className="position-info">
                        <h4 className="position-title">{position.title}</h4>
                        <div className="position-applicants">
                          {position.applicants} applicants
                        </div>
                      </div>
                      <div className="position-meta">
                        <div className={`position-urgency ${position.urgency}`}>
                          {position.urgency}
                        </div>
                        <div className="position-status">{position.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hiring Metrics */}
          <div className="metrics-section">
            <div className="section-header">
              <h2 className="section-title">Hiring Metrics</h2>
              <p className="section-subtitle">Your recruitment performance</p>
            </div>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">⏱️</div>
                <div className="metric-content">
                  <div className="metric-value">7.2 days</div>
                  <div className="metric-label">Average Time to Hire</div>
                  <div className="metric-trend positive">-2 days</div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">✅</div>
                <div className="metric-content">
                  <div className="metric-value">68%</div>
                  <div className="metric-label">Offer Acceptance Rate</div>
                  <div className="metric-trend positive">+12%</div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🔄</div>
                <div className="metric-content">
                  <div className="metric-value">24h</div>
                  <div className="metric-label">Avg. Response Time</div>
                  <div className="metric-trend positive">-6h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Footer */}
          <div className="support-footer">
            <div className="support-content">
              <div className="support-icon">💼</div>
              <div className="support-text">
                <strong>Company Management Portal</strong> • Last login: {new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="support-actions">
              <button className="support-btn">
                📞 Hiring Support
              </button>
              <button className="support-btn">
                📊 Analytics Report
              </button>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .company-dashboard {
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
          margin-bottom: 2rem;
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
          height: 150px;
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

        .company-quick-stats {
          display: flex;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .quick-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          flex: 1;
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.9;
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
          margin-bottom: 0.5rem;
        }

        .action-desc {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.4;
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

        /* Sidebar Sections */
        .sidebar-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-section, .positions-section {
          background: white;
          padding: 1.5rem;
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

        .activity-status {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-main {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .activity-action {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.9rem;
        }

        .activity-position {
          color: #64748b;
          font-weight: 500;
          font-size: 0.8rem;
        }

        .activity-time {
          font-size: 0.75rem;
          color: #94a3b8;
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

        /* Positions List */
        .positions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .position-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .position-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
        }

        .position-info {
          flex: 1;
        }

        .position-title {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .position-applicants {
          color: #64748b;
          font-size: 0.8rem;
        }

        .position-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .position-urgency {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .position-urgency.high {
          background: #fecaca;
          color: #dc2626;
        }

        .position-urgency.medium {
          background: #fef3c7;
          color: #d97706;
        }

        .position-urgency.low {
          background: #d1fae5;
          color: #065f46;
        }

        .position-status {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 600;
        }

        /* Metrics Section */
        .metrics-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          background: #f1f5f9;
          transform: translateY(-3px);
        }

        .metric-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .metric-content {
          flex: 1;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .metric-label {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }

        .metric-trend {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          display: inline-block;
        }

        .metric-trend.positive {
          background: #d1fae5;
          color: #065f46;
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

        .support-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
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
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
            height: 120px;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .dashboard-main {
            padding: 1rem;
          }
          
          .welcome-title {
            font-size: 2rem;
          }
          
          .company-quick-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .support-footer {
            flex-direction: column;
            text-align: center;
          }
          
          .support-actions {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .welcome-actions {
            flex-direction: column;
          }
          
          .action-btn {
            justify-content: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}