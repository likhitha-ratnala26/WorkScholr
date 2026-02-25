import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(email, password, role);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setError("");

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
          <h2>Welcome to WorkScholr</h2>
        </div>

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
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={() => navigate("/register")}
              >
                Register
              </button>

            </form>

            {error && (
              <p className="text-danger mt-3 text-center">{error}</p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;