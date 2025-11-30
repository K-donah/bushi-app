import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function ManageCourses() {
  const { courses, addCourse, deleteCourse, faculties } = useAppData();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [facultyId, setFacultyId] = useState("");

  // Get the institute profile from localStorage
  const instituteProfile =
    JSON.parse(localStorage.getItem(`institute_profile_${user.id}`)) || { name: "" };

  // Only faculties for this institute
  const myFaculties = faculties.filter(f => f.institutionId === user.id.toString());

  // Handle adding a new course
  const handleAdd = () => {
    if (!title || !facultyId) return alert("Fill title and select faculty");

    const fac = faculties.find(f => f.id === facultyId);

    addCourse({
      id: `course_${Date.now()}`,
      title: title.trim(),
      facultyId,
      facultyName: fac?.name || "",
      institutionId: user.id,                     // link course to this institution
      institutionName: instituteProfile.name      // store the institution name
    });

    setTitle("");
    setFacultyId("");
  };

  // Courses for this institution
  const myCourses = courses.filter(c => c.institutionId === user.id.toString());

  return (
    <>
      <Navbar />
      <main style={{ 
        padding: 32, 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif"
      }}>
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
              Create and manage courses for your institution's faculties
            </p>
          </div>

          {/* Add Course Card */}
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
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span>➕</span> Add New Course
            </h3>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 2fr auto", 
              gap: "16px",
              alignItems: "end",
              position: "relative",
              zIndex: "2"
            }}>
              {/* Faculty Select */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ 
                  fontWeight: "600", 
                  color: "#374151",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <span>🏛️</span> Faculty
                </label>
                <select
                  value={facultyId}
                  onChange={e => setFacultyId(e.target.value)}
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
                  {myFaculties.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>

              {/* Course Title Input */}
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
                  placeholder="Enter course title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
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
                disabled={!title || !facultyId}
                style={{
                  padding: "14px 24px",
                  borderRadius: "12px",
                  background: title && facultyId ? 
                    "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                    "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                  color: "white",
                  border: "none",
                  cursor: title && facultyId ? "pointer" : "not-allowed",
                  fontWeight: 600,
                  fontSize: "15px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: title && facultyId ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "fit-content"
                }}
                onMouseOver={e => title && facultyId && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseOut={e => title && facultyId && (e.currentTarget.style.transform = "translateY(0)")}
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
              overflow: "hidden"
            }}
          >
            <div style={{ padding: "8px" }}>
              {myCourses.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "60px 32px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>📚</div>
                  <h3 style={{ 
                    fontSize: "24px", 
                    fontWeight: "700", 
                    color: "#1e293b",
                    marginBottom: "12px"
                  }}>
                    No Courses Yet
                  </h3>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500"
                  }}>
                    Start by adding your first course above
                  </p>
                </div>
              ) : (
                myCourses.map((course, index) => (
                  <div
                    key={course.id}
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
                        background: "linear-gradient(135deg, #4facfe20, #00f2fe40)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        border: "2px solid #4facfe30"
                      }}>
                        📖
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1e293b",
                          marginBottom: "4px"
                        }}>
                          {course.title}
                        </h4>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "14px",
                          color: "#64748b",
                          fontWeight: "500"
                        }}>
                          <span>🏛️ {course.facultyName}</span>
                          <span>•</span>
                          <span>🏫 {course.institutionName}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this course?")) {
                          deleteCourse(course.id);
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

          {/* Stats Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "16px",
            marginTop: "24px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <p style={{ 
              fontSize: "14px", 
              color: "#64748b",
              fontWeight: "500",
              margin: "0"
            }}>
              📚 {myCourses.length} course{myCourses.length !== 1 ? 's' : ''} • 
              🏛️ {myFaculties.length} facult{myFaculties.length !== 1 ? 'ies' : 'y'} • 
              💡 Courses help students discover your programs
            </p>
          </div>
        </div>
      </main>
    </>
  );
}