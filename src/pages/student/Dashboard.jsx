import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", background: "#f8f9fc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "30px", fontWeight: "600" }}>
        Student Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Browse Jobs */}
        <div
          onClick={() => navigate("/student/jobs")}
          style={{
            backgroundColor: "#a855f7",
            color: "white",
            padding: "30px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.2s",
          }}
        >
          <h4>Browse Jobs</h4>
          <p style={{ fontSize: "14px" }}>
            Explore and apply for work-study opportunities.
          </p>
        </div>

        {/* My Applications */}
        <div
          onClick={() => navigate("/student/applications")}
          style={{
            backgroundColor: "#1cc88a",
            color: "white",
            padding: "30px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.2s",
          }}
        >
          <h4>My Applications</h4>
          <p style={{ fontSize: "14px" }}>
            Track the status of your submitted applications.
          </p>
        </div>

        {/* My Feedback */}
        <div
          onClick={() => navigate("/student/feedbacks")}
          style={{
            backgroundColor: "#f6c23e",
            color: "white",
            padding: "30px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.2s",
          }}
        >
          <h4>My Feedback</h4>
          <p style={{ fontSize: "14px" }}>
            View feedback provided by administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;