import React, { useContext, useState } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const AdminFeedbacks = () => {
  const { applications, addFeedback } = useContext(ApplicationContext);

  const [feedbackInput, setFeedbackInput] = useState({});

  const approvedApplications = applications.filter(
    (app) => app.status === "Approved"
  );

  const handleSubmit = (id) => {
    if (!feedbackInput[id]) {
      alert("Please enter feedback");
      return;
    }

    addFeedback(id, feedbackInput[id]);
    alert("Feedback submitted successfully!");
    setFeedbackInput({ ...feedbackInput, [id]: "" });
  };

  return (
    <div className="container mt-4">
      <BackButton />
      <h2 className="mb-4">Give Feedbacks</h2>

      {approvedApplications.length === 0 ? (
        <div className="alert alert-info">
          No approved applications available for feedback.
        </div>
      ) : (
        approvedApplications.map((app) => (
          <div key={app.id} className="card my-3">
            <div className="card-body">
              <h5>{app.job.title}</h5>
              <p><strong>Student:</strong> {app.studentDetails.firstName} {app.studentDetails.lastName}</p>

              <textarea
                className="form-control mb-2"
                placeholder="Write feedback..."
                value={feedbackInput[app.id] || ""}
                onChange={(e) =>
                  setFeedbackInput({
                    ...feedbackInput,
                    [app.id]: e.target.value,
                  })
                }
              />

              <button
                className="btn btn-primary"
                onClick={() => handleSubmit(app.id)}
              >
                Submit Feedback
              </button>

              {app.feedback && (
                <div className="alert alert-success mt-2">
                  <strong>Existing Feedback:</strong> {app.feedback}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminFeedbacks;