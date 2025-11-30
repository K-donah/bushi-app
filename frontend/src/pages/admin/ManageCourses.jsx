import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function ManageCourses() {
  const { courses, addCourse, deleteCourse, faculties, institutions } = useAppData();
  const [title, setTitle] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title || !facultyId) return alert("Select faculty and enter course title");
    const fac = faculties.find(f => f.id === facultyId);
    const instId = fac?.institutionId || null;
    const c = {
      id: `course_${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      facultyId,
      facultyName: fac?.name || "",
      institutionId: instId,
      createdAt: new Date().toISOString()
    };
    addCourse(c);
    setTitle("");
    setFacultyId("");
    setDescription("");
  };

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
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            <h2 style={{ 
              fontSize: "32px", 
              fontWeight: 800,
              marginBottom: "12px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Manage Courses
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Create and manage courses across all institutions and faculties
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Add Course Card */}
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
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span>➕</span> Add New Course
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: "2" }}>
                {/* Faculty Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>🏛️</span> Select Faculty
                  </label>
                  <select
                    value={facultyId}
                    onChange={(e) => setFacultyId(e.target.value)}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  >
                    <option value="">Select Faculty</option>
                    {faculties.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.name} — {institutions.find((i) => i.id === f.institutionId)?.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Title */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>📖</span> Course Title
                  </label>
                  <input
                    placeholder="Enter course title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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

                {/* Course Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>📝</span> Course Description
                  </label>
                  <textarea
                    placeholder="Brief description of the course..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      backgroundColor: "white",
                      fontSize: "15px",
                      minHeight: "80px",
                      resize: "vertical",
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
                  disabled={!title.trim() || !facultyId}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "12px",
                    background: title.trim() && facultyId ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    cursor: title.trim() && facultyId ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: title.trim() && facultyId ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                    marginTop: "16px"
                  }}
                  onMouseOver={e => title.trim() && facultyId && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseOut={e => title.trim() && facultyId && (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span>🚀</span>
                  Add Course
                </button>
              </div>
            </div>

            {/* Courses List */}
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
                <span>📋</span> Course Catalog
                <span style={{
                  background: "#4facfe",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  {courses.length}
                </span>
              </h3>

              {courses.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>📚</div>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500",
                    margin: "0"
                  }}>
                    No courses created yet. Add your first course!
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {courses.map((course) => {
                    const institution = institutions.find(i => i.id === course.institutionId);
                    
                    return (
                      <div
                        key={course.id}
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
                          <div style={{ flex: "1" }}>
                            <h4 style={{
                              fontSize: "16px",
                              fontWeight: "700",
                              color: "#1e293b",
                              marginBottom: "8px"
                            }}>
                              {course.title}
                            </h4>
                            {course.description && (
                              <p style={{
                                fontSize: "14px",
                                color: "#64748b",
                                fontWeight: "500",
                                marginBottom: "8px",
                                lineHeight: "1.4"
                              }}>
                                {course.description}
                              </p>
                            )}
                            <div style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              fontSize: "12px",
                              color: "#94a3b8",
                              fontWeight: "600"
                            }}>
                              <span>🏛️ {course.facultyName}</span>
                              <span>•</span>
                              <span>🏫 {institution?.name || "Unknown Institution"}</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete course "${course.title}"?`)) {
                                deleteCourse(course.id);
                              }
                            }}
                            style={{
                              padding: "8px 16px",
                              background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                              color: "white",
                              border: "none",
                              borderRadius: "10px",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: "0"
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
                            <span>🗑️</span>
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Stats Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "32px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px"
            }}>
              <div>
                <div style={{ fontSize: "24px", fontWeight: "800", color: "#4facfe", marginBottom: "4px" }}>
                  {courses.length}
                </div>
                <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                  Total Courses
                </div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: "800", color: "#ff6b6b", marginBottom: "4px" }}>
                  {new Set(courses.map(c => c.institutionId)).size}
                </div>
                <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                  Institutions
                </div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: "800", color: "#4ade80", marginBottom: "4px" }}>
                  {new Set(courses.map(c => c.facultyId)).size}
                </div>
                <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                  Faculties
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}