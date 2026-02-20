import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {

  // ✅ 10 DEFAULT JOBS WITH HOURS & SALARY
  const defaultJobs = [
    {
      id: 1,
      department: "IT",
      title: "Frontend Developer Intern",
      hours: 20,
      salary: 12000,
      description: "Work on React-based web applications."
    },
    {
      id: 2,
      department: "Library",
      title: "Library Assistant",
      hours: 15,
      salary: 8000,
      description: "Assist students and manage book records."
    },
    {
      id: 3,
      department: "Sports",
      title: "Gym Assistant",
      hours: 18,
      salary: 9000,
      description: "Help manage gym equipment."
    },
    {
      id: 4,
      department: "Admin",
      title: "Office Helper",
      hours: 25,
      salary: 10000,
      description: "Assist in documentation and data entry."
    },
    {
      id: 5,
      department: "Cafeteria",
      title: "Cash Counter Assistant",
      hours: 20,
      salary: 8500,
      description: "Handle billing and customer support."
    },
    {
      id: 6,
      department: "Research",
      title: "Lab Assistant",
      hours: 22,
      salary: 14000,
      description: "Support research experiments."
    },
    {
      id: 7,
      department: "IT",
      title: "Backend Developer Intern",
      hours: 20,
      salary: 15000,
      description: "Assist in building APIs."
    },
    {
      id: 8,
      department: "Placement Cell",
      title: "Data Entry Operator",
      hours: 18,
      salary: 9500,
      description: "Maintain placement records."
    },
    {
      id: 9,
      department: "Media",
      title: "Content Creator",
      hours: 15,
      salary: 11000,
      description: "Create social media content."
    },
    {
      id: 10,
      department: "Maintenance",
      title: "Campus Maintenance Helper",
      hours: 30,
      salary: 10000,
      description: "Assist in campus upkeep."
    }
  ];

  const [jobs, setJobs] = useState(defaultJobs);
  const [applications, setApplications] = useState([]);

  // ADMIN POSTS JOB
  const addJob = (jobData) => {
    const newJob = {
      id: Date.now(),
      ...jobData,
    };
    setJobs((prev) => [...prev, newJob]);
  };

  // STUDENT SUBMITS APPLICATION
  const addApplication = (job, studentDetails) => {
    const newApplication = {
      id: Date.now(),
      job,
      studentDetails,
      status: "Pending",
      feedback: "",
    };

    setApplications((prev) => [...prev, newApplication]);
  };

  const updateStatus = (id, status) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  const addFeedback = (id, feedback) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, feedback } : app
      )
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        jobs,
        applications,
        addJob,
        addApplication,
        updateStatus,
        addFeedback,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};