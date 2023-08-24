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

  const [currentPage, setCurrentPage] = useState<number>(0);
  const conceptsPerPage = 1; // Number of concepts to show per page
  const startIndex = currentPage * conceptsPerPage;
  const endIndex = startIndex + conceptsPerPage;
  const conceptsToShow = concepts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const userData = res.data.data as User; // Cast userData to User type
        console.log(res.data);
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
    <>
      <Navbar />
      <div className="Documentation">
        <div className="sidebarspace">
          <Sidebar concepts={concepts} setActiveConcept={setActiveConcept} />
        </div>
        <div className="contentspace">
          {" "}
          <Content concept={concepts[activeConcept]} />
        </div>

        <div className="fixed bottom-10 right-10">
          <Link href="/quiz">
            <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-7 rounded-lg transition-all duration-300 transform hover:scale-105">
              Take a Quiz
            </button>
          </Link>
        </div>
      </div>

      <div className="mobileview">
        <div className="content-container">
          {/* Pagination buttons */}
          <div className="pagination">
            <button
              onClick={handlePreviousPage}
              className={
                currentPage > 0
                  ? "pagination-button"
                  : "pagination-button-disabled"
              }
              disabled={currentPage === 0}
            >
              &lt; Previous
            </button>
            <button
              onClick={handleNextPage}
              className={
                endIndex < concepts.length
                  ? "pagination-button"
                  : "pagination-button-disabled"
              }
              disabled={endIndex >= concepts.length}
            >
              Next &gt;
            </button>
          </div>
          {/* Display content */}
          <div className="content">
            <h2>{conceptsToShow[activeConcept]?.title}</h2>
            {conceptsToShow[activeConcept]?.content && (
              <p>{conceptsToShow[activeConcept]?.content}</p>
            )}
            {conceptsToShow[activeConcept]?.urls
              .slice(0, 1)
              .map((url, index) => (
                <div key={index} className="url-item">
                  <img
                    src={url?.image}
                    alt={url?.title}
                    className="url-image"
                  />
                  <a
                    href={url?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="url-link"
                  >
                    {url?.title}
                  </a>
                  <p className="url-description">{url?.description}</p>
                </div>
              ))}

            <div className="buttons">
              <a
                href={conceptsToShow[activeConcept]?.urls[0]?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="quiz-button"
              >
                Learn More
              </a>
              <a href="/quiz" className="quiz-button">
                Start Quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
