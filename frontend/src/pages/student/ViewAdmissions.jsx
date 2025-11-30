import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Transcripts() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "High School Transcript.pdf", date: "2024-01-15", status: "verified", size: "2.4 MB" },
    { id: 2, name: "College Certificate.jpg", date: "2024-01-10", status: "pending", size: "1.8 MB" },
    { id: 3, name: "Academic Awards.pdf", date: "2024-01-05", status: "verified", size: "3.1 MB" }
  ]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    
    setUploading(true);
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add to uploaded files
    const newFile = {
      id: uploadedFiles.length + 1,
      name: file.name,
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
    };
    
    setUploadedFiles([newFile, ...uploadedFiles]);
    setFile(null);
    setUploading(false);
    alert(`Successfully uploaded: ${file.name}`);
  };

  const handleDelete = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(f => f.id !== fileId));
  };

  const getStatusIcon = (status) => {
    const icons = {
      verified: "✅",
      pending: "⏳",
      rejected: "❌"
    };
    return icons[status] || "📄";
  };

  const getStatusColor = (status) => {
    const colors = {
      verified: "#4ade80",
      pending: "#f59e0b",
      rejected: "#ef4444"
    };
    return colors[status] || "#64748b";
  };

  return (
    <>
      <Navbar />
      <div className="transcripts-container">
        <main className="transcripts-main">
          <div className="transcripts-content">
            {/* Header Section */}
            <div className="transcripts-header">
              <div className="header-content">
                <div className="header-text">
                  <div className="header-badge">
                    <span className="badge-icon">📄</span>
                    <span className="badge-text">Documents</span>
                  </div>
                  <h1 className="header-title">Academic Transcripts</h1>
                  <p className="header-subtitle">
                    Upload and manage your academic transcripts, certificates, and supporting documents for applications
                  </p>
                </div>
                <div className="header-stats">
                  <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                      <div className="stat-value">{uploadedFiles.filter(f => f.status === 'verified').length}</div>
                      <div className="stat-label">Verified</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">⏳</div>
                    <div className="stat-info">
                      <div className="stat-value">{uploadedFiles.filter(f => f.status === 'pending').length}</div>
                      <div className="stat-label">Pending</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">📊</div>
                    <div className="stat-info">
                      <div className="stat-value">{uploadedFiles.length}</div>
                      <div className="stat-label">Total Files</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="content-grid">
              {/* Upload Section */}
              <div className="upload-section">
                <div className="section-card">
                  <div className="section-header">
                    <h2 className="section-title">Upload New Document</h2>
                    <p className="section-subtitle">Add transcripts and certificates</p>
                  </div>

                  <div className="upload-area">
                    <input
                      type="file"
                      onChange={e => setFile(e.target.files[0])}
                      className="file-input"
                      id="file-input"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <label 
                      htmlFor="file-input" 
                      className={`upload-dropzone ${file ? 'has-file' : ''}`}
                    >
                      <div className="dropzone-content">
                        <div className="dropzone-icon">📤</div>
                        <div className="dropzone-text">
                          {file ? (
                            <>
                              <div className="file-selected">{file.name}</div>
                              <div className="file-size">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="dropzone-title">Drag & drop your file</div>
                              <div className="dropzone-subtitle">or click to browse</div>
                            </>
                          )}
                        </div>
                        <div className="browse-btn">
                          Browse Files
                        </div>
                      </div>
                    </label>

                    {/* File Info */}
                    {file && (
                      <div className="file-info">
                        <div className="file-info-icon">✅</div>
                        <div className="file-info-content">
                          <div className="file-name">{file.name}</div>
                          <div className="file-details">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Upload Button */}
                    <button
                      onClick={handleUpload}
                      disabled={!file || uploading}
                      className={`upload-btn ${uploading ? 'loading' : ''} ${!file ? 'disabled' : ''}`}
                    >
                      {uploading ? (
                        <>
                          <div className="spinner"></div>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">🚀</span>
                          Upload Document
                          <span className="btn-arrow">📄</span>
                        </>
                      )}
                    </button>

                    {/* Help Text */}
                    <div className="upload-help">
                      <div className="help-icon">💡</div>
                      <div className="help-content">
                        <strong>Supported formats:</strong> PDF, JPG, PNG • <strong>Max size:</strong> 10MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents List */}
              <div className="documents-section">
                <div className="section-card">
                  <div className="section-header">
                    <h2 className="section-title">Your Documents</h2>
                    <p className="section-subtitle">Manage uploaded transcripts and certificates</p>
                  </div>

                  <div className="documents-list">
                    {uploadedFiles.length > 0 ? (
                      uploadedFiles.map((doc) => (
                        <div key={doc.id} className="document-item">
                          <div className="document-icon">
                            {getStatusIcon(doc.status)}
                          </div>
                          <div className="document-content">
                            <div className="document-name">{doc.name}</div>
                            <div className="document-meta">
                              <span className="document-date">{doc.date}</span>
                              <span className="document-size">{doc.size}</span>
                            </div>
                          </div>
                          <div className="document-actions">
                            <div 
                              className="document-status"
                              style={{ color: getStatusColor(doc.status) }}
                            >
                              {doc.status}
                            </div>
                            <button 
                              className="delete-btn"
                              onClick={() => handleDelete(doc.id)}
                              title="Delete document"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="empty-state">
                        <div className="empty-icon">📁</div>
                        <div className="empty-text">
                          <h3>No documents uploaded</h3>
                          <p>Upload your first transcript to get started</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="quick-actions">
                    <button className="action-btn">
                      <span className="action-icon">📥</span>
                      Download All
                    </button>
                    <button className="action-btn">
                      <span className="action-icon">🔄</span>
                      Check Status
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="tips-section">
              <div className="tips-card">
                <div className="tips-header">
                  <div className="tips-icon">💡</div>
                  <h3 className="tips-title">Upload Tips</h3>
                </div>
                <div className="tips-list">
                  <div className="tip-item">
                    <div className="tip-bullet">📷</div>
                    <div className="tip-content">
                      <strong>Clear scans only</strong> - Ensure documents are legible and properly cropped
                    </div>
                  </div>
                  <div className="tip-item">
                    <div className="tip-bullet">🔒</div>
                    <div className="tip-content">
                      <strong>Secure files</strong> - Upload official transcripts when possible
                    </div>
                  </div>
                  <div className="tip-item">
                    <div className="tip-bullet">⚡</div>
                    <div className="tip-content">
                      <strong>Faster processing</strong> - Combine related documents into single PDFs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .transcripts-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .transcripts-main {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          min-height: 100vh;
        }

        .transcripts-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Section */
        .transcripts-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 3rem;
          border-radius: 24px;
          color: white;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .header-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .header-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .header-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
          font-weight: 500;
          max-width: 600px;
        }

        .header-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: 600;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        /* Section Cards */
        .section-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          height: fit-content;
        }

        .section-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0;
        }

        /* Upload Section */
        .upload-area {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .file-input {
          display: none;
        }

        .upload-dropzone {
          border: 2px dashed #cbd5e1;
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #f8fafc;
        }

        .upload-dropzone:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        .upload-dropzone.has-file {
          border-color: #4ade80;
          background: rgba(74, 222, 128, 0.05);
        }

        .dropzone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .dropzone-icon {
          font-size: 3rem;
          opacity: 0.7;
        }

        .dropzone-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .dropzone-subtitle {
          color: #64748b;
          font-size: 0.9rem;
        }

        .file-selected {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .file-size {
          color: #64748b;
          font-size: 0.9rem;
        }

        .browse-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 10px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .upload-dropzone:hover .browse-btn {
          transform: translateY(-2px);
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(74, 222, 128, 0.1);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .file-info-icon {
          font-size: 1.2rem;
          color: #4ade80;
        }

        .file-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .file-details {
          font-size: 0.8rem;
          color: #64748b;
        }

        .upload-btn {
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .upload-btn:hover:not(.disabled):not(.loading) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }

        .upload-btn.disabled {
          background: linear-gradient(135deg, #cbd5e1, #94a3b8);
          cursor: not-allowed;
          box-shadow: none;
        }

        .upload-btn.loading {
          background: linear-gradient(135deg, #a0aec0, #718096);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .upload-btn:hover .btn-arrow {
          transform: scale(1.1);
        }

        .upload-help {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.8);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .help-icon {
          font-size: 1.1rem;
        }

        .help-content {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Documents List */
        .documents-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .document-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .document-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
        }

        .document-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .document-content {
          flex: 1;
        }

        .document-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .document-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .document-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .document-status {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: capitalize;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.8);
        }

        .delete-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          opacity: 0.7;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 6px;
        }

        .delete-btn:hover {
          opacity: 1;
          background: rgba(239, 68, 68, 0.1);
        }

        .empty-state {
          text-align: center;
          padding: 3rem 2rem;
          color: #64748b;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-text h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #475569;
        }

        .empty-text p {
          font-size: 0.9rem;
          margin: 0;
        }

        .quick-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          flex: 1;
          padding: 1rem;
          background: transparent;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .action-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        /* Tips Section */
        .tips-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .tips-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: start;
        }

        .tips-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .tips-icon {
          font-size: 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tips-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          text-align: center;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .tip-bullet {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .tip-content {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .header-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .header-stats {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .transcripts-main {
            padding: 1rem;
          }
          
          .transcripts-header {
            padding: 2rem;
          }
          
          .header-title {
            font-size: 2rem;
          }
          
          .header-stats {
            flex-direction: column;
          }
          
          .tips-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .quick-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .section-card {
            padding: 1.5rem;
          }
          
          .upload-dropzone {
            padding: 2rem 1rem;
          }
          
          .document-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .document-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}