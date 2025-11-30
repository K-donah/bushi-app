import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function PublishAdmissions() {
  const { applications, admitApplication } = useAppData();

  const pendingApplications = applications?.filter(app => app.status === "pending" || !app.status) || [];
  const admittedApplications = applications?.filter(app => app.status === "admitted") || [];
  const totalApplications = applications?.length || 0;

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
              🎓
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
              Publish Admissions
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Review and admit students into academic programs
            </p>
          </div>

          {/* Stats Overview */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "32px"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "#4facfe", marginBottom: "8px" }}>
                {totalApplications}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Total Applications
              </div>
            </div>
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "#f59e0b", marginBottom: "8px" }}>
                {pendingApplications.length}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Pending Review
              </div>
            </div>
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "#10b981", marginBottom: "8px" }}>
                {admittedApplications.length}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Admitted Students
              </div>
            </div>
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "#8b5cf6", marginBottom: "8px" }}>
                {totalApplications > 0 ? Math.round((admittedApplications.length / totalApplications) * 100) : 0}%
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Admission Rate
              </div>
            </div>
          </div>

          {/* Applications Table */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "32px",
              overflow: "hidden"
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
              <span>📋</span> Application Review
              <span style={{
                background: "#4facfe",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {totalApplications}
              </span>
            </h3>

            {(!applications || applications.length === 0) ? (
              <div style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "16px", opacity: "0.5" }}>📝</div>
                <h4 style={{ 
                  fontSize: "20px", 
                  color: "#374151",
                  fontWeight: "600",
                  marginBottom: "8px"
                }}>
                  No Applications Found
                </h4>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500",
                  margin: "0"
                }}>
                  There are no student applications to review at this time.
                </p>
              </div>
            ) : (
              <div style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}>
                {/* Table Header */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1.5fr 1.5fr 1fr 1fr",
                  gap: "16px",
                  padding: "20px 24px",
                  backgroundColor: "#f8fafc",
                  borderBottom: "1px solid #e2e8f0",
                  fontWeight: "700",
                  color: "#374151",
                  fontSize: "14px"
                }}>
                  <div>Student</div>
                  <div>Course</div>
                  <div>Institution</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>

                {/* Table Body */}
                <div>
                  {applications.map((app, index) => (
                    <div
                      key={app.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1.5fr 1.5fr 1fr 1fr",
                        gap: "16px",
                        padding: "20px 24px",
                        backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc",
                        borderBottom: index === applications.length - 1 ? "none" : "1px solid #e2e8f0",
                        alignItems: "center",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#f1f5f9";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f8fafc";
                      }}
                    >
                      {/* Student Name */}
                      <div>
                        <div style={{ fontWeight: "600", color: "#1e293b", marginBottom: "4px" }}>
                          {app.studentName || "Unknown Student"}
                        </div>
                        {app.studentEmail && (
                          <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>
                            📧 {app.studentEmail}
                          </div>
                        )}
                      </div>

                      {/* Course */}
                      <div style={{ fontWeight: "500", color: "#374151" }}>
                        {app.courseName || "N/A"}
                      </div>

                      {/* Institution */}
                      <div style={{ fontWeight: "500", color: "#374151" }}>
                        {app.institutionName || "N/A"}
                      </div>

                      {/* Status */}
                      <div>
                        <span style={{
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          background: 
                            app.status === "admitted" ? "#dcfce7" :
                            "pending" ? "#fef3c7" : "#f3f4f6",
                          color:
                            app.status === "admitted" ? "#166534" :
                            "pending" ? "#92400e" : "#6b7280"
                        }}>
                          {app.status || "pending"}
                        </span>
                      </div>

                      {/* Action */}
                      <div>
                        {app.status !== "admitted" && (
                          <button
                            onClick={() => {
                              if (window.confirm(`Admit ${app.studentName || 'this student'} to ${app.courseName || 'the selected course'}?`)) {
                                admitApplication(app.id);
                              }
                            }}
                            style={{
                              padding: "10px 16px",
                              background: "linear-gradient(135deg, #10b981, #34d399)",
                              color: "white",
                              border: "none",
                              borderRadius: "10px",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              width: "100%",
                              justifyContent: "center"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                              e.currentTarget.style.boxShadow = "0 6px 18px rgba(16, 185, 129, 0.4)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.3)";
                            }}
                          >
                            <span>✅</span>
                            Admit
                          </button>
                        )}
                        {app.status === "admitted" && (
                          <span style={{
                            padding: "8px 12px",
                            borderRadius: "10px",
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#10b981",
                            background: "#dcfce7",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            justifyContent: "center"
                          }}>
                            <span>🎉</span>
                            Admitted
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "32px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}>
            <h4 style={{ 
              fontSize: "18px", 
              fontWeight: "600", 
              color: "#374151",
              marginBottom: "16px",
              textAlign: "center"
            }}>
              Bulk Actions
            </h4>
            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <button
                onClick={() => {
                  if (pendingApplications.length === 0) {
                    alert("No pending applications to admit.");
                    return;
                  }
                  if (window.confirm(`Admit all ${pendingApplications.length} pending applications?`)) {
                    pendingApplications.forEach(app => admitApplication(app.id));
                  }
                }}
                disabled={pendingApplications.length === 0}
                style={{
                  padding: "12px 20px",
                  background: pendingApplications.length > 0 ? 
                    "linear-gradient(135deg, #10b981, #34d399)" : 
                    "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: pendingApplications.length > 0 ? "pointer" : "not-allowed",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: pendingApplications.length > 0 ? "0 4px 12px rgba(16, 185, 129, 0.3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>✅</span>
                Admit All Pending ({pendingApplications.length})
              </button>
              <button
                onClick={() => {
                  if (applications.length === 0) {
                    alert("No applications to export.");
                    return;
                  }
                  alert(`Exporting ${applications.length} applications data...`);
                  // Export functionality would go here
                }}
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
                <span>📊</span>
                Export Applications
              </button>
              <button
                onClick={() => {
                  const admittedCount = admittedApplications.length;
                  if (admittedCount === 0) {
                    alert("No admitted students to notify.");
                    return;
                  }
                  alert(`Sending admission notifications to ${admittedCount} students...`);
                  // Notification functionality would go here
                }}
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>📢</span>
                Notify Admitted
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}