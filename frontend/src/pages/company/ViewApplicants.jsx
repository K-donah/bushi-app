import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function ViewApplicants() {
  const { applications, courses } = useAppData();
  const { user } = useAuth();

  // For prototype: show all applicants who applied (simplified)
  const applicantList = applications; // In real app, filter for company jobs

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
              Qualified Applicants
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Discover talented students and graduates for your job opportunities
            </p>
          </div>

          {/* Stats Overview */}
          {applicantList.length > 0 && (
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
                  status: "total", 
                  count: applicantList.length,
                  icon: "👥",
                  color: "#4facfe",
                  label: "Total Applicants"
                },
                { 
                  status: "admitted", 
                  count: applicantList.filter(a => a.status === "admitted").length,
                  icon: "✅",
                  color: "#10b981",
                  label: "Graduated"
                },
                { 
                  status: "pending", 
                  count: applicantList.filter(a => a.status === "pending").length,
                  icon: "⏳",
                  color: "#f59e0b",
                  label: "Current Students"
                },
                { 
                  status: "rejected", 
                  count: applicantList.filter(a => a.status === "rejected").length,
                  icon: "📚",
                  color: "#a78bfa",
                  label: "Active Learners"
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

          {/* Applicants List */}
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
            {applicantList.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px 32px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>🔍</div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  No Applicants Yet
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500"
                }}>
                  Qualified applicants will appear here once they start applying to jobs
                </p>
              </div>
            ) : (
              <div style={{ padding: "8px" }}>
                {applicantList.map((applicant) => {
                  const statusConfig = getStatusConfig(applicant.status);
                  const course = courses.find(c => c.id === applicant.courseId);

                  return (
                    <div
                      key={applicant.id}
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
                        {/* Applicant Info */}
                        <div style={{ flex: "1" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                            <div style={{
                              width: "60px",
                              height: "60px",
                              background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              border: "2px solid #4facfe30"
                            }}>
                              👤
                            </div>
                            <div>
                              <h4 style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#1e293b",
                                marginBottom: "4px"
                              }}>
                                {applicant.studentName}
                              </h4>
                              <p style={{
                                fontSize: "14px",
                                color: "#64748b",
                                fontWeight: "500",
                                margin: "0"
                              }}>
                                Student ID: {applicant.studentId}
                              </p>
                            </div>
                          </div>

                          {/* Education Details */}
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "16px",
                            marginBottom: "16px"
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
                              {applicant.courseTitle}
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
                              {applicant.facultyName}
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
                              {applicant.institutionName}
                            </div>
                          </div>

                          {/* Application Text Preview */}
                          {applicant.applicationText && (
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
                                "{applicant.applicationText.substring(0, 120)}..."
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Status and Actions */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "180px" }}>
                          {/* Academic Status */}
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

                          {/* Contact Action */}
                          <button
                            onClick={() => alert(`Contact ${applicant.studentName} at their institution email`)}
                            style={{
                              padding: "12px 20px",
                              borderRadius: "12px",
                              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "14px",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              justifyContent: "center"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = "0 8px 25px rgba(79, 172, 254, 0.6)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.4)";
                            }}
                          >
                            <span>📧</span>
                            Contact
                          </button>

                          {/* View Profile */}
                          <button
                            onClick={() => alert(`View ${applicant.studentName}'s full profile and transcripts`)}
                            style={{
                              padding: "10px 16px",
                              borderRadius: "10px",
                              background: "transparent",
                              color: "#4facfe",
                              border: "2px solid #4facfe",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "13px",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              justifyContent: "center"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.background = "#4facfe";
                              e.currentTarget.style.color = "white";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#4facfe";
                            }}
                          >
                            <span>👀</span>
                            View Profile
                          </button>
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
                Recruiting Tips
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
              <li>Review student academic status to understand their availability</li>
              <li>Contact admitted graduates for immediate hiring opportunities</li>
              <li>Consider current students for internships and part-time roles</li>
              <li>Check application statements to gauge candidate motivation</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}