import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";

export default function ManageInstitutions() {
  const { institutions, addInstitution, updateInstitution, deleteInstitution, faculties, addFaculty, deleteFaculty, courses, addCourse, deleteCourse } = useAppData();

  // Local states
  const [institutionName, setInstitutionName] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Add new institution
  const handleAddInstitution = () => {
    if (!institutionName.trim()) return alert("Enter institution name");
    addInstitution({ id: `inst_${Date.now()}`, name: institutionName.trim(), status: "approved" });
    setInstitutionName("");
  };

  // Add faculty under selected institution
  const handleAddFaculty = () => {
    if (!selectedInstitution) return alert("Select an institution first");
    if (!facultyName.trim()) return alert("Enter faculty name");
    addFaculty({
      id: `fac_${Date.now()}`,
      name: facultyName.trim(),
      institutionId: selectedInstitution.id,
    });
    setFacultyName("");
  };

  // Add course under selected faculty
  const handleAddCourse = () => {
    if (!selectedFaculty) return alert("Select a faculty first");
    if (!courseTitle.trim()) return alert("Enter course title");
    addCourse({
      id: `course_${Date.now()}`,
      title: courseTitle.trim(),
      facultyId: selectedFaculty.id,
      facultyName: selectedFaculty.name,
      institutionId: selectedFaculty.institutionId,
    });
    setCourseTitle("");
  };

  // Filtered faculties and courses
  const facultiesForInstitution = faculties.filter(f => f.institutionId === selectedInstitution?.id);
  const coursesForFaculty = courses.filter(c => c.facultyId === selectedFaculty?.id);

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
              Institution Management
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Manage institutions, faculties, and courses in one place
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
            {/* Add Institution Card */}
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
                <span>🏢</span> Add New Institution
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: "2" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ 
                    fontWeight: "600", 
                    color: "#374151",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span>📝</span> Institution Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter institution name"
                    value={institutionName}
                    onChange={e => setInstitutionName(e.target.value)}
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

                <button
                  onClick={handleAddInstitution}
                  disabled={!institutionName.trim()}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "12px",
                    background: institutionName.trim() ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    cursor: institutionName.trim() ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: institutionName.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center"
                  }}
                  onMouseOver={e => institutionName.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseOut={e => institutionName.trim() && (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span>➕</span>
                  Add Institution
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
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
                <span>📊</span> Overview
              </h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#4facfe", marginBottom: "4px" }}>
                    {institutions.length}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                    Institutions
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#ff6b6b", marginBottom: "4px" }}>
                    {faculties.length}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                    Faculties
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#4ade80", marginBottom: "4px" }}>
                    {courses.length}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                    Courses
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#f59e0b", marginBottom: "4px" }}>
                    {institutions.filter(i => i.status === "approved").length}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                    Approved
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutions List */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "32px",
              marginBottom: "32px"
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
              <span>📋</span> Institution Directory
              <span style={{
                background: "#4facfe",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {institutions.length}
              </span>
            </h3>

            {institutions.length === 0 ? (
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
                  No institutions added yet. Create your first institution!
                </p>
              </div>
            ) : (
              <div style={{ display: "grid", gap: "16px" }}>
                {institutions.map(inst => {
                  const institutionFaculties = faculties.filter(f => f.institutionId === inst.id);
                  const institutionCourses = courses.filter(c => c.institutionId === inst.id);
                  
                  return (
                    <div
                      key={inst.id}
                      style={{
                        background: "white",
                        padding: "24px",
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
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                        <div style={{ flex: "1" }}>
                          <h4 style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#1e293b",
                            marginBottom: "8px"
                          }}>
                            {inst.name}
                          </h4>
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            fontSize: "14px",
                            color: "#64748b",
                            fontWeight: "600"
                          }}>
                            <span style={{
                              padding: "4px 12px",
                              borderRadius: "20px",
                              background: inst.status === "approved" ? "#dcfce7" : 
                                        inst.status === "suspended" ? "#fef3c7" : "#f3f4f6",
                              color: inst.status === "approved" ? "#166534" : 
                                    inst.status === "suspended" ? "#92400e" : "#6b7280",
                              fontSize: "12px",
                              fontWeight: "700"
                            }}>
                              {inst.status}
                            </span>
                            <span>🏛️ {institutionFaculties.length} faculties</span>
                            <span>📚 {institutionCourses.length} courses</span>
                          </div>
                        </div>
                        
                        <div style={{ display: "flex", gap: "8px", flexShrink: "0" }}>
                          <button
                            onClick={() => setSelectedInstitution(inst)}
                            style={{
                              padding: "10px 16px",
                              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                              color: "white",
                              border: "none",
                              borderRadius: "10px",
                              cursor: "pointer",
                              fontWeight: "600",
                              fontSize: "12px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(79, 172, 254, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                              e.currentTarget.style.boxShadow = "0 6px 18px rgba(79, 172, 254, 0.4)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.boxShadow = "0 4px 12px rgba(79, 172, 254, 0.3)";
                            }}
                          >
                            <span>⚙️</span>
                            Manage
                          </button>
                          <button
                            onClick={() => updateInstitution(inst.id, { status: "approved" })}
                            style={{
                              padding: "10px 16px",
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
                          >
                            <span>✅</span>
                            Approve
                          </button>
                          <button
                            onClick={() => updateInstitution(inst.id, { status: "suspended" })}
                            style={{
                              padding: "10px 16px",
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
                          >
                            <span>⏸️</span>
                            Suspend
                          </button>
                          <button
                            onClick={() => {
                              if (institutionFaculties.length > 0 || institutionCourses.length > 0) {
                                if (!window.confirm(`This institution has ${institutionFaculties.length} faculties and ${institutionCourses.length} courses. Deleting it will remove all associated data. Are you sure?`)) {
                                  return;
                                }
                              }
                              if (window.confirm(`Delete institution "${inst.name}"?`)) {
                                deleteInstitution(inst.id);
                              }
                            }}
                            style={{
                              padding: "10px 16px",
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
                              gap: "4px"
                            }}
                          >
                            <span>🗑️</span>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Faculties Section */}
          {selectedInstitution && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "32px",
                marginBottom: "32px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: 700, 
                  color: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span>🏛️</span> 
                  Faculties under <span style={{ color: "#4facfe", marginLeft: "8px" }}>{selectedInstitution.name}</span>
                </h3>
                <button
                  onClick={() => setSelectedInstitution(null)}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(107, 114, 128, 0.1)",
                    color: "#64748b",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "12px",
                    transition: "all 0.3s ease"
                  }}
                >
                  ← Back
                </button>
              </div>

              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <input
                  placeholder="Enter faculty name"
                  value={facultyName}
                  onChange={e => setFacultyName(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "14px",
                    borderRadius: "12px",
                    border: "2px solid #e2e8f0",
                    backgroundColor: "white",
                    fontSize: "15px",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                />
                <button
                  onClick={handleAddFaculty}
                  disabled={!facultyName.trim()}
                  style={{
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background: facultyName.trim() ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    cursor: facultyName.trim() ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                    boxShadow: facultyName.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span>➕</span>
                  Add Faculty
                </button>
              </div>

              {facultiesForInstitution.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>🏛️</div>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500",
                    margin: "0"
                  }}>
                    No faculties added yet. Add your first faculty!
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: "12px" }}>
                  {facultiesForInstitution.map(f => {
                    const facultyCourses = courses.filter(c => c.facultyId === f.id);
                    
                    return (
                      <div
                        key={f.id}
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
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div>
                            <strong style={{ fontSize: "16px", color: "#1e293b", display: "block", marginBottom: "4px" }}>
                              {f.name}
                            </strong>
                            <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                              📚 {facultyCourses.length} courses
                            </span>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <button
                              onClick={() => setSelectedFaculty(f)}
                              style={{
                                padding: "10px 16px",
                                background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                                color: "white",
                                border: "none",
                                borderRadius: "10px",
                                cursor: "pointer",
                                fontWeight: "600",
                                fontSize: "12px",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 12px rgba(79, 172, 254, 0.3)",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              }}
                            >
                              <span>📖</span>
                              Manage Courses
                            </button>
                            <button
                              onClick={() => {
                                if (facultyCourses.length > 0) {
                                  if (!window.confirm(`This faculty has ${facultyCourses.length} courses. Deleting it will remove all associated courses. Are you sure?`)) {
                                    return;
                                  }
                                }
                                if (window.confirm(`Delete faculty "${f.name}"?`)) {
                                  deleteFaculty(f.id);
                                }
                              }}
                              style={{
                                padding: "10px 16px",
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
                                gap: "4px"
                              }}
                            >
                              <span>🗑️</span>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Courses Section */}
          {selectedFaculty && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "32px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: 700, 
                  color: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span>📖</span> 
                  Courses under <span style={{ color: "#4facfe", marginLeft: "8px" }}>{selectedFaculty.name}</span>
                </h3>
                <button
                  onClick={() => setSelectedFaculty(null)}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(107, 114, 128, 0.1)",
                    color: "#64748b",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "12px",
                    transition: "all 0.3s ease"
                  }}
                >
                  ← Back
                </button>
              </div>

              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <input
                  placeholder="Enter course title"
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "14px",
                    borderRadius: "12px",
                    border: "2px solid #e2e8f0",
                    backgroundColor: "white",
                    fontSize: "15px",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                />
                <button
                  onClick={handleAddCourse}
                  disabled={!courseTitle.trim()}
                  style={{
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background: courseTitle.trim() ? 
                      "linear-gradient(135deg, #4facfe, #00f2fe)" : 
                      "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    color: "white",
                    border: "none",
                    cursor: courseTitle.trim() ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                    boxShadow: courseTitle.trim() ? "0 4px 15px rgba(79, 172, 254, 0.4)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span>➕</span>
                  Add Course
                </button>
              </div>

              {coursesForFaculty.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "#64748b"
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px", opacity: "0.5" }}>📖</div>
                  <p style={{ 
                    fontSize: "16px", 
                    color: "#64748b",
                    fontWeight: "500",
                    margin: "0"
                  }}>
                    No courses added yet. Add your first course!
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: "12px" }}>
                  {coursesForFaculty.map(c => (
                    <div
                      key={c.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "16px",
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
                      <span style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b" }}>{c.title}</span>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete course "${c.title}"?`)) {
                            deleteCourse(c.id);
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
                          gap: "4px"
                        }}
                      >
                        <span>🗑️</span>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}