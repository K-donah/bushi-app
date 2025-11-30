import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const dashboardCards = [
    { 
      icon: "📚", 
      title: "Courses", 
      description: "Browse and apply to courses", 
      color: "#ff4d4d",
      gradient: "linear-gradient(135deg, #ff4d4d, #ff6b6b)"
    },
    { 
      icon: "🏫", 
      title: "Institutions", 
      description: "View available institutions", 
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    { 
      icon: "💼", 
      title: "Jobs", 
      description: "Find employment opportunities", 
      color: "#4ade80",
      gradient: "linear-gradient(135deg, #4ade80, #22d3ee)"
    },
    { 
      icon: "👤", 
      title: "Profile", 
      description: "Manage your account", 
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa, #f472b6)"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1419 0%, #1a1a2e 50%, #16213e 100%)",
      padding: "24px",
      fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 77, 77, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 217, 61, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(79, 172, 254, 0.05) 0%, transparent 50%)
        `,
        zIndex: "0"
      }}></div>

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        zIndex: "1"
      }}>
        {/* Header Section - Glass Morphism */}
        <div style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          padding: "48px 40px",
          borderRadius: "32px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          marginBottom: "32px",
          border: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(255, 77, 77, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite"
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255, 217, 61, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 12s ease-in-out infinite"
          }}></div>
          
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
            position: "relative",
            zIndex: "2"
          }}>
            <div>
              <h1 style={{
                fontSize: "52px",
                fontWeight: "800",
                color: "white",
                marginBottom: "16px",
                letterSpacing: "-1.5px",
                lineHeight: "1.1"
              }}>
                Welcome back, <span style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ffd93d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>{user?.name}</span>! 🚀
              </h1>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "12px 24px",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600"
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  background: "#4ade80",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite"
                }}></div>
                👤 You are logged in as {user?.role}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              {[
                { label: "Applications", value: "5", trend: "+2" },
                { label: "Messages", value: "12", trend: "+3" }
              ].map((stat, index) => (
                <div key={index} style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  minWidth: "140px",
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#ffd93d",
                    marginBottom: "8px"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: "600",
                    marginBottom: "8px"
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: "12px",
                    color: "#4ade80",
                    fontWeight: "700",
                    background: "rgba(74, 222, 128, 0.1)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    display: "inline-block",
                    border: "1px solid rgba(74, 222, 128, 0.2)"
                  }}>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "32px",
          alignItems: "start"
        }}>
          {/* Dashboard Cards Grid */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            padding: "40px",
            borderRadius: "32px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px"
            }}>
              <h2 style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "white",
                letterSpacing: "-1px"
              }}>
                Quick Access
              </h2>
              <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "8px 16px",
                borderRadius: "12px",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {dashboardCards.length} features
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px"
            }}>
              {dashboardCards.map((card, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    padding: "32px 24px",
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: card.gradient,
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                    transformOrigin: "left"
                  }}></div>
                  
                  <div style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)"
                  }}>
                    {card.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "12px",
                    letterSpacing: "-0.5px"
                  }}>
                    {card.title}
                  </h3>
                  
                  <p style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    marginBottom: "20px"
                  }}>
                    {card.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: card.gradient,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    transform: "translateX(0)"
                  }}>
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Recent Activity */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            padding: "32px",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.1)",
            height: "fit-content"
          }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "white",
              marginBottom: "24px",
              letterSpacing: "-0.5px"
            }}>
              Recent Activity
            </h3>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              {[
                { action: "Applied to Computer Science", time: "2 hours ago", icon: "📝" },
                { action: "Message from University", time: "5 hours ago", icon: "💬" },
                { action: "Profile updated", time: "1 day ago", icon: "👤" },
                { action: "New job matches", time: "2 days ago", icon: "💼" }
              ].map((activity, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px"
                  }}>
                    {activity.icon}
                  </div>
                  <div style={{ flex: "1" }}>
                    <div style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "white",
                      marginBottom: "4px"
                    }}>
                      {activity.action}
                    </div>
                    <div style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.5)",
                      fontWeight: "500"
                    }}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;