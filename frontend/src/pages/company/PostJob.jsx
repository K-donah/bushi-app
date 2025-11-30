import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function PostJob() {
  const { addJob, jobs } = useAppData();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [requirements, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("full-time");

  const handlePost = () => {
    if (!title.trim()) return alert("Enter job title");
    addJob({
      id: `job_${Date.now()}`,
      title: title.trim(),
      requirements,
      location,
      salary,
      type: jobType,
      companyId: user.id,
      companyName: user.name,
      status: "open",
      postedAt: new Date().toISOString()
    });
    setTitle("");
    setRequirements("");
    setLocation("");
    setSalary("");
    setJobType("full-time");
    alert("Job posted successfully! 🎉");
  };

  const myJobs = jobs.filter(j => j.companyId === user.id);

  return (
    <>
      <Navbar />
      <main style={{ 
        padding: 32, 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            <h2 style={{ 
              fontSize: "32px", 
              fontWeight: 800,
              marginBottom: "12px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Post a Job
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Create job postings to attract qualified candidates from our platform
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Post Job Form */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                padding: "32px",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Background Decorations */}
              <div style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "100px",
                height: "100px",
                background: "rgba(255, 107, 107, 0.1)",
                borderRadius: "50%"
              }}></div>

              <h3 style={{ 
                fontSize: "24px", 
                fontWeight: 700, 
                color: "#1e293b",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span>📝</span> Job Details
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: "2" }}>
                {/* Job Title */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>🎯</span> Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Senior Frontend Developer"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>

                {/* Job Type and Location */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ 
                      fontWeight: "600", 
                      color: "#374151",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      <span>⏱️</span> Job Type
                    </label>
                    <select
                      value={jobType}
                      onChange={e => setJobType(e.target.value)}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        backgroundColor: "white",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    >
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ 
                      fontWeight: "600", 
                      color: "#374151",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      <span>📍</span> Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Maseru, Lesotho"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        backgroundColor: "white",
                        fontSize: "15px",
                        transition: "all 0.3s ease",
                        fontWeight: "500"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                </div>

                {/* Salary */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>💰</span> Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., M15,000 - M20,000"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>

                {/* Requirements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>📋</span> Job Requirements
                  </label>
                  <textarea
                    placeholder="Describe the skills, qualifications, and experience required..."
                    value={requirements}
                    onChange={e => setRequirements(e.target.value)}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      minHeight: "120px",
                      fontSize: "15px",
                      resize: "vertical",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>

                {/* Post Button */}
                <button
                  onClick={handlePost}
                  disabled={!title.trim()}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "12px",
                    background: title.trim() ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    cursor: title.trim() ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: title.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                    marginTop: "16px"
                  }}
                  onMouseOver={e => title.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseOut={e => title.trim() && (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span>🚀</span>
                  Post Job
                </button>
              </div>
            </div>

            {/* Posted Jobs List */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "32px",
                height: "fit-content"
              }}
            >
              <h3 style={{ 
                fontSize: "24px", 
                fontWeight: 700, 
                color: "#1e293b",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span>📊</span> Your Posted Jobs
              </h3>

              {myJobs.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>💼</div>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500",
                    margin: "0"
                  }}>
                    No jobs posted yet. Create your first job posting!
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {myJobs.map(job => (
                    <div
                      key={job.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "16px",
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
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <h4 style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          color: "#1e293b",
                          margin: "0"
                        }}>
                          {job.title}
                        </h4>
                        <span style={{
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "700",
                          background: job.status === "open" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                          color: job.status === "open" ? "#10b981" : "#f59e0b",
                          border: `1px solid ${job.status === "open" ? "rgba(16, 185, 129, 0.3)" : "rgba(245, 158, 11, 0.3)"}`,
                          textTransform: "capitalize"
                        }}>
                          {job.status}
                        </span>
                      </div>
                      <div style={{
                        fontSize: "14px",
                        color: "#64748b",
                        fontWeight: "500"
                      }}>
                        {job.type} • {job.location || "Not specified"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Info Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "16px",
            marginTop: "24px",
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
              💡 Tip: Be specific in your job requirements to attract the most qualified candidates
            </p>
          </div>
        </div>
      </main>
    </>
  );
}