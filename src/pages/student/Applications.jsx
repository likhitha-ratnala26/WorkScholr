import React, { useContext } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const Applications = () => {
  const { applications } = useContext(ApplicationContext);

  return (
    <div className="container mt-4">

      {/* ✅ BACK BUTTON */}
      <BackButton />

      <h2 className="mb-4">My Applications</h2>

      {applications.length === 0 ? (
        <h5>No applications submitted yet.</h5>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="card my-3 shadow-sm">
            <div className="card-body">

              {/* JOB DETAILS */}
              <h6 className="text-muted">
                Department: {app.job.department}
              </h6>

              <h5>{app.job.title}</h5>

              <p>
                <strong>Hours per Week:</strong> {app.job.hours}
              </p>

              <p>
                <strong>Salary:</strong> ₹{app.job.salary} / month
              </p>

              <p>{app.job.description}</p>

              <hr />

              {/* STATUS */}
              <h6>
                Approval Status:{" "}
                <span
                  className={
                    app.status === "Approved"
                      ? "text-success fw-bold"
                      : app.status === "Rejected"
                      ? "text-danger fw-bold"
                      : "text-warning fw-bold"
                  }
                >
                  {app.status}
                </span>
              </h6>

              {/* FEEDBACK (if exists) */}
              {app.feedback && (
                <p className="mt-2">
                  <strong>Admin Feedback:</strong> {app.feedback}
                </p>
              )}

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Applications;