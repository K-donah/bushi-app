import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";

export default function CompanySettings() {
  const { user } = useAuth();

  const links = [
    { to: "/company/post-job", label: "Post Job", icon: "📝" },
    { to: "/company/applicants", label: "View Applicants", icon: "👥" },
    { to: "/company/profile", label: "Update Profile", icon: "🏢" },
    { to: "/company/settings", label: "Settings", icon: "⚙️" },
  ];

  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailDigest, setEmailDigest] = useState(true);
  const [autoArchive, setAutoArchive] = useState(false);

  const handlePasswordChange = () => alert("Password updated successfully! 🔐");
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your company account permanently? This action cannot be undone.")) {
      alert("Account deleted");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Sidebar links={links} />

        <main style={{ 
          flex: 1, 
          padding: "32px", 
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          minHeight: "100vh"
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Header Section */}
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "32px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                marginBottom: "32px",
                color: "white",
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
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%"
              }}></div>
              <div style={{
                width: "80px",
                height: "80px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "32px",
                backdropFilter: "blur(10px)"
              }}>
                ⚙️
              </div>
              <h2 style={{ 
                fontSize: "32px", 
                fontWeight: 800,
                marginBottom: "12px",
                position: "relative",
                zIndex: "2"
              }}>
                Company Settings
              </h2>
              <p style={{ 
                fontSize: "16px", 
                opacity: "0.9",
                fontWeight: "500",
                position: "relative",
                zIndex: "2"
              }}>
                Manage your company's security and notification preferences
              </p>
            </div>

            {/* Settings Cards Container */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Notification Settings Card */}
              <div
                style={{
                  background: "white",
                  padding: "32px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid #e2e8f0"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
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
                    📧
                  </div>
                  <h3 style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#1e293b"
                  }}>
                    Notifications
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    {
                      label: "Job Application Alerts",
                      description: "Receive instant notifications when candidates apply",
                      checked: notifications,
                      onChange: () => setNotifications(!notifications),
                      icon: "📨"
                    },
                    {
                      label: "Weekly Email Digest",
                      description: "Get weekly summaries of application activity",
                      checked: emailDigest,
                      onChange: () => setEmailDigest(!emailDigest),
                      icon: "📊"
                    },
                    {
                      label: "Auto-Archive Old Applications",
                      description: "Automatically archive applications older than 6 months",
                      checked: autoArchive,
                      onChange: () => setAutoArchive(!autoArchive),
                      icon: "🗃️"
                    }
                  ].map((setting, index) => (
                    <div key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(79, 172, 254, 0.05)";
                      e.currentTarget.style.borderColor = "#4facfe";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div style={{ fontSize: "20px" }}>{setting.icon}</div>
                        <div>
                          <div style={{ 
                            fontSize: "16px", 
                            fontWeight: "600", 
                            color: "#1e293b",
                            marginBottom: "4px"
                          }}>
                            {setting.label}
                          </div>
                          <div style={{ 
                            fontSize: "14px", 
                            color: "#64748b",
                            fontWeight: "500"
                          }}>
                            {setting.description}
                          </div>
                        </div>
                      </div>
                      <label style={{ 
                        position: "relative", 
                        display: "inline-block", 
                        width: "52px", 
                        height: "28px" 
                      }}>
                        <input
                          type="checkbox"
                          checked={setting.checked}
                          onChange={setting.onChange}
                          style={{ 
                            opacity: 0, 
                            width: 0, 
                            height: 0 
                          }}
                        />
                        <span style={{
                          position: "absolute",
                          cursor: "pointer",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: setting.checked ? "#4facfe" : "#cbd5e1",
                          transition: "0.4s",
                          borderRadius: "34px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                        }}>
                          <span style={{
                            position: "absolute",
                            content: '""',
                            height: "20px",
                            width: "20px",
                            left: setting.checked ? "24px" : "4px",
                            bottom: "4px",
                            backgroundColor: "white",
                            transition: "0.4s",
                            borderRadius: "50%",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                          }} />
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings Card */}
              <div
                style={{
                  background: "white",
                  padding: "32px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid #e2e8f0"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, #ff6b6b20, #ff8e5340)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    border: "2px solid #ff6b6b30"
                  }}>
                    🔒
                  </div>
                  <h3 style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#1e293b"
                  }}>
                    Security
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Two Factor Authentication */}
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ fontSize: "20px" }}>🔐</div>
                      <div>
                        <div style={{ 
                          fontSize: "16px", 
                          fontWeight: "600", 
                          color: "#1e293b",
                          marginBottom: "4px"
                        }}>
                          Two-Factor Authentication
                        </div>
                        <div style={{ 
                          fontSize: "14px", 
                          color: "#64748b",
                          fontWeight: "500"
                        }}>
                          Add an extra layer of security to your account
                        </div>
                      </div>
                    </div>
                    <label style={{ position: "relative", display: "inline-block", width: "52px", height: "28px" }}>
                      <input
                        type="checkbox"
                        checked={twoFactor}
                        onChange={() => setTwoFactor(!twoFactor)}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: twoFactor ? "#4ade80" : "#cbd5e1",
                        transition: "0.4s",
                        borderRadius: "34px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}>
                        <span style={{
                          position: "absolute",
                          content: '""',
                          height: "20px",
                          width: "20px",
                          left: twoFactor ? "24px" : "4px",
                          bottom: "4px",
                          backgroundColor: "white",
                          transition: "0.4s",
                          borderRadius: "50%",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                        }} />
                      </span>
                    </label>
                  </div>

                  {/* Change Password Button */}
                  <button
                    onClick={handlePasswordChange}
                    style={{
                      padding: "16px 24px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "15px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
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
                    <span>🔄</span>
                    Change Password
                  </button>
                </div>
              </div>

              {/* Danger Zone Card */}
              <div
                style={{
                  background: "white",
                  padding: "32px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid #fecaca",
                  background: "linear-gradient(135deg, #fef2f2, #fecaca10)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, #ef444420, #dc262640)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    border: "2px solid #ef444430"
                  }}>
                    ⚠️
                  </div>
                  <h3 style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#dc2626"
                  }}>
                    Danger Zone
                  </h3>
                </div>

                <div style={{ 
                  padding: "20px",
                  background: "rgba(239, 68, 68, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(239, 68, 68, 0.2)"
                }}>
                  <p style={{ 
                    fontSize: "14px", 
                    color: "#7f1d1d",
                    fontWeight: "500",
                    marginBottom: "16px"
                  }}>
                    Once you delete your company account, there is no going back. 
                    All your job postings, applicant data, and company information will be permanently lost.
                  </p>
                  <button
                    onClick={handleDeleteAccount}
                    style={{
                      padding: "14px 24px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #ef4444, #dc2626)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(239, 68, 68, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(239, 68, 68, 0.6)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(239, 68, 68, 0.4)";
                    }}
                  >
                    <span>🗑️</span>
                    Delete Company Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}