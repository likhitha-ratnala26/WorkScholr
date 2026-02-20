import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";

const StudentDashboard = () => {
  return (
    <div className="container mt-4">
      <BackButton />
      <h2>Student Dashboard</h2>

      <Link to="/student/jobs" className="btn btn-success m-2">
        Browse Jobs
      </Link>

      <Link to="/student/applications" className="btn btn-info m-2">
        My Applications
      </Link>

      <Link to="/student/feedbacks" className="btn btn-warning m-2">
        Received Feedbacks
      </Link>
    </div>
  );
};

export default StudentDashboard;