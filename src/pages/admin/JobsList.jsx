import React, { useContext } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const JobsList = () => {
  const { jobs } = useContext(ApplicationContext);

  return (
    <div className="container mt-4">
      <BackButton />
      <h2 className="mb-4">All Posted Jobs</h2>

      {jobs.length === 0 ? (
        <h5>No jobs available.</h5>
      ) : (
        jobs.map((job) => (
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

              {/* 🚫 No Apply Button Here */}

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobsList;