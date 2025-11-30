// src/pages/student/JobPostings.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function JobPostings() {
  const { jobs, applyForJob } = useAppData();
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "32px",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
              💼
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                marginBottom: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Career Opportunities
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Discover exciting job opportunities and kickstart your professional journey
            </p>
          </div>

          {/* Jobs Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "24px"
            }}
          >
            {jobs.length === 0 ? (
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  padding: "60px 32px",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  textAlign: "center",
                  gridColumn: "1 / -1"
                }}
              >
                <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>🔍</div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  No Jobs Available
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500"
                }}>
                  Check back later for new career opportunities
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    padding: "32px",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Background Accent */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: "linear-gradient(135deg, #4facfe, #00f2fe)"
                  }}></div>

                  {/* Job Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      border: "2px solid #4facfe30",
                      flexShrink: "0"
                    }}>
                      💼
                    </div>
                    <div style={{ flex: "1" }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#1e293b",
                          marginBottom: "8px",
                          lineHeight: "1.3"
                        }}
                      >
                        {job.title}
                      </h3>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "16px",
                        color: "#4facfe",
                        fontWeight: "600"
                      }}>
                        <span>🏢</span>
                        {job.company}
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  {job.description && (
                    <div style={{ marginBottom: "24px" }}>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#64748b",
                          lineHeight: "1.6",
                          fontWeight: "500",
                          margin: "0"
                        }}
                      >
                        {job.description}
                      </p>
                    </div>
                  )}

                  {/* Job Details */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "24px"
                  }}>
                    {job.location && (
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(79, 172, 254, 0.1)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#4facfe"
                      }}>
                        📍 {job.location}
                      </div>
                    )}
                    {job.salary && (
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(74, 222, 128, 0.1)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#4ade80"
                      }}>
                        💰 {job.salary}
                      </div>
                    )}
                    {job.type && (
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(168, 85, 247, 0.1)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#a855f7"
                      }}>
                        ⏱️ {job.type}
                      </div>
                    )}
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => {
                      applyForJob(user.id, job);
                      alert("Application submitted successfully! 🎉");
                    }}
                    style={{
                      width: "100%",
                      padding: "16px 24px",
                      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "16px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
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
                    <span>🚀</span>
                    Apply Now
                    <span>📨</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Stats Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "32px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <p style={{ 
              fontSize: "14px", 
              color: "#64748b",
              fontWeight: "500",
              margin: "0"
            }}>
              💼 Found {jobs.length} opportunity{jobs.length !== 1 ? 'ies' : ''} • 
              🔍 New jobs added daily • 
              ⚡ Quick apply with one click
            </p>
          </div>
        </div>
      </main>
    </>
  );
}