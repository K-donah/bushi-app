import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";
import { useAppData } from "../../context/ApplicationContext";

export default function CompanyProfile() {
  const { user, updateUser } = useAuth();
  const { updateCompanyProfile } = useAppData();

  const links = [
    { to: "/company/post-job", label: "Post Job", icon: "📝" },
    { to: "/company/applicants", label: "View Applicants", icon: "👥" },
    { to: "/company/profile", label: "Update Profile", icon: "🏢" },
    { to: "/company/settings", label: "Settings", icon: "⚙️" },
  ];

  const [form, setForm] = useState({
    companyName: user.companyName || "",
    email: user.email || "",
    industry: user.industry || "",
    phone: user.phone || "",
    address: user.address || "",
    description: user.description || "",
    logo: user.logo || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, logo: URL.createObjectURL(files[0]) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    updateCompanyProfile(user.id, form);
    updateUser({ ...user, ...form });
    alert("Profile updated successfully! 🎉");
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Sidebar links={links} />

        <main
          style={{
            flex: 1,
            padding: "32px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            minHeight: "100vh",
          }}
        >
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
                🏢
              </div>
              <h2 style={{ 
                fontSize: "32px", 
                fontWeight: 800,
                marginBottom: "12px",
                position: "relative",
                zIndex: "2"
              }}>
                Company Profile
              </h2>
              <p style={{ 
                fontSize: "16px", 
                opacity: "0.9",
                fontWeight: "500",
                position: "relative",
                zIndex: "2"
              }}>
                Manage your company's information and branding
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
                    {form.logo ? (
                      <img
                        src={form.logo}
                        alt="Company Logo"
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
                        🏢
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
                      Company Logo
                    </h3>
                    <p style={{ 
                      fontSize: "14px", 
                      color: "#64748b",
                      marginBottom: "16px"
                    }}>
                      Upload your company logo for professional branding
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
                      📁 Upload Logo
                      <input 
                        type="file" 
                        name="logo"
                        accept="image/*"
                        onChange={handleChange} 
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>

                {/* Form Fields */}
                {[
                  { 
                    label: "Company Name", 
                    name: "companyName", 
                    value: form.companyName, 
                    icon: "🏢",
                    type: "text"
                  },
                  { 
                    label: "Email", 
                    name: "email", 
                    value: form.email, 
                    icon: "📧",
                    type: "email"
                  },
                  { 
                    label: "Industry", 
                    name: "industry", 
                    value: form.industry, 
                    icon: "🏭",
                    type: "text"
                  },
                  { 
                    label: "Contact Number", 
                    name: "phone", 
                    value: form.phone, 
                    icon: "📞",
                    type: "tel"
                  },
                  { 
                    label: "Address", 
                    name: "address", 
                    value: form.address, 
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
                      name={field.name}
                      type={field.type}
                      value={field.value}
                      onChange={handleChange}
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
                    <span>📝</span> Company Description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
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
                    placeholder="Describe your company's mission, values, and what makes you unique..."
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSave}
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
                  Save Changes
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
                <li>Keep your company information up to date for better candidate engagement</li>
                <li>Use a high-quality logo for professional branding</li>
                <li>Write a compelling description to attract top talent</li>
                <li>Ensure contact information is accurate for candidate inquiries</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}