import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function StudentApplications() {
  const { applications, updateApplication, admitApplication } = useAppData();
  const { user } = useAuth();

  // Admit student (context handles rejecting conflicting applications)
  const handleAdmit = (id) => {
    admitApplication(id);
    alert(
      "Student admitted. Other conflicting admissions within the same institution will be rejected."
    );
  };

  const handleReject = (id) => {
    updateApplication(id, { status: "rejected" });
  };

  const myApplications = applications.filter(a => a.institutionId === user.id);

  const getStatusConfig = (status) => {
    switch (status) {
      case "admitted":
        return { color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)", icon: "✅", label: "Admitted" };
      case "rejected":
        return { color: "#ef4444", bgColor: "rgba(239, 68, 68, 0.1)", icon: "❌", label: "Rejected" };
      default:
        return { color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)", icon: "⏳", label: "Pending" };
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ 
        padding: 32, 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              marginBottom: "32px",
              border: "1px solid rgba(255,255,255,0.3)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "150px",
              height: "150px",
              background: "rgba(79, 172, 254, 0.1)",
              borderRadius: "50%"
            }}></div>
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "32px",
              boxShadow: "0 8px 20px rgba(79, 172, 254, 0.3)"
            }}>
              📝
            </div>
            <h2 style={{ 
              fontSize: "32px", 
              fontWeight: 800,
              marginBottom: "12px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Student Applications
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Review and manage student applications for your institution's courses
            </p>
          </div>

          {/* Stats Overview */}
          {myApplications.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "32px"
              }}
            >
              {[
                { 
                  status: "pending", 
                  count: myApplications.filter(a => a.status === "pending").length,
                  icon: "⏳",
                  color: "#f59e0b",
                  label: "Pending Review"
                },
                { 
                  status: "admitted", 
                  count: myApplications.filter(a => a.status === "admitted").length,
                  icon: "✅",
                  color: "#10b981",
                  label: "Admitted"
                },
                { 
                  status: "rejected", 
                  count: myApplications.filter(a => a.status === "rejected").length,
                  icon: "❌",
                  color: "#ef4444",
                  label: "Rejected"
                },
                { 
                  status: "total", 
                  count: myApplications.length,
                  icon: "📊",
                  color: "#4facfe",
                  label: "Total Applications"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    padding: "24px",
                    borderRadius: "16px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{
                    fontSize: "32px",
                    marginBottom: "12px",
                    color: stat.color
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: "28px",
                    fontWeight: "800",
                    color: stat.color,
                    marginBottom: "8px"
                  }}>
                    {stat.count}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "#64748b",
                    fontWeight: "600"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Applications List */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              overflow: "hidden"
            }}
          >
            {myApplications.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px 32px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>📭</div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  No Applications Received
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500"
                }}>
                  Student applications will appear here once they apply to your courses
                </p>
              </div>
            ) : (
              <div style={{ padding: "8px" }}>
                {myApplications.map((app) => {
                  const statusConfig = getStatusConfig(app.status);

                  return (
                    <div
                      key={app.id}
                      style={{
                        background: "white",
                        padding: "24px",
                        borderRadius: "16px",
                        margin: "8px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                        {/* Application Info */}
                        <div style={{ flex: "1" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                            <div style={{
                              width: "50px",
                              height: "50px",
                              background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "20px",
                              border: "2px solid #4facfe30"
                            }}>
                              👤
                            </div>
                            <div>
                              <h4 style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "#1e293b",
                                marginBottom: "4px"
                              }}>
                                {app.studentName}
                              </h4>
                              <p style={{
                                fontSize: "14px",
                                color: "#64748b",
                                fontWeight: "500",
                                margin: "0"
                              }}>
                                Student ID: {app.studentId}
                              </p>
                            </div>
                          </div>

                          {/* Course Details */}
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "12px",
                            marginBottom: "12px"
                          }}>
                            <div style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "14px",
                              color: "#64748b",
                              fontWeight: "500"
                            }}>
                              <span>📚</span>
                              {app.courseTitle}
                            </div>
                            <div style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "14px",
                              color: "#64748b",
                              fontWeight: "500"
                            }}>
                              <span>🏛️</span>
                              {app.facultyName}
                            </div>
                          </div>

                          {/* Application Text Preview */}
                          {app.applicationText && (
                            <div style={{
                              background: "rgba(79, 172, 254, 0.05)",
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid rgba(79, 172, 254, 0.2)"
                            }}>
                              <p style={{
                                fontSize: "13px",
                                color: "#4b5563",
                                fontStyle: "italic",
                                margin: "0",
                                lineHeight: "1.4"
                              }}>
                                "{app.applicationText.substring(0, 120)}..."
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Status and Actions */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "180px" }}>
                          {/* Current Status */}
                          <div style={{
                            background: statusConfig.bgColor,
                            color: statusConfig.color,
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "700",
                            textAlign: "center",
                            border: `1px solid ${statusConfig.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px"
                          }}>
                            {statusConfig.icon}
                            {statusConfig.label}
                          </div>

                          {/* Action Buttons */}
                          {app.status === "pending" && (
                            <div style={{ display: "flex", gap: "8px" }}>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Admit ${app.studentName} to ${app.courseTitle}?`)) {
                                    handleAdmit(app.id);
                                  }
                                }}
                                style={{
                                  flex: "1",
                                  padding: "10px 16px",
                                  borderRadius: "10px",
                                  background: "linear-gradient(135deg, #10b981, #34d399)",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  fontWeight: "600",
                                  fontSize: "13px",
                                  transition: "all 0.3s ease",
                                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "4px"
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.transform = "translateY(-2px)";
                                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(16, 185, 129, 0.6)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.4)";
                                }}
                              >
                                <span>✅</span>
                                Admit
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Reject ${app.studentName}'s application for ${app.courseTitle}?`)) {
                                    handleReject(app.id);
                                  }
                                }}
                                style={{
                                  flex: "1",
                                  padding: "10px 16px",
                                  borderRadius: "10px",
                                  background: "linear-gradient(135deg, #ef4444, #f87171)",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  fontWeight: "600",
                                  fontSize: "13px",
                                  transition: "all 0.3s ease",
                                  boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "4px"
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.transform = "translateY(-2px)";
                                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(239, 68, 68, 0.6)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.4)";
                                }}
                              >
                                <span>❌</span>
                                Reject
                              </button>
                            </div>
                          )}

                          {/* Already Processed */}
                          {app.status !== "pending" && (
                            <div style={{
                              padding: "10px 16px",
                              borderRadius: "10px",
                              background: statusConfig.bgColor,
                              color: statusConfig.color,
                              border: `1px solid ${statusConfig.color}30`,
                              fontWeight: "600",
                              fontSize: "13px",
                              textAlign: "center"
                            }}>
                              Application {app.status}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Help Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "24px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "white"
              }}>
                💡
              </div>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e293b",
                margin: "0"
              }}>
                Application Review Tips
              </h3>
            </div>
            <ul style={{
              color: "#64748b",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "1.6",
              margin: "0",
              paddingLeft: "20px"
            }}>
              <li>Read the student's motivation statement carefully</li>
              <li>Admitting a student will automatically reject their other applications to your institution</li>
              <li>Consider the student's qualifications and fit for the course</li>
              <li>Review all pending applications in a timely manner</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}