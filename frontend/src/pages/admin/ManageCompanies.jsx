import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function ManageCompanies() {
  const { companies, addCompany, updateCompany, deleteCompany } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return alert("Enter company name");
    addCompany({
      id: `comp_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      industry: industry.trim(),
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    setName("");
    setEmail("");
    setIndustry("");
  };

  const approvedCompanies = companies.filter(c => c.status === "approved");
  const suspendedCompanies = companies.filter(c => c.status === "suspended");
  const pendingCompanies = companies.filter(c => c.status === "pending");

  const getStatusConfig = (status) => {
    switch (status) {
      case "approved":
        return { color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)", icon: "✅", label: "Approved" };
      case "suspended":
        return { color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)", icon: "⏸️", label: "Suspended" };
      default:
        return { color: "#6b7280", bgColor: "rgba(107, 114, 128, 0.1)", icon: "⏳", label: "Pending" };
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
              🏢
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
              Manage Companies
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Oversee company registrations and manage their platform access
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Left Column - Add Company & Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Add Company Card */}
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
                  <span>➕</span> Register New Company
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", zIndex: "2" }}>
                  {[
                    { 
                      label: "Company Name", 
                      value: name, 
                      onChange: (e) => setName(e.target.value),
                      placeholder: "Enter company name",
                      icon: "🏢"
                    },
                    { 
                      label: "Email", 
                      value: email, 
                      onChange: (e) => setEmail(e.target.value),
                      placeholder: "company@email.com",
                      icon: "📧"
                    },
                    { 
                      label: "Industry", 
                      value: industry, 
                      onChange: (e) => setIndustry(e.target.value),
                      placeholder: "e.g., Technology, Healthcare",
                      icon: "🏭"
                    }
                  ].map((field, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ 
                        fontWeight: "600", 
                        color: "#374151",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}>
                        <span>{field.icon}</span> {field.label}
                      </label>
                      <input
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={field.placeholder}
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
                  ))}

                  <button
                    onClick={handleAdd}
                    disabled={!name.trim()}
                    style={{
                      padding: "16px 24px",
                      borderRadius: "12px",
                      background: name.trim() ? 
                        "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                        "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                      color: "white",
                      border: "none",
                      cursor: name.trim() ? "pointer" : "not-allowed",
                      fontWeight: 600,
                      fontSize: "16px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: name.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                      marginTop: "16px"
                    }}
                    onMouseOver={e => name.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseOut={e => name.trim() && (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <span>🚀</span>
                    Register Company
                  </button>
                </div>
              </div>

              {/* System Reports Card */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  padding: "32px",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)"
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
                  <span>📊</span> System Reports
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Total Companies", value: companies.length, icon: "🏢", color: "#4facfe" },
                    { label: "Approved", value: approvedCompanies.length, icon: "✅", color: "#10b981" },
                    { label: "Pending", value: pendingCompanies.length, icon: "⏳", color: "#6b7280" },
                    { label: "Suspended", value: suspendedCompanies.length, icon: "⏸️", color: "#f59e0b" }
                  ].map((stat, index) => (
                    <div key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      background: "white"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ fontSize: "20px", color: stat.color }}>{stat.icon}</div>
                        <span style={{ fontWeight: "600", color: "#374151" }}>{stat.label}</span>
                      </div>
                      <span style={{ 
                        fontSize: "18px", 
                        fontWeight: "700", 
                        color: stat.color 
                      }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Companies List */}
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
                <span>📋</span> Registered Companies
              </h3>

              {companies.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>🏢</div>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500",
                    margin: "0"
                  }}>
                    No companies registered yet
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {companies.map((company) => {
                    const statusConfig = getStatusConfig(company.status);
                    
                    return (
                      <div
                        key={company.id}
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
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                          <div>
                            <h4 style={{
                              fontSize: "16px",
                              fontWeight: "700",
                              color: "#1e293b",
                              marginBottom: "4px"
                            }}>
                              {company.name}
                            </h4>
                            {company.industry && (
                              <p style={{
                                fontSize: "14px",
                                color: "#64748b",
                                fontWeight: "500",
                                margin: "0"
                              }}>
                                {company.industry}
                              </p>
                            )}
                          </div>
                          <div style={{
                            background: statusConfig.bgColor,
                            color: statusConfig.color,
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            border: `1px solid ${statusConfig.color}30`
                          }}>
                            {statusConfig.icon}
                            {statusConfig.label}
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          <button
                            onClick={() => updateCompany(company.id, { status: "approved" })}
                            style={{
                              padding: "8px 16px",
                              borderRadius: "8px",
                              background: "linear-gradient(135deg, #10b981, #34d399)",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                          >
                            ✅ Approve
                          </button>
                          <button
                            onClick={() => updateCompany(company.id, { status: "suspended" })}
                            style={{
                              padding: "8px 16px",
                              borderRadius: "8px",
                              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                          >
                            ⏸️ Suspend
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete ${company.name}?`)) {
                                deleteCompany(company.id);
                              }
                            }}
                            style={{
                              padding: "8px 16px",
                              borderRadius: "8px",
                              background: "linear-gradient(135deg, #ef4444, #f87171)",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}