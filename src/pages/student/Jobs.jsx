import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const Jobs = () => {
  const { jobs } = useContext(ApplicationContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <BackButton />
      <h2 className="mb-4">Available Work-Study Jobs</h2>

      {jobs.map((job) => (
        <div key={job.id} className="card my-3 shadow-sm">
          <div className="card-body">
            <h6 className="text-muted">
              Department: {job.department}
            </h6>

            <h5>{job.title}</h5>

            <p>
              <strong>Hours per Week:</strong> {job.hours}
            </p>

            <p>
              <strong>Salary:</strong> ₹{job.salary} / month
            </p>

            <p>{job.description}</p>

            <button
              className="btn btn-primary"
              onClick={() =>
                navigate("/student/apply", { state: { job } })
              }
            >
              Apply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;