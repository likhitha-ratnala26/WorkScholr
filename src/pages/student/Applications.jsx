import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationContext";
import { AuthContext } from "../../context/AuthContext";

const StudentApplications = () => {
  const navigate = useNavigate();
  const { applications } = useContext(ApplicationContext);
  const { user } = useContext(AuthContext);

  const myApplications = applications.filter(
    (app) => app.studentEmail === user?.email
  );

  return (
    <div style={{ padding: "40px", minHeight: "100vh", background: "#f8f9fc" }}>
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/student/dashboard")}
        style={{
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        ← Back to Dashboard
      </button>

      <h2 style={{ marginBottom: "20px" }}>My Applications</h2>

      {myApplications.length === 0 ? (
        <div
          style={{
            backgroundColor: "#e3f2fd",
            color: "#0d6efd",
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "500",
          }}
        >
          No applications submitted.
        </div>
      ) : (
        myApplications.map((app) => (
  <div
    key={app.id}
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}
  >
    <h4 style={{ marginBottom: "10px" }}>{app.job.title}</h4>

    <p><strong>Department:</strong> {app.job.department}</p>
    <p><strong>Hours per Week:</strong> {app.job.hours}</p>
    <p><strong>Salary:</strong> {app.job.salary}</p>
    <p><strong>Description:</strong> {app.job.description}</p>

    <p style={{ marginTop: "10px", fontWeight: "600" }}>
      Status: {app.status}
    </p>
  </div>
))
      )}
    </div>
  );
};

export default StudentApplications;