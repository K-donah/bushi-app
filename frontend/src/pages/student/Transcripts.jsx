// src/pages/student/Transcripts.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useAppData } from "../../context/ApplicationContext";

export default function Transcripts() {
  const { user } = useAuth();
  const { transcripts, uploadTranscript, deleteTranscript } = useAppData();
  const [file, setFile] = useState(null);

  // Filter only this student's transcripts
  const myTranscripts = transcripts.filter((t) => t.studentId === user.id);

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    uploadTranscript(user.id, file);
    alert(`Uploaded: ${file.name}`);
    setFile(null);
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "32px",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
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
              📚
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                marginBottom: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Academic Transcripts
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Upload and manage your academic transcripts and certificates
            </p>
          </div>

          <div style={{ display: "grid", gap: "32px", gridTemplateColumns: "1fr 1fr" }}>
            {/* Upload Section */}
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
              
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "24px",
                  color: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <span>📤</span> Upload New Document
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: "2" }}>
                <div style={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  background: file ? "rgba(79, 172, 254, 0.05)" : "transparent",
                  borderColor: file ? "#4facfe" : "#cbd5e1"
                }}>
                  <div style={{
                    fontSize: "48px",
                    marginBottom: "16px",
                    opacity: "0.7"
                  }}>
                    📄
                  </div>
                  <p style={{ 
                    color: "#64748b", 
                    fontWeight: "500",
                    marginBottom: "16px"
                  }}>
                    {file ? file.name : "Select a file to upload"}
                  </p>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{
                      padding: "12px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      cursor: "pointer",
                      width: "100%",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>

                <button
                  onClick={handleUpload}
                  disabled={!file}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "16px",
                    background: file ? "linear-gradient(135deg, #4facfe, #00f2fe)" : "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "16px",
                    cursor: file ? "pointer" : "not-allowed",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: file ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                  onMouseOver={e => file && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseOut={e => file && (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span>🚀</span>
                  Upload Document
                </button>
              </div>
            </div>

            {/* Documents List */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "32px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "120px",
                height: "120px",
                background: "rgba(74, 222, 128, 0.1)",
                borderRadius: "50%"
              }}></div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "24px",
                  color: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <span>📋</span> Your Documents
              </h3>

              {myTranscripts.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>📭</div>
                  <p style={{ fontWeight: "500", marginBottom: "8px" }}>No documents uploaded yet</p>
                  <p style={{ fontSize: "14px", opacity: "0.7" }}>Upload your first transcript to get started</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: "2" }}>
                  {myTranscripts.map((t) => (
                    <div
                      key={t.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "16px",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
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
                          width: "48px",
                          height: "48px",
                          background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px"
                        }}>
                          📄
                        </div>
                        <div>
                          <div style={{
                            fontWeight: "600",
                            color: "#1e293b",
                            marginBottom: "4px"
                          }}>
                            {t.fileName}
                          </div>
                          <div style={{
                            fontSize: "12px",
                            color: "#64748b",
                            fontWeight: "500"
                          }}>
                            Uploaded {new Date(t.uploadedDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => deleteTranscript(t.id)}
                        style={{
                          padding: "10px 16px",
                          background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          cursor: "pointer",
                          fontWeight: 600,
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
            textAlign: "center",
            marginTop: "32px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}>
            <p style={{ 
              fontSize: "14px", 
              color: "#64748b",
              fontWeight: "500",
              margin: "0"
            }}>
              💡 Supported formats: PDF, JPG, PNG • Max file size: 10MB • All documents are securely stored
            </p>
          </div>
        </div>
      </main>
    </>
  );
}