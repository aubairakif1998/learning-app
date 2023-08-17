"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    const isPasswordValid = user.password.length >= 6;
    const passwordsMatch = user.password === user.confirmPassword;

    setEmailError(isEmailValid ? "" : "Invalid email");
    setPasswordError(
      isPasswordValid ? "" : "Password must be at least 6 characters"
    );
    setConfirmPasswordError(passwordsMatch ? "" : "Passwords do not match");

    setButtonDisabled(!(isEmailValid && isPasswordValid && passwordsMatch));
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.response.data.error);
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <hr className="mb-4" />
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
        </label>
        <input
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        {emailError && (
          <p className="text-red-500 text-xs mb-2">{emailError}</p>
        )}
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        {passwordError && (
          <p className="text-red-500 text-xs mb-2">{passwordError}</p>
        )}
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-1"
        >
          Confirm Password
        </label>
        <input
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          placeholder="Confirm Password"
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-xs mb-2">{confirmPasswordError}</p>
        )}
        <button
          onClick={onSignup}
          className="w-full p-2 bg-green-500 text-white rounded-lg mb-4 hover:bg-green-600 focus:outline-none"
          disabled={buttonDisabled}
        >
          {loading ? "Processing" : "Signup"}
        </button>
        <p className="text-gray-600 text-xs">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
