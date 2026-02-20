import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <BackButton />
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="d-flex flex-wrap">

        <button
          className="btn btn-primary m-2"
          onClick={() => navigate("/admin/post-job")}
        >
          Post New Job
        </button>

        <button
          className="btn btn-success m-2"
          onClick={() => navigate("/admin/applications")}
        >
          View Applications
        </button>

        <button
          className="btn btn-warning m-2"
          onClick={() => navigate("/admin/feedbacks")}
        >
          Give Feedbacks
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => navigate("/admin/jobs")}
        >
          Jobs List
        </button>

      </div>
    </div>
  );
};

export default Dashboard;