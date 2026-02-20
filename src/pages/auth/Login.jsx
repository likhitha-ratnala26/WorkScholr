import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 4) {
      setError("Username must be at least 4 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    login(role);

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT SIDE - LOGO */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
          <img
            src="/logo.png.png"   // <-- Put your logo in public folder
            alt="WorkScholr Logo"
            style={{ width: "200px" }}
            className="mb-4"
          />
          <h2>Welcome to WorkScholr</h2>
          <p className="text-center px-4">
            Bridging Academics and Experience
          </p>
        </div>

        {/* RIGHT SIDE - LOGIN FORM */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div style={{ width: "80%", maxWidth: "400px" }}>
            <h3 className="mb-4 text-center">Login</h3>

            <form onSubmit={handleSubmit}>
              <select
                className="form-select mb-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary w-100">
                Login
              </button>
            </form>

            {error && <p className="text-danger mt-3 text-center">{error}</p>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;