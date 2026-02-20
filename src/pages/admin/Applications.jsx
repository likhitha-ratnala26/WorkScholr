import React, { useContext } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const AdminApplications = () => {
  const { applications, updateStatus } = useContext(ApplicationContext);

  return (
    <div className="container mt-4">
      <BackButton />
      <h2 className="mb-4">Student Applications</h2>

      {applications.length === 0 ? (
        <div className="alert alert-warning">
          No applications submitted yet.
        </div>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="card my-3 shadow-sm">
            <div className="card-body">
              
              {/* JOB DETAILS */}
              <h5>{app.job.title}</h5>
              <p><strong>Department:</strong> {app.job.department}</p>
              <p><strong>Description:</strong> {app.job.description}</p>

              <hr />

              {/* STUDENT DETAILS */}
              <h6>Student Details</h6>
              <p><strong>Name:</strong> {app.studentDetails.firstName} {app.studentDetails.lastName}</p>
              <p><strong>Phone:</strong> {app.studentDetails.phone}</p>
              <p><strong>Email:</strong> {app.studentDetails.email}</p>
              <p><strong>Gender:</strong> {app.studentDetails.gender}</p>
              <p><strong>Address:</strong> {app.studentDetails.address}</p>

              <hr />

              {/* STATUS */}
              <p>
                <strong>Approval Status:</strong>{" "}
                <span
                  className={
                    app.status === "Approved"
                      ? "text-success"
                      : app.status === "Rejected"
                      ? "text-danger"
                      : "text-warning"
                  }
                >
                  {app.status}
                </span>
              </p>

              {/* ACTION BUTTONS */}
              <div className="mt-2">
                <button
                  className="btn btn-success me-2"
                  onClick={() => updateStatus(app.id, "Approved")}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => updateStatus(app.id, "Rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminApplications;