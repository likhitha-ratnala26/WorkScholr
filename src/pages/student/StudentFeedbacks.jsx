import React, { useContext } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const StudentFeedbacks = () => {
  const { applications } = useContext(ApplicationContext);

  const feedbacks = applications.filter(
    (app) => app.feedback
  );

  return (
    <div className="container mt-4">
      <BackButton />
      <h3>Received Feedbacks</h3>

      {feedbacks.length === 0 ? (
        <div className="alert alert-info">
          No feedback received yet.
        </div>
      ) : (
        feedbacks.map((app) => (
          <div key={app.id} className="card my-3">
            <div className="card-body">
              <h5>{app.job.title}</h5>
              <p>{app.feedback}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentFeedbacks;