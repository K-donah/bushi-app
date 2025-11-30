import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function ManageStudentStatus() {
  const { applications, updateApplication, courses, faculties, institutions } = useAppData();

  if (!applications) return <p>Loading...</p>;

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
              👥
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
              Manage Student Status
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Review and update student application status for your institution
            </p>
          </div>

          {/* Stats Overview */}
          {applications.length > 0 && (
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
                  count: applications.filter(a => a.status === "pending").length,
                  icon: "⏳",
                  color: "#f59e0b"
                },
                { 
                  status: "admitted", 
                  count: applications.filter(a => a.status === "admitted").length,
                  icon: "✅",
                  color: "#10b981"
                },
                { 
                  status: "rejected", 
                  count: applications.filter(a => a.status === "rejected").length,
                  icon: "❌",
                  color: "#ef4444"
                },
                { 
                  status: "total", 
                  count: applications.length,
                  icon: "📊",
                  color: "#4facfe"
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
                    fontWeight: "600",
                    textTransform: "capitalize"
                  }}>
                    {stat.status} Applications
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
            {applications.length === 0 ? (
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
                  No Applications Yet
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
                {applications.map((app) => {
                  const course = courses.find(c => c.id === app.courseId);
                  const faculty = faculties.find(f => f.id === app.facultyId);
                  const institution = institutions.find(i => i.id === app.institutionId);
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
                        {/* Student Info */}
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
                                Student ID: {app.studentId}
                              </h4>
                              <p style={{
                                fontSize: "14px",
                                color: "#64748b",
                                fontWeight: "500",
                                margin: "0"
                              }}>
                                {app.studentName}
                              </p>
                            </div>
                          </div>

                          {/* Course Details */}
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "12px"
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
                              {course?.title || "N/A"}
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
                              {faculty?.name || "N/A"}
                            </div>
                            <div style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "14px",
                              color: "#64748b",
                              fontWeight: "500"
                            }}>
                              <span>🏫</span>
                              {institution?.name || "N/A"}
                            </div>
                          </div>
                        </div>

                        {/* Status and Actions */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "200px" }}>
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
                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {[
                              { status: "admitted", icon: "✅", color: "#10b981", label: "Admit" },
                              { status: "rejected", icon: "❌", color: "#ef4444", label: "Reject" },
                              { status: "pending", icon: "⏳", color: "#f59e0b", label: "Pending" }
                            ].map((action) => (
                              <button
                                key={action.status}
                                onClick={() => updateApplication(app.id, { status: action.status })}
                                style={{
                                  flex: "1",
                                  padding: "8px 12px",
                                  borderRadius: "10px",
                                  border: "none",
                                  background: app.status === action.status ? 
                                    action.color : 
                                    `linear-gradient(135deg, ${action.color}20, ${action.color}40)`,
                                  color: app.status === action.status ? "white" : action.color,
                                  cursor: "pointer",
                                  fontWeight: "600",
                                  fontSize: "12px",
                                  transition: "all 0.3s ease",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "4px",
                                  border: app.status === action.status ? "none" : `1px solid ${action.color}30`
                                }}
                                onMouseOver={(e) => {
                                  if (app.status !== action.status) {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.background = action.color;
                                    e.currentTarget.style.color = "white";
                                  }
                                }}
                                onMouseOut={(e) => {
                                  if (app.status !== action.status) {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${action.color}20, ${action.color}40)`;
                                    e.currentTarget.style.color = action.color;
                                  }
                                }}
                              >
                                {action.icon}
                                {action.label}
                              </button>
                            ))}
                          </div>
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
                Application Status Guide
              </h3>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px"
            }}>
              {[
                { status: "⏳ Pending", desc: "Application under review" },
                { status: "✅ Admitted", desc: "Student accepted to course" },
                { status: "❌ Rejected", desc: "Application not approved" }
              ].map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "16px", flexShrink: "0" }}>{item.status.split(' ')[0]}</span>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#1e293b" }}>
                      {item.status.split(' ')[1]}
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}