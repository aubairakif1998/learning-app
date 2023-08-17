"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import "@/app/components/Login.css";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error);
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  const validateEmail = () => {
    if (!user.email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!user.password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-2xl font-bold mb-4"> Login </h2>
        <hr className="mb-4" />

        <label htmlFor="email" className="align-left text-sm font-medium mb-1">
          Email
        </label>
        <input
          className="login-input w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onBlur={validateEmail}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setEmailError("");
          }}
          placeholder="Email"
        />
        {emailError && (
          <div className="error-message text-red-500 text-xs mb-2">
            {emailError}
          </div>
        )}

        <label
          htmlFor="password"
          className="align-left text-sm font-medium mb-1"
        >
          Password
        </label>
        <input
          className="login-input w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onBlur={validatePassword}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setPasswordError("");
          }}
          placeholder="Password"
        />
        {passwordError && (
          <div className="error-message text-red-500 text-xs mb-2">
            {passwordError}
          </div>
        )}

        <button
          onClick={onLogin}
          className="login-button w-full p-2 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 focus:outline-none"
          disabled={buttonDisabled || loading}
        >
          {loading ? "Processing" : "Login"}
        </button>

        <div className="signup-link">
          <Link href="/signup">
            <button className="signup-button text-blue-500 hover:underline">
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
