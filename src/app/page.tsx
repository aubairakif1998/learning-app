"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Content from "@/app/components/Content";
import axios from "axios"; // Import the Quiz component
import type { RootState } from "./store";
import { setUser, User } from "../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import concepts from "./constants/topics";

const Documentation: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true); // Introduce the loading state

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const userData = res.data.data as User; // Cast userData to User type
        // Dispatching the setUser action with user data
        dispatch(setUser(userData));
        setLoading(false); // Set loading to false once user data is fetched
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false); // Set loading to false in case of an error too
      }
    };

    fetchUserDetails(); // Fetch user details when the component mounts
  }, [dispatch]);

  // Render loading state if loading is true
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("State", user);
  return (
    <div className="Documentation">
      <Navbar />
      <div className="content-container flex">
        <Sidebar concepts={concepts} setActiveConcept={setActiveConcept} />
        <div className="flex-1">
          <Content concept={concepts[activeConcept]} />
          <div className="fixed bottom-10 right-10">
            <Link href="/quiz">
              <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-7 rounded-lg transition-all duration-300 transform hover:scale-105">
                Take a Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
