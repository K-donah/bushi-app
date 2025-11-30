// components/DashboardLayout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-overlay"></div>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="header-content">
            <div className="logo-wrapper">
              <div className="logo-icon">⚡</div>
              <div className="logo-text">
                <div className="logo-primary">Your App</div>
                <div className="logo-secondary">Dashboard</div>
              </div>
            </div>
            <div className="user-badge">
              <div className="user-avatar">👤</div>
              <div className="user-info">
                <div className="user-name">John Doe</div>
                <div className="user-role">Administrator</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sidebar-nav">
          <div className="nav-section">
            <h4 className="section-title">Main</h4>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span className="link-icon">📊</span>
                  <span className="link-text">Dashboard</span>
                  <span className="link-indicator"></span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span className="link-icon">👥</span>
                  <span className="link-text">Users</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span className="link-icon">📈</span>
                  <span className="link-text">Analytics</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="support-card">
            <span className="support-icon">💬</span>
            <div className="support-content">
              <div className="support-title">Need Help?</div>
              <div className="support-desc">Contact our support team</div>
            </div>
          </div>
          <div className="app-version">
            <span className="version-text">Version 2.1.0</span>
            <span className="version-badge">Latest</span>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}