import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ links = [] }) {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      {/* Background Overlay */}
      <div className="sidebar-overlay"></div>
      
      {/* Main Sidebar */}
      <aside className="sidebar">
        {/* Header Section */}
        <div className="sidebar-header">
          <div className="header-content">
            <div className="logo-wrapper">
              <div className="logo-icon">🌱</div>
              <div className="logo-text">
                <span className="logo-primary">EduPath</span>
                <span className="logo-secondary">Dashboard</span>
              </div>
            </div>
            <div className="user-badge">
              <div className="user-avatar">👤</div>
              <div className="user-info">
                <div className="user-name">Student</div>
                <div className="user-role">Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="section-title">Main Menu</h3>
            <ul className="nav-links">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                
                return (
                  <li key={link.to} className="nav-item">
                    <Link
                      to={link.to}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      <div 
                        className="link-icon"
                        style={{ color: link.color }}
                      >
                        {link.icon}
                      </div>
                      <span className="link-text">{link.label}</span>
                      <div 
                        className="link-indicator"
                        style={{ background: link.color }}
                      ></div>
                      <div 
                        className="link-hover"
                        style={{ background: link.color }}
                      ></div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Actions Section */}
          <div className="nav-section">
            <h3 className="section-title">Quick Actions</h3>
            <div className="quick-actions">
              <button className="quick-action">
                <span className="action-icon">⚡</span>
                <span className="action-text">New Application</span>
              </button>
              <button className="quick-action">
                <span className="action-icon">📊</span>
                <span className="action-text">View Progress</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="sidebar-footer">
          <div className="support-card">
            <div className="support-icon">💬</div>
            <div className="support-content">
              <div className="support-title">Need Help?</div>
              <div className="support-desc">Contact support</div>
            </div>
          </div>
          <div className="app-version">
            <span className="version-text">EduPath v2.0</span>
            <span className="version-badge">New</span>
          </div>
        </div>
      </aside>

      <style jsx>{`
  .sidebar-container {
    position: relative;
    height: 100vh;
    display: flex;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    z-index: 1;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      4px 0 40px rgba(0, 0, 0, 0.1),
      inset -1px 0 0 rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    z-index: 2;
    overflow: hidden;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  /* Dashboard content */
  .dashboard-content {
    flex: 1;
    margin-left: 0;
    padding: 2rem;
    background: #f8fafc;
    transition: margin-left 0.3s ease, padding 0.3s ease;
    overflow-y: auto;
    min-height: 100vh;
  }

  /* When sidebar is hidden, expand dashboard */
  .sidebar-container:not(:hover) .sidebar:not(:hover) {
    transform: translateX(-100%);
  }

  .sidebar-container:not(:hover) .sidebar:not(:hover) + .dashboard-content {
    margin-left: 0;
    padding: 2rem;
  }

  /* When sidebar is visible, adjust dashboard */
  .sidebar-container:hover .sidebar,
  .sidebar:hover {
    transform: translateX(0);
  }

  .sidebar-container:hover .sidebar + .dashboard-content,
  .sidebar:hover + .dashboard-content {
    margin-left: 280px;
    padding: 2rem;
  }

  /* Mouse proximity detection zone */
  .sidebar-container::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 5px;
    height: 100vh;
    z-index: 3;
    background: transparent;
  }

  /* Hover trigger for immediate opening */
  .sidebar-container:hover::before {
    width: 20px; /* Extend the hover zone for better UX */
  }

  /* Auto-hide functionality */
  .sidebar-container {
    animation: resetTimer 30s linear;
  }

  .sidebar-container:hover {
    animation: none; /* Reset timer on hover */
  }

  .sidebar:hover {
    animation: none; /* Reset timer when sidebar is hovered */
  }

  @keyframes resetTimer {
    0% {
      --sidebar-visible: 1;
    }
    99% {
      --sidebar-visible: 1;
    }
    100% {
      --sidebar-visible: 0;
    }
  }

  /* Close sidebar after 30s of inactivity */
  .sidebar-container:not(:hover) .sidebar:not(:hover) {
    animation-delay: 30s;
    transform: translateX(-100%);
  }

  /* Keep sidebar open when actively interacting with it */
  .sidebar-container:active .sidebar,
  .sidebar:active,
  .sidebar:focus-within {
    transform: translateX(0);
    animation: none;
  }

  /* Dashboard specific styles */
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .dashboard-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0;
  }

  .dashboard-subtitle {
    font-size: 1rem;
    color: #64748b;
    margin-top: 0.5rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.8);
  }

  .stat-card h3 {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .main-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.8);
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .widget {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.8);
  }

  /* Header Styles */
  .sidebar-header {
    padding: 2rem 1.5rem 1.5rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  }

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-icon {
    font-size: 2rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  .logo-text {
    display: flex;
    flex-direction: column;
  }

  .logo-primary {
    font-size: 1.25rem;
    font-weight: 800;
    color: #1e293b;
    line-height: 1;
  }

  .logo-secondary {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
    margin-top: 2px;
  }

  .user-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    backdrop-filter: blur(10px);
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
  }

  .user-info {
    flex: 1;
  }

  .user-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2px;
  }

  .user-role {
    font-size: 0.75rem;
    color: #667eea;
    font-weight: 600;
    background: rgba(102, 126, 234, 0.1);
    padding: 2px 8px;
    border-radius: 20px;
    display: inline-block;
  }

  /* Navigation Styles */
  .sidebar-nav {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section-title {
    font-size: 0.8rem;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
    padding-left: 0.5rem;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1rem;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
  }

  .nav-link:not(.active) {
    background: rgba(255, 255, 255, 0.6);
    border-color: rgba(226, 232, 240, 0.8);
  }

  .nav-link.active {
    background: white;
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 
      0 4px 15px rgba(102, 126, 234, 0.15),
      0 0 0 1px rgba(102, 126, 234, 0.1);
    transform: translateX(8px);
  }

  .nav-link:not(.active):hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .link-icon {
    font-size: 1.25rem;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  .nav-link.active .link-icon {
    transform: scale(1.1);
  }

  .link-text {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
    transition: all 0.3s ease;
  }

  .nav-link.active .link-text {
    color: #1e293b;
    font-weight: 700;
  }

  .link-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-link.active .link-indicator {
    opacity: 1;
    animation: pulse 2s infinite;
  }

  .link-hover {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    transition: left 0.3s ease;
  }

  .nav-link:hover .link-hover {
    left: 0;
  }

  /* Quick Actions */
  .quick-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .quick-action {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    width: 100%;
  }

  .quick-action:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateX(2px);
  }

  .action-icon {
    font-size: 1rem;
    opacity: 0.8;
  }

  .action-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #475569;
  }

  /* Footer Styles */
  .sidebar-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(226, 232, 240, 0.8);
    background: rgba(248, 250, 252, 0.8);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .support-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .support-card:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .support-icon {
    font-size: 1.25rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .support-content {
    flex: 1;
  }

  .support-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2px;
  }

  .support-desc {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
  }

  .app-version {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .version-text {
    font-size: 0.75rem;
    color: #94a3b8;
    font-weight: 500;
  }

  .version-badge {
    font-size: 0.7rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    color: white;
    padding: 2px 8px;
    border-radius: 20px;
    font-weight: 700;
  }

  /* Animations */
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

  /* Scrollbar Styling */
  .sidebar-nav::-webkit-scrollbar {
    width: 4px;
  }

  .sidebar-nav::-webkit-scrollbar-track {
    background: rgba(226, 232, 240, 0.5);
    border-radius: 2px;
  }

  .sidebar-nav::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 2px;
  }

  .sidebar-nav::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.5);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .sidebar {
      width: 260px;
    }
    
    .sidebar-container::before {
      width: 10px; /* Larger touch target on mobile */
    }

    .content-grid {
      grid-template-columns: 1fr;
    }

    .dashboard-content {
      padding: 1rem;
    }
  }

  /* Enhanced auto-hide with CSS custom properties */
  .sidebar-container {
    --sidebar-timer: 30s;
  }

  .sidebar-container:not(:hover) .sidebar:not(:hover) {
    transition: transform 0.3s ease var(--sidebar-timer);
  }
`}</style>
    </div>
  );
}