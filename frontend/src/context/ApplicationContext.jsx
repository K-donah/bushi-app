import React, { createContext, useContext, useEffect, useState } from "react";

/*
 Central app data and persistence to localStorage:
 keys: cg_institutions, cg_faculties, cg_courses, cg_applications, cg_companies, cg_jobs, cg_users, cg_transcripts
*/

const ApplicationContext = createContext();

// Data validation schemas (optional but recommended)
const defaultData = {
  institutions: [],
  faculties: [],
  courses: [],
  applications: [],
  companies: [],
  jobs: [],
  users: [],
  transcripts: []
};

// Helper function for safe localStorage access
const getStoredData = (key, fallback = []) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return fallback;
  }
};

export function ApplicationProvider({ children }) {
  // State initialization with error handling
  const [institutions, setInstitutions] = useState(() => 
    getStoredData("cg_institutions", defaultData.institutions)
  );

  const [faculties, setFaculties] = useState(() => 
    getStoredData("cg_faculties", defaultData.faculties)
  );

  const [courses, setCourses] = useState(() => 
    getStoredData("cg_courses", defaultData.courses)
  );

  const [applications, setApplications] = useState(() => 
    getStoredData("cg_applications", defaultData.applications)
  );

  const [companies, setCompanies] = useState(() => 
    getStoredData("cg_companies", defaultData.companies)
  );

  const [jobs, setJobs] = useState(() => 
    getStoredData("cg_jobs", defaultData.jobs)
  );

  const [users, setUsers] = useState(() => 
    getStoredData("cg_users", defaultData.users)
  );

  const [transcripts, setTranscripts] = useState(() => 
    getStoredData("cg_transcripts", defaultData.transcripts)
  );

  // Persist all data with error handling
  const persistData = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  useEffect(() => { persistData("cg_institutions", institutions); }, [institutions]);
  useEffect(() => { persistData("cg_faculties", faculties); }, [faculties]);
  useEffect(() => { persistData("cg_courses", courses); }, [courses]);
  useEffect(() => { persistData("cg_applications", applications); }, [applications]);
  useEffect(() => { persistData("cg_companies", companies); }, [companies]);
  useEffect(() => { persistData("cg_jobs", jobs); }, [jobs]);
  useEffect(() => { persistData("cg_users", users); }, [users]);
  useEffect(() => { persistData("cg_transcripts", transcripts); }, [transcripts]);

  // Institutions
  const addInstitution = (inst) => {
    const institutionWithDefaults = {
      ...inst,
      createdAt: inst.createdAt || new Date().toISOString(),
      status: inst.status || "pending"
    };
    setInstitutions(prev => [...prev, institutionWithDefaults]);
  };

  const updateInstitution = (id, updates) => 
    setInstitutions(prev => prev.map(i => i.id === id ? { ...i, ...updates, updatedAt: new Date().toISOString() } : i));

  const deleteInstitution = (id) => {
    // Check for dependencies before deletion
    const institutionFaculties = faculties.filter(f => f.institutionId === id);
    const institutionCourses = courses.filter(c => c.institutionId === id);
    
    if (institutionFaculties.length > 0 || institutionCourses.length > 0) {
      console.warn(`Cannot delete institution with ID ${id}: Has ${institutionFaculties.length} faculties and ${institutionCourses.length} courses`);
      return false;
    }
    
    setInstitutions(prev => prev.filter(i => i.id !== id));
    return true;
  };

  // Faculties
  const addFaculty = (f) => {
    const facultyWithDefaults = {
      ...f,
      id: f.id || `fac_${Date.now()}`,
      createdAt: f.createdAt || new Date().toISOString()
    };
    setFaculties(prev => [...prev, facultyWithDefaults]);
  };

  const deleteFaculty = (id) => {
    // Check for course dependencies
    const facultyCourses = courses.filter(c => c.facultyId === id);
    if (facultyCourses.length > 0) {
      console.warn(`Cannot delete faculty with ID ${id}: Has ${facultyCourses.length} courses`);
      return false;
    }
    
    setFaculties(prev => prev.filter(f => f.id !== id));
    return true;
  };

  // Courses
  const addCourse = (c) => {
    const courseWithDefaults = {
      ...c,
      id: c.id || `course_${Date.now()}`,
      createdAt: c.createdAt || new Date().toISOString()
    };
    setCourses(prev => [...prev, courseWithDefaults]);
  };

  const deleteCourse = (id) => {
    // Check for application dependencies
    const courseApplications = applications.filter(a => a.courseId === id);
    if (courseApplications.length > 0) {
      console.warn(`Cannot delete course with ID ${id}: Has ${courseApplications.length} applications`);
      return false;
    }
    
    setCourses(prev => prev.filter(c => c.id !== id));
    return true;
  };

  // Applications
  const applyForCourse = (applicationData) => {
    const applicationWithDefaults = {
      ...applicationData,
      id: `app_${Date.now()}`,
      appliedDate: new Date().toISOString(),
      status: "pending"
    };
    setApplications(prev => [...prev, applicationWithDefaults]);
  };

  const addApplication = (a) => setApplications(prev => [...prev, a]);
  
  const updateApplication = (id, updates) => 
    setApplications(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));

  const deleteApplication = (id) => setApplications(prev => prev.filter(a => a.id !== id));

  // Companies
  const addCompany = (c) => {
    const companyWithDefaults = {
      ...c,
      id: c.id || `comp_${Date.now()}`,
      createdAt: c.createdAt || new Date().toISOString(),
      status: c.status || "active"
    };
    setCompanies(prev => [...prev, companyWithDefaults]);
  };

  const updateCompany = (id, updates) => 
    setCompanies(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));

  const deleteCompany = (id) => {
    // Check for job dependencies
    const companyJobs = jobs.filter(j => j.companyId === id);
    if (companyJobs.length > 0) {
      console.warn(`Cannot delete company with ID ${id}: Has ${companyJobs.length} jobs`);
      return false;
    }
    
    setCompanies(prev => prev.filter(c => c.id !== id));
    return true;
  };

  // Jobs
  const addJob = (j) => {
    const jobWithDefaults = {
      ...j,
      id: j.id || `job_${Date.now()}`,
      postedDate: new Date().toISOString(),
      status: j.status || "active"
    };
    setJobs(prev => [...prev, jobWithDefaults]);
  };

  const updateJob = (id, updates) => 
    setJobs(prev => prev.map(j => j.id === id ? { ...j, ...updates } : j));

  const deleteJob = (id) => setJobs(prev => prev.filter(j => j.id !== id));

  // Users
  const addUser = (u) => {
    const userWithDefaults = {
      ...u,
      id: u.id || `user_${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: u.status || "pending"
    };
    setUsers(prev => [...prev, userWithDefaults]);
  };

  const updateUserStatus = (id, status) => 
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status } : u));

  const deleteUser = (id) => {
    // Check for dependencies
    const userApplications = applications.filter(a => a.studentId === id);
    const userTranscripts = transcripts.filter(t => t.studentId === id);
    
    if (userApplications.length > 0 || userTranscripts.length > 0) {
      console.warn(`Cannot delete user with ID ${id}: Has ${userApplications.length} applications and ${userTranscripts.length} transcripts`);
      return false;
    }
    
    setUsers(prev => prev.filter(u => u.id !== id));
    return true;
  };

  // Admissions helpers
  const admitApplication = (id) => {
    const app = applications.find(a => a.id === id);
    if (!app) return false;

    setApplications(prev => prev.map(a => {
      if (a.studentId === app.studentId && a.institutionId === app.institutionId && a.id !== id && a.status === "admitted") {
        return { ...a, status: "rejected" };
      }
      return a.id === id ? { ...a, status: "admitted" } : a;
    }));
    return true;
  };

  const finalizeStudentChoice = (studentId, chosenApplicationId) => {
    setApplications(prev => {
      const chosen = prev.find(a => a.id === chosenApplicationId);
      return prev.map(a => {
        if (a.studentId === studentId) {
          if (a.id === chosenApplicationId) return { ...a, status: "accepted_by_student" };
          if (a.status === "admitted" || a.status === "pending") return { ...a, status: "withdrawn" };
        }
        return a;
      });
    });
  };

  // Transcripts helpers
  const uploadTranscript = (studentId, file) => {
    const newTranscript = {
      id: `transcript_${Date.now()}`,
      studentId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadedDate: new Date().toISOString(),
      status: "uploaded"
    };
    setTranscripts(prev => [...prev, newTranscript]);
    return newTranscript.id;
  };

  const deleteTranscript = (id) => {
    setTranscripts(prev => prev.filter(t => t.id !== id));
    return true;
  };

  // Utility functions for data analysis
  const getStats = () => ({
    institutions: institutions.length,
    faculties: faculties.length,
    courses: courses.length,
    applications: applications.length,
    companies: companies.length,
    jobs: jobs.length,
    users: users.length,
    transcripts: transcripts.length,
    
    // Additional stats
    pendingApplications: applications.filter(a => a.status === "pending").length,
    admittedApplications: applications.filter(a => a.status === "admitted").length,
    activeJobs: jobs.filter(j => j.status === "active").length,
    approvedInstitutions: institutions.filter(i => i.status === "approved").length
  });

  // Search and filter functions
  const searchCourses = (query) => {
    return courses.filter(course => 
      course.title?.toLowerCase().includes(query.toLowerCase()) ||
      course.description?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getInstitutionFaculties = (institutionId) => {
    return faculties.filter(f => f.institutionId === institutionId);
  };

  const getFacultyCourses = (facultyId) => {
    return courses.filter(c => c.facultyId === facultyId);
  };

  const getUserApplications = (userId) => {
    return applications.filter(a => a.studentId === userId);
  };

  // Data export function
  const exportData = () => {
    const data = {
      institutions,
      faculties,
      courses,
      applications,
      companies,
      jobs,
      users,
      transcripts,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  // Data import function
  const importData = (jsonData) => {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.institutions) setInstitutions(data.institutions);
      if (data.faculties) setFaculties(data.faculties);
      if (data.courses) setCourses(data.courses);
      if (data.applications) setApplications(data.applications);
      if (data.companies) setCompanies(data.companies);
      if (data.jobs) setJobs(data.jobs);
      if (data.users) setUsers(data.users);
      if (data.transcripts) setTranscripts(data.transcripts);
      
      return true;
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  };

  const value = {
    // State
    institutions, setInstitutions,
    faculties, setFaculties,
    courses, setCourses,
    applications, setApplications,
    companies, setCompanies,
    jobs, setJobs,
    users, setUsers,
    transcripts, setTranscripts,

    // CRUD operations
    addInstitution, updateInstitution, deleteInstitution,
    addFaculty, deleteFaculty,
    addCourse, deleteCourse,
    applyForCourse, addApplication, updateApplication, deleteApplication,
    addCompany, updateCompany, deleteCompany,
    addJob, updateJob, deleteJob,
    addUser, updateUserStatus, deleteUser,
    uploadTranscript, deleteTranscript,

    // Business logic
    admitApplication, finalizeStudentChoice,

    // Utility functions
    getStats,
    searchCourses,
    getInstitutionFaculties,
    getFacultyCourses,
    getUserApplications,
    exportData,
    importData
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useAppData must be used within an ApplicationProvider");
  }
  return context;
}