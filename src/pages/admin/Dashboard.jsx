import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
  {
    title: "Post Job",
    description: "Create new work-study opportunities.",
    path: "/admin/post-job",
    color: "#facc15", // Solid Yellow
  },
  {
    title: "Manage Applications",
    description: "Review and update student applications.",
    path: "/admin/applications",
    color: "#ef4444", // Strong Red
  },
  {
    title: "Provide Feedback",
    description: "Give performance feedback to students.",
    path: "/admin/feedbacks",
    color: "#a855f7", // Clean Purple
  },
  {
    title: "Jobs List",
    description: "View and manage posted jobs.",
    path: "/admin/jobs",
    color: "#22c55e", // Solid Green
  },
];

  return (
    <div style={{ padding: "40px", background: "#f8f9fc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "30px", fontWeight: "600" }}>
        Admin Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            style={{
              backgroundColor: card.color,
              color: "white",
              padding: "30px",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h4 style={{ marginBottom: "10px" }}>{card.title}</h4>
            <p style={{ fontSize: "14px", opacity: "0.9" }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;