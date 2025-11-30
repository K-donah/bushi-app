import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const sections = [
    { 
      title: "Manage Institutions", 
      path: "/admin/institutions", 
      icon: "🏫", 
      color: "#4facfe",
      description: "Manage educational institutions and their profiles",
      stats: "15 registered"
    },
    { 
      title: "Manage Faculties", 
      path: "/admin/faculties", 
      icon: "🏛️", 
      color: "#ff6b6b",
      description: "Oversee faculty departments and academic structures",
      stats: "42 departments"
    },
    { 
      title: "Manage Courses", 
      path: "/admin/courses", 
      icon: "📚", 
      color: "#4ade80",
      description: "Monitor and manage course offerings across institutions",
      stats: "245 active"
    },
    { 
      title: "Manage Companies", 
      path: "/admin/companies", 
      icon: "💼", 
      color: "#a78bfa",
      description: "Manage registered companies and their job postings",
      stats: "42 companies"
    },
    { 
      title: "Reports & Analytics", 
      path: "/admin/reports", 
      icon: "📊", 
      color: "#f59e0b",
      description: "View system analytics and generate reports",
      stats: "12 reports"
    },
    { 
      title: "Publish Admissions", 
      path: "/admin/admissions", 
      icon: "🎓", 
      color: "#06b6d4",
      description: "Oversee admission processes and results",
      stats: "3,458 applications"
    },
    { 
      title: "Monitor Registered Users", 
      path: "/admin/users", 
      icon: "👥", 
      color: "#ec4899",
      description: "Monitor user activity and manage accounts",
      stats: "1,234 users"
    },
    { 
      title: "System Settings", 
      path: "/admin/settings", 
      icon: "⚙️", 
      color: "#64748b",
      description: "Configure system preferences and security",
      stats: "Last updated: Today"
    },
  ];

  const stats = [
    { label: "Total Institutions", value: "15", icon: "🏫", color: "#4facfe", trend: "+2 this month" },
    { label: "Active Courses", value: "245", icon: "📚", color: "#ff6b6b", trend: "15 new" },
    { label: "Registered Companies", value: "42", icon: "💼", color: "#4ade80", trend: "+5" },
    { label: "System Users", value: "1,234", icon: "👤", color: "#a78bfa", trend: "98 active now" }
  ];

  const systemMetrics = [
    { label: "System Uptime", value: "99.9%", status: "excellent" },
    { label: "Response Time", value: "128ms", status: "good" },
    { label: "Database Health", value: "Optimal", status: "excellent" },
    { label: "API Status", value: "Stable", status: "good" }
  ];

  const recentActivities = [
    { action: "New institution registered", user: "National University", time: "2 hours ago" },
    { action: "Course approval required", user: "Computer Science Dept", time: "4 hours ago" },
    { action: "System backup completed", user: "Automated Process", time: "6 hours ago" }
  ];

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome Header */}
          <div className="welcome-card">
            <div className="welcome-content">
              <div className="welcome-text">
                <div className="admin-badge">
                  <span className="badge-icon">⚙️</span>
                  <span className="badge-text">Admin Portal</span>
                </div>
                <h1 className="welcome-title">
                  System Administration
                </h1>
                <p className="welcome-subtitle">
                  Complete control and oversight of the Career Path Lesotho platform. 
                  Monitor system health, manage institutions, and ensure smooth operations.
                </p>
                <div className="welcome-actions">
                  <button className="action-btn primary">
                    <span>📊</span>
                    System Analytics
                  </button>
                  <button className="action-btn secondary">
                    <span>🔧</span>
                    Quick Settings
                  </button>
                </div>
              </div>
              <div className="welcome-visual">
                <div className="floating-element el-1">🏛️</div>
                <div className="floating-element el-2">📊</div>
                <div className="floating-element el-3">🔧</div>
              </div>
            </div>
            
            {/* System Metrics */}
            <div className="system-metrics">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className={`metric-status ${metric.status}`}>
                    <div className="status-dot"></div>
                    {metric.status}
                  </div>
                </div>
              ))}
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
            {/* Management Sections */}
            <div className="management-section">
              <div className="section-header">
                <h2 className="section-title">System Management</h2>
                <p className="section-subtitle">Manage all aspects of the platform</p>
              </div>
              <div className="management-grid">
                {sections.map((section) => (
                  <Link
                    key={section.path}
                    to={section.path}
                    className="management-card"
                  >
                    <div 
                      className="card-accent"
                      style={{ background: section.color }}
                    ></div>
                    <div className="card-content">
                      <div className="card-header">
                        <div 
                          className="card-icon"
                          style={{ 
                            background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                            borderColor: `${section.color}30`
                          }}
                        >
                          {section.icon}
                        </div>
                        <div className="card-stats" style={{ color: section.color }}>
                          {section.stats}
                        </div>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">{section.title}</h3>
                        <p className="card-description">{section.description}</p>
                      </div>
                      <div className="card-footer">
                        <span className="card-action" style={{ color: section.color }}>
                          Manage Section
                        </span>
                        <div 
                          className="card-arrow"
                          style={{ background: section.color }}
                        >
                          →
                        </div>
                      </div>
                    </div>
                    <div 
                      className="card-hover"
                      style={{ background: section.color }}
                    ></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Sections */}
            <div className="sidebar-sections">
              {/* Recent Activities */}
              <div className="activity-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Activities</h2>
                  <p className="section-subtitle">System events and changes</p>
                </div>
                <div className="activity-list">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-dot"></div>
                      <div className="activity-content">
                        <div className="activity-main">
                          <span className="activity-action">{activity.action}</span>
                          <span className="activity-user">{activity.user}</span>
                        </div>
                        <div className="activity-time">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="view-all-btn">
                  View All Activities →
                </button>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions-section">
                <div className="section-header">
                  <h2 className="section-title">Quick Actions</h2>
                  <p className="section-subtitle">Frequently used tools</p>
                </div>
                <div className="quick-actions">
                  <button className="quick-action">
                    <span className="action-icon">🔄</span>
                    <span className="action-text">Run System Backup</span>
                  </button>
                  <button className="quick-action">
                    <span className="action-icon">📧</span>
                    <span className="action-text">Send Bulk Email</span>
                  </button>
                  <button className="quick-action">
                    <span className="action-icon">📋</span>
                    <span className="action-text">Generate Report</span>
                  </button>
                  <button className="quick-action">
                    <span className="action-icon">👁️</span>
                    <span className="action-text">View Audit Log</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* System Status Footer */}
          <div className="system-status-footer">
            <div className="status-content">
              <div className="status-indicator">
                <div className="status-dot live"></div>
                <div className="status-text">
                  <strong>System Status:</strong> All Systems Operational
                </div>
              </div>
              <div className="status-meta">
                Last updated: {new Date().toLocaleDateString()} • Version 2.0.0
              </div>
            </div>
            <div className="status-actions">
              <button className="status-btn">
                📞 Support
              </button>
              <button className="status-btn">
                📚 Documentation
              </button>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .dashboard-main {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          min-height: 100vh;
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

        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 1.5rem;
        }

        .badge-icon {
          font-size: 1rem;
        }

        .badge-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .welcome-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .welcome-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 500;
          max-width: 600px;
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

        /* System Metrics */
        .system-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .metric-item {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 0.85rem;
          opacity: 0.9;
          margin-bottom: 0.75rem;
        }

        .metric-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .metric-status.excellent .status-dot {
          background: #10b981;
        }

        .metric-status.good .status-dot {
          background: #f59e0b;
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

        /* Management Grid */
        .management-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .management-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .management-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .card-accent {
          height: 4px;
          width: 100%;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 2px solid;
        }

        .card-stats {
          font-size: 0.8rem;
          font-weight: 700;
        }

        .card-body {
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.4;
          margin: 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .card-action {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .card-arrow {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: white;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .management-card:hover .card-arrow {
          transform: translateX(3px);
        }

        .card-hover {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          transition: left 0.3s ease;
        }

        .management-card:hover .card-hover {
          left: 0;
        }

        /* Sidebar Sections */
        .sidebar-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-section, .quick-actions-section {
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
          align-items: flex-start;
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

        .activity-dot {
          width: 8px;
          height: 8px;
          background: #667eea;
          border-radius: 50%;
          margin-top: 0.5rem;
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

        .activity-user {
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

        /* Quick Actions */
        .quick-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        .quick-action {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .quick-action:hover {
          background: #f1f5f9;
          border-color: #667eea;
          transform: translateX(2px);
        }

        .action-icon {
          font-size: 1rem;
          opacity: 0.8;
        }

        .action-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
        }

        /* System Status Footer */
        .system-status-footer {
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

        .status-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .status-dot.live {
          width: 12px;
          height: 12px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-text {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .status-meta {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .status-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .status-btn {
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

        .status-btn:hover {
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
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
          
          .management-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .dashboard-main {
            padding: 1rem;
          }
          
          .welcome-title {
            font-size: 2rem;
          }
          
          .system-metrics {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .system-status-footer {
            flex-direction: column;
            text-align: center;
          }
          
          .status-actions {
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
          
          .management-grid {
            grid-template-columns: 1fr;
          }
          
          .system-metrics {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}