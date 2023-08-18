"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import Result from "@/app/components/Result";
import "@/app/components/Quiz.css";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../models/User";
import axios from "axios";
import { setUser } from "@/slices/userSlice";
import questions from "../constants/questions";

function Quiz() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAborted, setIsAborted] = useState(false);
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<string>>(
    Array(questions.length).fill("")
  );

  const handleAnswer = (selectedOption: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== "") {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmission = async () => {
    console.log(user);
    if (user?.email != null) {
      if (answers[currentQuestion] !== "") {
        setCurrentQuestion(currentQuestion + 1);
        const correctAnswers = answers.filter(
          (answer, index) => answer === questions[index].correctOption
        );
        const emailData = {
          email: user.email,
          id: user._id,
          username: user.username,
          correctAnswers: correctAnswers.length,
          totalQuestions: questions.length,
          percentage: (correctAnswers.length / questions.length) * 100,
        };
        try {
          const res = await axios.post("/api/users/sendResults", emailData);
          console.log("res:", res?.data ?? "");
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.error("User data is incomplete.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const totalQuestions = questions.length;
  const remainingQuestions = totalQuestions - (currentQuestion + 1);

  const isQuizComplete = answers.every((answer) => answer !== "");
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const handleAbort = () => {
    setIsAborted(true);
    router.push("/");
    return;
  };

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const userData = res.data.data as User;
        dispatch(setUser(userData));
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="quiz">
        <div className="quiz-header">
          <div className="user-details">
            <h1> Email: {user?.email}</h1>
            <p> ID: {user?._id}</p>
          </div>
          <div className="quiz-progress">
            {currentQuestion}/{totalQuestions} Questions
          </div>
        </div>
        {currentQuestion < totalQuestions ? (
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
            selectedOption={answers[currentQuestion]}
          />
        ) : (
          <Result answers={answers} questions={questions} />
        )}
        {currentQuestion > 0 && currentQuestion < totalQuestions ? (
          <button className="quiz-button" onClick={handlePrevious}>
            Previous
          </button>
        ) : null}
        {!isLastQuestion && currentQuestion < totalQuestions ? (
          <button
            className="quiz-button"
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
          >
            Next
          </button>
        ) : null}
        {isLastQuestion && isQuizComplete && (
          <button className="quiz-button" onClick={handleSubmission}>
            Submit Quiz
          </button>
        )}
        {currentQuestion >= 0 && !isQuizComplete && !isAborted && (
          <button className="quiz-button" onClick={handleAbort}>
            Abort Quiz
          </button>
        )}
        {isAborted && (
          <p className="quiz-abort-message">Quiz has been aborted.</p>
        )}
      </div>
    </>
  );
}

export default Quiz;
