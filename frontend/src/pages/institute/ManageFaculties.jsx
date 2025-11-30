import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function ManageFaculties() {
  const { faculties, addFaculty, deleteFaculty } = useAppData();
  const { user } = useAuth();
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return alert("Enter faculty name");
    addFaculty({
      id: `fac_${Date.now()}`,
      name: name.trim(),
      institutionId: user.id.toString()
    });
    setName("");
  };

  const myFaculties = faculties.filter(f => f.institutionId === user.id.toString());

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
              🏛️
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
              Manage Faculties
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Create and manage academic faculties for your institution
            </p>
          </div>

          {/* Add Faculty Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              marginBottom: "32px",
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
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span>➕</span> Add New Faculty
            </h3>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr auto", 
              gap: "16px",
              alignItems: "end",
              position: "relative",
              zIndex: "2"
            }}>
              {/* Faculty Name Input */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ 
                  fontWeight: "600", 
                  color: "#374151",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <span>📝</span> Faculty Name
                </label>
                <input
                  placeholder="Enter faculty name (e.g., Faculty of Engineering)"
                  value={name}
                  onChange={e => setName(e.target.value)}
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

              {/* Add Button */}
              <button
                onClick={handleAdd}
                disabled={!name.trim()}
                style={{
                  padding: "14px 24px",
                  borderRadius: "12px",
                  background: name.trim() ? 
                    "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                    "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                  color: "white",
                  border: "none",
                  cursor: name.trim() ? "pointer" : "not-allowed",
                  fontWeight: 600,
                  fontSize: "15px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: name.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "fit-content",
                  whiteSpace: "nowrap"
                }}
                onMouseOver={e => name.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseOut={e => name.trim() && (e.currentTarget.style.transform = "translateY(0)")}
              >
                <span>🏛️</span>
                Add Faculty
              </button>
            </div>
          </div>

          {/* Faculties List */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              overflow: "hidden"
            }}
          >
            <div style={{ padding: "8px" }}>
              {myFaculties.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "60px 32px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>🏛️</div>
                  <h3 style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#1e293b",
                    marginBottom: "12px"
                  }}>
                    No Faculties Yet
                  </h3>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500"
                  }}>
                    Start by adding your first faculty above
                  </p>
                </div>
              ) : (
                myFaculties.map((faculty, index) => (
                  <div
                    key={faculty.id}
                    style={{
                      background: "white",
                      padding: "24px",
                      borderRadius: "16px",
                      margin: "8px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
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
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #a78bfa20, #c4b5fd40)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        border: "2px solid #a78bfa30"
                      }}>
                        🏛️
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1e293b",
                          marginBottom: "4px"
                        }}>
                          {faculty.name}
                        </h4>
                        <div style={{
                          fontSize: "14px",
                          color: "#64748b",
                          fontWeight: "500"
                        }}>
                          Faculty ID: {faculty.id}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${faculty.name}"? This will also remove all associated courses.`)) {
                          deleteFaculty(faculty.id);
                        }
                      }}
                      style={{
                        padding: "10px 16px",
                        background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 6px 18px rgba(255, 107, 107, 0.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.3)";
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Info Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "24px",
            border: "1px solid rgba(255,255,255,0.3)",
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
                About Faculties
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
              <li>Faculties help organize your institution's academic structure</li>
              <li>Each faculty can contain multiple courses and programs</li>
              <li>Students will see faculties when browsing your institution</li>
              <li>Delete a faculty only when you're sure - this removes all associated courses</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}