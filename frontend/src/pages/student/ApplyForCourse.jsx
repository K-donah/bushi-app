// src/pages/student/ApplyForCourse.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function ApplyForCourse() {
  const { courses, applyForCourse } = useAppData();
  const { user } = useAuth();
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [applicationText, setApplicationText] = useState("");

  const availableCourses = courses.filter(
    (course) => course.institutionId && course.facultyName
  );

  const handleApply = () => {
    const selectedCourse = courses.find((c) => c.id === selectedCourseId);
    if (!selectedCourse) return;

    applyForCourse({
      id: `app_${Date.now()}`,
      studentId: user.id.toString(),
      studentName: user.name,
      courseId: selectedCourseId,
      courseTitle: selectedCourse.title,
      facultyId: selectedCourse.facultyId || "",
      facultyName: selectedCourse.facultyName,
      institutionId: selectedCourse.institutionId,
      institutionName: selectedCourse.institutionName,
      applicationText: applicationText.trim(),
      status: "pending",
      appliedDate: new Date().toISOString(),
    });

    setSelectedCourseId("");
    setApplicationText("");
    alert("Application submitted successfully!");
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
              Course Application
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Apply for your desired courses and start your educational journey
            </p>
          </div>

          {/* Application Form Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "80px",
              height: "80px",
              background: "rgba(74, 222, 128, 0.1)",
              borderRadius: "50%"
            }}></div>

            {availableCourses.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "40px 20px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>📭</div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  No Courses Available
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500"
                }}>
                  Check back later for new course offerings
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: "2" }}>
                {/* Course Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <label
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1e293b",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span>🎯</span> Select Course
                  </label>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  >
                    <option value="">-- Choose a Course --</option>
                    {availableCourses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} — {c.facultyName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selected Course Info */}
                {selectedCourseId && (
                  <div style={{
                    background: "rgba(79, 172, 254, 0.05)",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(79, 172, 254, 0.2)"
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
                        background: "rgba(79, 172, 254, 0.2)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        color: "#4facfe"
                      }}>
                        📖
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1e293b",
                          margin: "0 0 4px 0"
                        }}>
                          {courses.find(c => c.id === selectedCourseId)?.title}
                        </h4>
                        <p style={{
                          fontSize: "14px",
                          color: "#64748b",
                          fontWeight: "500",
                          margin: "0"
                        }}>
                          {courses.find(c => c.id === selectedCourseId)?.facultyName}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Application Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <label
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1e293b",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span>💭</span> Your Motivation
                  </label>
                  <textarea
                    placeholder="Tell us why you're interested in this course and what you hope to achieve..."
                    value={applicationText}
                    onChange={(e) => setApplicationText(e.target.value)}
                    style={{
                      width: "100%",
                      minHeight: "160px",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      fontWeight: "500",
                      resize: "vertical"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                  <p style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                    fontWeight: "500",
                    margin: "4px 0 0 0"
                  }}>
                    Share your passion and goals for this course
                  </p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApply}
                  disabled={!selectedCourseId || !applicationText.trim()}
                  style={{
                    padding: "18px 32px",
                    borderRadius: "16px",
                    background: selectedCourseId && applicationText.trim() ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: 700,
                    border: "none",
                    cursor: selectedCourseId && applicationText.trim() ? "pointer" : "not-allowed",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: selectedCourseId && applicationText.trim() ? 
                      "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "16px"
                  }}
                  onMouseOver={e => selectedCourseId && applicationText.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseOut={e => selectedCourseId && applicationText.trim() && (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span>🚀</span>
                  Submit Application
                  <span>📨</span>
                </button>
              </div>
            )}
          </div>

          {/* Application Tips */}
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
                Application Tips
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
              <li>Be specific about your interests and career goals</li>
              <li>Highlight relevant experience or background</li>
              <li>Explain how this course aligns with your aspirations</li>
              <li>Keep it concise but meaningful</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}