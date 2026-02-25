import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);
  };

  const register = (email, password, role) => {
    if (!validateEmail(email)) {
      return { success: false, message: "Enter a valid email address" };
    }

    if (!validatePassword(password)) {
      return {
        success: false,
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number and special character.",
      };
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return { success: false, message: "Account already exists" };
    }

    const newUser = { email, password, role };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
  };

  const login = (email, password, role) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      return { success: false, message: "This account doesn't exist" };
    }

    if (user.role !== role) {
      return { success: false, message: "This account doesn't exist" };
    }

    if (user.password !== password) {
      return { success: false, message: "Wrong username or password" };
    }

    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));

    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};