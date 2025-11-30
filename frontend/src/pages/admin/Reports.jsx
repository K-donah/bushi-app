import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function Reports() {
  const { institutions, faculties, courses, applications, companies, jobs } = useAppData();

  // Calculate additional statistics
  const admittedApplications = applications.filter(app => app.status === "admitted").length;
  const pendingApplications = applications.filter(app => app.status === "pending" || !app.status).length;
  const approvedInstitutions = institutions.filter(inst => inst.status === "approved").length;
  const activeJobs = jobs.filter(job => job.status === "active").length;

  const stats = [
    {
      title: "Educational Institutions",
      value: institutions.length,
      icon: "🏢",
      color: "#4facfe",
      description: `${approvedInstitutions} approved, ${institutions.length - approvedInstitutions} pending`,
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
      title: "Academic Faculties",
      value: faculties.length,
      icon: "🏛️",
      color: "#ff6b6b",
      description: "Organized academic departments",
      gradient: "linear-gradient(135deg, #ff6b6b, #ff8e53)"
    },
    {
      title: "Courses & Programs",
      value: courses.length,
      icon: "📚",
      color: "#4ade80",
      description: "Available academic courses",
      gradient: "linear-gradient(135deg, #4ade80, #22c55e)"
    },
    {
      title: "Student Applications",
      value: applications.length,
      icon: "📝",
      color: "#f59e0b",
      description: `${admittedApplications} admitted, ${pendingApplications} pending`,
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)"
    },
    {
      title: "Partner Companies",
      value: companies.length,
      icon: "💼",
      color: "#8b5cf6",
      description: "Industry partnerships",
      gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)"
    },
    {
      title: "Job Opportunities",
      value: jobs.length,
      icon: "🔧",
      color: "#06b6d4",
      description: `${activeJobs} active positions`,
      gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)"
    }
  ];

  // Calculate growth metrics (you can replace with actual historical data)
  const totalEntities = institutions.length + faculties.length + courses.length + applications.length + companies.length + jobs.length;

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "32px",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "100px",
              height: "100px",
              background: "rgba(255, 107, 107, 0.1)",
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
              📊
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
              System Analytics & Reports
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Comprehensive overview of platform performance, user engagement, and institutional metrics
            </p>
          </div>

          {/* Overview Stats */}
          <div style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "32px",
            marginBottom: "32px"
          }}>
            <h3 style={{ 
              fontSize: "24px", 
              fontWeight: 700, 
              color: "#1e293b",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span>📈</span> Platform Overview
            </h3>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "24px"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "#4facfe", marginBottom: "8px" }}>
                  {totalEntities}
                </div>
                <div style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
                  Total Entities
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "#10b981", marginBottom: "8px" }}>
                  {institutions.length + companies.length}
                </div>
                <div style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
                  Partners
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "#f59e0b", marginBottom: "8px" }}>
                  {applications.length}
                </div>
                <div style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
                  Applications
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "#8b5cf6", marginBottom: "8px" }}>
                  {admittedApplications}
                </div>
                <div style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>
                  Admitted Students
                </div>
              </div>
            </div>
          </div>

          {/* Main Statistics Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px",
            marginBottom: "32px"
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  padding: "24px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                {/* Background Accent */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "80px",
                  height: "80px",
                  background: stat.gradient,
                  opacity: "0.1",
                  borderRadius: "0 20px 0 20px"
                }}></div>
                
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      background: stat.gradient,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "12px",
                      boxShadow: `0 4px 12px ${stat.color}40`
                    }}>
                      {stat.icon}
                    </div>
                    <h4 style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#64748b",
                      marginBottom: "4px"
                    }}>
                      {stat.title}
                    </h4>
                    <div style={{
                      fontSize: "32px",
                      fontWeight: "800",
                      color: stat.color,
                      lineHeight: "1"
                    }}>
                      {stat.value}
                    </div>
                  </div>
                </div>
                
                <p style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  fontWeight: "500",
                  margin: "0",
                  lineHeight: "1.4"
                }}>
                  {stat.description}
                </p>

                {/* Progress bar for visual representation */}
                <div style={{
                  marginTop: "16px",
                  height: "4px",
                  background: "#e2e8f0",
                  borderRadius: "2px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    height: "100%",
                    background: stat.gradient,
                    width: `${Math.min((stat.value / Math.max(...stats.map(s => s.value))) * 100, 100)}%`,
                    borderRadius: "2px",
                    transition: "width 0.5s ease"
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Insights */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}>
            {/* Application Insights */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span>🎯</span> Application Insights
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Admission Rate</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#10b981" }}>
                    {applications.length > 0 ? Math.round((admittedApplications / applications.length) * 100) : 0}%
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Pending Review</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#f59e0b" }}>
                    {pendingApplications}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Average per Institution</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#4facfe" }}>
                    {institutions.length > 0 ? (applications.length / institutions.length).toFixed(1) : 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Institutional Insights */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span>🏫</span> Institutional Metrics
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Approval Rate</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#10b981" }}>
                    {institutions.length > 0 ? Math.round((approvedInstitutions / institutions.length) * 100) : 0}%
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Faculties per Institution</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#ff6b6b" }}>
                    {institutions.length > 0 ? (faculties.length / institutions.length).toFixed(1) : 0}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Courses per Faculty</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#4ade80" }}>
                    {faculties.length > 0 ? (courses.length / faculties.length).toFixed(1) : 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Career Insights */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span>💼</span> Career Center
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Active Job Posts</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#06b6d4" }}>
                    {activeJobs}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Jobs per Company</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#8b5cf6" }}>
                    {companies.length > 0 ? (jobs.length / companies.length).toFixed(1) : 0}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Platform Utilization</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#f59e0b" }}>
                    {totalEntities > 50 ? "High" : totalEntities > 20 ? "Medium" : "Growing"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Export Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "32px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <h4 style={{ 
              fontSize: "18px", 
              fontWeight: "600", 
              color: "#374151",
              marginBottom: "16px"
            }}>
              Export Reports
            </h4>
            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <button
                onClick={() => alert("Exporting comprehensive system report...")}
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(79, 172, 254, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>📄</span>
                Export Full Report
              </button>
              <button
                onClick={() => alert("Generating PDF summary...")}
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>📊</span>
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}