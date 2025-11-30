import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";

export default function InstituteProfile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem(`institute_profile_${user?.id}`)) || {
          name: user?.name || "",
          email: "",
          phone: "",
          address: "",
          description: "",
          logo: ""
        }
      );
    } catch {
      return {
        name: user?.name || "",
        email: "",
        phone: "",
        address: "",
        description: "",
        logo: ""
      };
    }
  });

  useEffect(() => {
    if (user?.id) localStorage.setItem(`institute_profile_${user.id}`, JSON.stringify(profile));
  }, [profile, user]);

  const handleLogo = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setProfile(p => ({ ...p, logo: reader.result }));
    reader.readAsDataURL(f);
  };

  const sidebarLinks = [
    { to: "/institute/profile", label: "Manage Profile", icon: "👤" },
    { to: "/institute/faculties", label: "Faculties", icon: "🏛️" },
    { to: "/institute/courses", label: "Courses", icon: "📚" },
    { to: "/institute/applications", label: "Student Applications", icon: "📝" },
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Sidebar links={sidebarLinks} />
        <main style={{ 
          flex: 1, 
          padding: 32, 
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
                color: "white",
                marginBottom: "32px",
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
                🏫
              </div>
              <h2 style={{ 
                fontSize: "32px", 
                fontWeight: 800,
                marginBottom: "12px",
                position: "relative",
                zIndex: "2"
              }}>
                Institute Profile
              </h2>
              <p style={{ 
                fontSize: "16px", 
                opacity: "0.9",
                fontWeight: "500",
                position: "relative",
                zIndex: "2"
              }}>
                Manage your institution's information and branding
              </p>
            </div>

            {/* Profile Form Card */}
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0",
                marginBottom: "24px"
              }}
            >
              <div style={{ display: "grid", gap: "24px" }}>
                
                {/* Logo Section */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid #e2e8f0"
                }}>
                  <div style={{ position: "relative" }}>
                    {profile.logo ? (
                      <img
                        src={profile.logo}
                        alt="Logo"
                        style={{ 
                          width: "120px", 
                          height: "120px", 
                          borderRadius: "20px", 
                          objectFit: "cover",
                          border: "3px solid #e2e8f0"
                        }}
                      />
                    ) : (
                      <div style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                        color: "#4facfe",
                        border: "3px dashed #cbd5e1"
                      }}>
                        🏫
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "18px", 
                      fontWeight: "700", 
                      color: "#1e293b",
                      marginBottom: "8px"
                    }}>
                      Institution Logo
                    </h3>
                    <p style={{ 
                      fontSize: "14px", 
                      color: "#64748b",
                      marginBottom: "16px"
                    }}>
                      Upload your institution's logo for branding
                    </p>
                    <label
                      style={{
                        display: "inline-block",
                        padding: "12px 20px",
                        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                        color: "white",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)"
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
                      📁 Choose Logo
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogo} 
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>

                {/* Form Fields */}
                {[
                  { 
                    label: "Institution Name", 
                    value: profile.name, 
                    onChange: (e) => setProfile(p => ({ ...p, name: e.target.value })),
                    icon: "🏫",
                    type: "text"
                  },
                  { 
                    label: "Email", 
                    value: profile.email, 
                    onChange: (e) => setProfile(p => ({ ...p, email: e.target.value })),
                    icon: "📧",
                    type: "email"
                  },
                  { 
                    label: "Phone", 
                    value: profile.phone, 
                    onChange: (e) => setProfile(p => ({ ...p, phone: e.target.value })),
                    icon: "📞",
                    type: "tel"
                  },
                  { 
                    label: "Address", 
                    value: profile.address, 
                    onChange: (e) => setProfile(p => ({ ...p, address: e.target.value })),
                    icon: "📍",
                    type: "text"
                  }
                ].map((field, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ 
                      fontWeight: "700", 
                      color: "#1e293b",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span>{field.icon}</span> {field.label}
                    </label>
                    <input
                      value={field.value}
                      onChange={field.onChange}
                      type={field.type}
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "16px",
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                        fontWeight: "500"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                ))}

                {/* Description Field */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "700", 
                    color: "#1e293b",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span>📝</span> Description
                  </label>
                  <textarea
                    value={profile.description}
                    onChange={e => setProfile(p => ({ ...p, description: e.target.value }))}
                    rows={4}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      fontSize: "16px",
                      backgroundColor: "white",
                      resize: "vertical",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    placeholder="Describe your institution's mission, values, and offerings..."
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={() => alert("Profile saved successfully! 🎉")}
                  style={{
                    padding: "18px 32px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "16px",
                    width: "100%",
                    maxWidth: "300px"
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
                  <span>💾</span>
                  Save Profile
                </button>
              </div>
            </div>

            {/* Tips Card */}
            <div style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
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
                  Profile Tips
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
                <li>Keep your institution information up to date for students</li>
                <li>Use a high-quality logo for better branding</li>
                <li>Write a compelling description to attract students</li>
                <li>Ensure contact information is accurate</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}