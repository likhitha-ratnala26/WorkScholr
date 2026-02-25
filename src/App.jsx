import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import Jobs from "./pages/student/Jobs";
import ApplyForm from "./pages/student/ApplyForm";
import StudentApplications from "./pages/student/Applications";
import StudentFeedbacks from "./pages/student/StudentFeedbacks";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import PostJob from "./pages/admin/PostJob";
import AdminApplications from "./pages/admin/Applications";
import AdminFeedbacks from "./pages/admin/AdminFeedbacks";
import JobsList from "./pages/admin/JobsList";

function App() {
  return (
    <div className="min-vh-100">
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* STUDENT ROUTES */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <>
                <Navbar />
                <StudentDashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/jobs"
          element={
            <ProtectedRoute role="student">
              <>
                <Navbar />
                <Jobs />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/apply"
          element={
            <ProtectedRoute role="student">
              <>
                <Navbar />
                <ApplyForm />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/applications"
          element={
            <ProtectedRoute role="student">
              <>
                <Navbar />
                <StudentApplications />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/feedbacks"
          element={
            <ProtectedRoute role="student">
              <>
                <Navbar />
                <StudentFeedbacks />
              </>
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <>
                <Navbar />
                <AdminDashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/post-job"
          element={
            <ProtectedRoute role="admin">
              <>
                <Navbar />
                <PostJob />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/applications"
          element={
            <ProtectedRoute role="admin">
              <>
                <Navbar />
                <AdminApplications />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/feedbacks"
          element={
            <ProtectedRoute role="admin">
              <>
                <Navbar />
                <AdminFeedbacks />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute role="admin">
              <>
                <Navbar />
                <JobsList />
              </>
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;