import React, { useState, useContext } from "react";
import BackButton from "../../components/BackButton";
import { ApplicationContext } from "../../context/ApplicationContext";

const PostJob = () => {
  const { addJob } = useContext(ApplicationContext);

  const [form, setForm] = useState({
    title: "",
    department: "",
    hours: "",
    salary: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.department ||
      !form.hours ||
      !form.salary ||
      !form.description
    ) {
      alert("All fields are required.");
      return;
    }

    addJob({
      ...form,
      hours: Number(form.hours),
      salary: Number(form.salary),
    });

    alert("Job Posted Successfully!");

    setForm({
      title: "",
      department: "",
      hours: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="container mt-4">
      <BackButton />
      <h2>Post New Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Job Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Hours per Week"
          value={form.hours}
          onChange={(e) =>
            setForm({ ...form, hours: e.target.value })
          }
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Salary (₹ per month)"
          value={form.salary}
          onChange={(e) =>
            setForm({ ...form, salary: e.target.value })
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Job Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;