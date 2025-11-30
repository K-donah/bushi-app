// src/pages/student/AdmissionsResults.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function AdmissionsResults() {
  const { applications } = useAppData();
  const { user } = useAuth();

  const studentApps = applications.filter(a => a.studentId === user.id.toString());

  const getStatusConfig = (status) => {
    const configs = {
      admitted: { 
        color: "#059669", 
        bgColor: "rgba(5, 150, 105, 0.08)", 
        icon: "🏆", 
        label: "Admitted",
        gradient: "linear-gradient(135deg, #059669, #10b981)"
      },
      rejected: { 
        color: "#dc2626", 
        bgColor: "rgba(220, 38, 38, 0.08)", 
        icon: "📋", 
        label: "Not Admitted",
        gradient: "linear-gradient(135deg, #dc2626, #ef4444)"
      },
      pending: { 
        color: "#d97706", 
        bgColor: "rgba(217, 119, 6, 0.08)", 
        icon: "⏳", 
        label: "Under Review",
        gradient: "linear-gradient(135deg, #d97706, #f59e0b)"
      }
    };
    return configs[status] || configs.pending;
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#f8fafc",
      padding: "2rem"
    },
    content: {
      maxWidth: "1000px",
      margin: "0 auto"
    },
    headerCard: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(16px)",
      padding: "3rem 2rem",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      marginBottom: "2rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    },
    headerIcon: {
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      margin: "0 auto 1.5rem",
      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 700,
      background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "0.75rem",
      letterSpacing: "-0.025em"
    },
    subtitle: {
      fontSize: "1.125rem",
      color: "#94a3b8",
      fontWeight: 400,
      lineHeight: 1.6,
      maxWidth: "500px",
      margin: "0 auto"
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
      marginBottom: "2rem"
    },
    statCard: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(16px)",
      padding: "2rem 1.5rem",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      textAlign: "center",
      transition: "all 0.3s ease",
      position: "relative"
    },
    statIcon: {
      fontSize: "2rem",
      marginBottom: "1rem",
      opacity: 0.9
    },
    statValue: {
      fontSize: "2.25rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
      fontFeatureSettings: "'tnum' on, 'lnum' on"
    },
    statLabel: {
      fontSize: "0.875rem",
      color: "#94a3b8",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    },
    applicationsCard: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(16px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      marginBottom: "2rem"
    },
    applicationItem: {
      background: "rgba(255, 255, 255, 0.02)",
      padding: "2rem",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "1.5rem"
    },
    statusIndicator: {
      width: "64px",
      height: "64px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      flexShrink: 0
    },
    applicationDetails: {
      flex: 1
    },
    courseTitle: {
      fontSize: "1.375rem",
      fontWeight: 600,
      marginBottom: "0.75rem",
      color: "#f8fafc",
      lineHeight: 1.3
    },
    metaInfo: {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      marginBottom: "0.5rem"
    },
    metaItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.875rem",
      color: "#94a3b8",
      fontWeight: 500
    },
    statusBadge: {
      padding: "0.625rem 1.25rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "1px solid",
      display: "flex",
      alignItems: "center",
      gap: "0.375rem",
      height: "fit-content"
    },
    emptyState: {
      textAlign: "center",
      padding: "4rem 2rem",
      color: "#64748b"
    },
    emptyIcon: {
      fontSize: "4rem",
      marginBottom: "1.5rem",
      opacity: 0.5
    },
    emptyTitle: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#f8fafc",
      marginBottom: "0.75rem"
    },
    emptyText: {
      fontSize: "1rem",
      color: "#94a3b8",
      fontWeight: 400,
      lineHeight: 1.6,
      maxWidth: "400px",
      margin: "0 auto"
    },
    helpSection: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(16px)",
      padding: "2.5rem",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)"
    },
    helpTitle: {
      fontSize: "1.375rem",
      fontWeight: 600,
      marginBottom: "2rem",
      color: "#f8fafc",
      display: "flex",
      alignItems: "center",
      gap: "1rem"
    },
    helpGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem"
    },
    helpItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem"
    },
    helpIcon: {
      fontSize: "1.25rem",
      flexShrink: 0,
      marginTop: "0.125rem"
    },
    helpContent: {
      flex: 1
    },
    helpStatus: {
      fontSize: "1rem",
      fontWeight: 600,
      marginBottom: "0.375rem",
      color: "#f8fafc"
    },
    helpDesc: {
      fontSize: "0.875rem",
      color: "#94a3b8",
      lineHeight: 1.5
    }
  };

  return (
    <>
      <Navbar />
      <main style={styles.container}>
        <div style={styles.content}>
          {/* Header Section */}
          <div style={styles.headerCard}>
            <div style={styles.headerIcon}>🎓</div>
            <h1 style={styles.title}>Admission Results</h1>
            <p style={styles.subtitle}>
              Track your application progress and admission decisions
            </p>
          </div>

          {/* Statistics Overview */}
          {studentApps.length > 0 && (
            <div style={styles.statsGrid}>
              {[
                { 
                  key: "pending", 
                  icon: "⏳", 
                  color: "#d97706",
                  label: "UNDER REVIEW",
                  count: studentApps.filter(a => a.status === "pending").length
                },
                { 
                  key: "admitted", 
                  icon: "🏆", 
                  color: "#059669",
                  label: "ADMITTED",
                  count: studentApps.filter(a => a.status === "admitted").length
                },
                { 
                  key: "rejected", 
                  icon: "📋", 
                  color: "#dc2626",
                  label: "NOT ADMITTED",
                  count: studentApps.filter(a => a.status === "rejected").length
                },
                { 
                  key: "total", 
                  icon: "📊", 
                  color: "#2563eb",
                  label: "TOTAL APPLICATIONS",
                  count: studentApps.length
                }
              ].map((stat) => (
                <div
                  key={stat.key}
                  style={{
                    ...styles.statCard,
                    background: `linear-gradient(135deg, ${stat.color}08, ${stat.color}02)`,
                    borderColor: `${stat.color}15`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = `${stat.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = `${stat.color}15`;
                  }}
                >
                  <div style={styles.statIcon}>{stat.icon}</div>
                  <div style={{...styles.statValue, color: stat.color}}>
                    {stat.count}
                  </div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Applications List */}
          <div style={styles.applicationsCard}>
            {studentApps.length === 0 ? (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>📭</div>
                <h3 style={styles.emptyTitle}>No Applications Submitted</h3>
                <p style={styles.emptyText}>
                  Begin your academic journey by submitting course applications. 
                  Your admission decisions will appear here once available.
                </p>
              </div>
            ) : (
              studentApps.map((app) => {
                const statusConfig = getStatusConfig(app.status);
                return (
                  <div
                    key={app.id}
                    style={{
                      ...styles.applicationItem,
                      background: `linear-gradient(135deg, ${statusConfig.color}05, ${statusConfig.color}02)`,
                      borderBottomColor: "rgba(255, 255, 255, 0.05)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${statusConfig.color}08, ${statusConfig.color}04)`;
                      e.currentTarget.style.transform = "translateX(8px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${statusConfig.color}05, ${statusConfig.color}02)`;
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {/* Status Indicator */}
                    <div style={{
                      ...styles.statusIndicator,
                      background: statusConfig.gradient
                    }}>
                      {statusConfig.icon}
                    </div>

                    {/* Application Details */}
                    <div style={styles.applicationDetails}>
                      <h3 style={styles.courseTitle}>{app.courseTitle}</h3>
                      <div style={styles.metaInfo}>
                        <div style={styles.metaItem}>
                          <span>🏫</span>
                          {app.institutionName}
                        </div>
                        <div style={styles.metaItem}>
                          <span>📅</span>
                          Applied {new Date(app.appliedDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div style={styles.metaItem}>
                          <span>🆔</span>
                          Ref: {app.id.slice(0, 8).toUpperCase()}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div style={{
                      ...styles.statusBadge,
                      background: statusConfig.gradient,
                      borderColor: statusConfig.color,
                      color: "#ffffff"
                    }}>
                      {statusConfig.icon}
                      {statusConfig.label}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Help Section */}
          <div style={styles.helpSection}>
            <h3 style={styles.helpTitle}>
              <span style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>ℹ️</span>
              Understanding Application Status
            </h3>
            <div style={styles.helpGrid}>
              {[
                { 
                  icon: "⏳", 
                  status: "Under Review", 
                  desc: "Your application is currently being evaluated by the admissions committee" 
                },
                { 
                  icon: "🏆", 
                  status: "Admitted", 
                  desc: "Congratulations! You have been accepted into the program" 
                },
                { 
                  icon: "📋", 
                  status: "Not Admitted", 
                  desc: "Your application was not successful this admission cycle" 
                }
              ].map((item, index) => (
                <div key={index} style={styles.helpItem}>
                  <div style={styles.helpIcon}>{item.icon}</div>
                  <div style={styles.helpContent}>
                    <div style={styles.helpStatus}>{item.status}</div>
                    <div style={styles.helpDesc}>{item.desc}</div>
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