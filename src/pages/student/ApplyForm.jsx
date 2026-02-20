import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const ApplyForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addApplication } = useContext(ApplicationContext);

  const job = state?.job;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (!form.firstName || !form.lastName)
      return "First and Last Name required";

    if (!/^\d{10}$/.test(form.phone))
      return "Phone number must be 10 digits";

    if (!form.email.includes("@"))
      return "Invalid email";

    if (!form.gender) return "Select gender";

    if (!form.address) return "Address required";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const confirm = window.confirm(
      "Are you sure you want to apply?"
    );

    if (confirm) {
      addApplication(job, form);
      alert("Applied Successfully!");
      navigate("/student/applications");
    }
  };

  return (
    <div className="container mt-4">
      <BackButton />
      <h3>Apply for: {job.title}</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="First Name"
          onChange={(e) =>
            setForm({ ...form, firstName: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Last Name"
          onChange={(e) =>
            setForm({ ...form, lastName: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Phone (10 digits)"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <select
          className="form-select mb-2"
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <textarea
          className="form-control mb-2"
          placeholder="Address"
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <button className="btn btn-primary">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;