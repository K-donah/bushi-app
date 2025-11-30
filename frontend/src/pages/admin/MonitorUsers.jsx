import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function MonitorUsers() {
  const { users = [], updateUserStatus, deleteUser } = useAppData();

  const activeUsers = users.filter(user => user.status === "active").length;
  const pendingUsers = users.filter(user => user.status === "pending").length;
  const suspendedUsers = users.filter(user => user.status === "suspended").length;

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
              User Management
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Monitor and manage all registered users in the system
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
                {users.length}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Total Users
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
                {activeUsers}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Active Users
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
                {pendingUsers}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Pending Users
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
              <div style={{ fontSize: "32px", fontWeight: "800", color: "#ef4444", marginBottom: "8px" }}>
                {suspendedUsers}
              </div>
              <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                Suspended Users
              </div>
            </div>
          </div>

          {/* Users Table */}
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
              <span>📋</span> User Directory
              <span style={{
                background: "#4facfe",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {users.length}
              </span>
            </h3>

            {users.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "16px", opacity: "0.5" }}>👥</div>
                <h4 style={{ 
                  fontSize: "20px", 
                  color: "#374151",
                  fontWeight: "600",
                  marginBottom: "8px"
                }}>
                  No Users Found
                </h4>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500",
                  margin: "0"
                }}>
                  There are no registered users in the system yet.
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
                  gridTemplateColumns: "2fr 1fr 1fr 2fr",
                  gap: "16px",
                  padding: "20px 24px",
                  backgroundColor: "#f8fafc",
                  borderBottom: "1px solid #e2e8f0",
                  fontWeight: "700",
                  color: "#374151",
                  fontSize: "14px"
                }}>
                  <div>Name</div>
                  <div>Role</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>

                {/* Table Body */}
                <div>
                  {users.map((user, index) => (
                    <div
                      key={user.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 2fr",
                        gap: "16px",
                        padding: "20px 24px",
                        backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc",
                        borderBottom: index === users.length - 1 ? "none" : "1px solid #e2e8f0",
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
                      {/* Name */}
                      <div style={{ fontWeight: "600", color: "#1e293b" }}>
                        {user.name || "Unknown"}
                      </div>

                      {/* Role */}
                      <div style={{ 
                        textTransform: "capitalize",
                        fontWeight: "500",
                        color: "#64748b"
                      }}>
                        {user.role || "N/A"}
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
                            user.status === "active" ? "#dcfce7" :
                            user.status === "suspended" ? "#fef3c7" : "#f3f4f6",
                          color:
                            user.status === "active" ? "#166534" :
                            user.status === "suspended" ? "#92400e" : "#6b7280"
                        }}>
                          {user.status || "pending"}
                        </span>
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {user.status !== "active" && (
                          <button
                            onClick={() => updateUserStatus(user.id, "active")}
                            style={{
                              padding: "8px 16px",
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
                              gap: "4px"
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
                            Activate
                          </button>
                        )}
                        {user.status !== "suspended" && (
                          <button
                            onClick={() => updateUserStatus(user.id, "suspended")}
                            style={{
                              padding: "8px 16px",
                              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                              color: "white",
                              border: "none",
                              borderRadius: "10px",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                              e.currentTarget.style.boxShadow = "0 6px 18px rgba(245, 158, 11, 0.4)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 158, 11, 0.3)";
                            }}
                          >
                            <span>⏸️</span>
                            Suspend
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete user "${user.name || 'Unknown'}"? This action cannot be undone.`)) {
                              deleteUser(user.id);
                            }
                          }}
                          style={{
                            padding: "8px 16px",
                            background: "linear-gradient(135deg, #ef4444, #f87171)",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "12px",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px"
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 6px 18px rgba(239, 68, 68, 0.4)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.3)";
                          }}
                        >
                          <span>🗑️</span>
                          Delete
                        </button>
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
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <h4 style={{ 
              fontSize: "18px", 
              fontWeight: "600", 
              color: "#374151",
              marginBottom: "16px"
            }}>
              Quick Actions
            </h4>
            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <button
                onClick={() => {
                  const pendingUsers = users.filter(u => u.status === "pending");
                  if (pendingUsers.length === 0) {
                    alert("No pending users to activate.");
                    return;
                  }
                  if (window.confirm(`Activate all ${pendingUsers.length} pending users?`)) {
                    pendingUsers.forEach(user => updateUserStatus(user.id, "active"));
                  }
                }}
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>✅</span>
                Activate All Pending
              </button>
              <button
                onClick={() => {
                  if (users.length === 0) {
                    alert("No users to export.");
                    return;
                  }
                  alert(`Exporting ${users.length} users data...`);
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
                Export User Data
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}