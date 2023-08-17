"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import Result from "@/app/components/Result";
import "@/app/components/Quiz.css";

interface Option {
  id: string;
  text: string;
}

interface Question {
  text: string;
  options: Option[];
  correctOption: string;
}

const questions: Question[] = [
  {
    text: "What does JSX stand for?",
    options: [
      { id: "1", text: "JavaScript XML" },
      { id: "2", text: "Java Standard Extension" },
      { id: "3", text: "JSON XML Syntax" },
    ],
    correctOption: "1", // Correct option ID
  },
  {
    text: "Which hook is used to manage side effects in a functional component?",
    options: [
      { id: "1", text: "useState" },
      { id: "2", text: "useEffect" },
      { id: "3", text: "useContext" },
    ],
    correctOption: "2", // Correct option ID
  },
  {
    text: "are Which hook is used to manage side effects in a functional component?",
    options: [
      { id: "1", text: "useState" },
      { id: "2", text: "useEffect" },
      { id: "3", text: "useContext" },
    ],
    correctOption: "2", // Correct option ID
  },
  // Add more questions
];

function Quiz() {
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

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const totalQuestions = questions.length;
  const remainingQuestions = totalQuestions - (currentQuestion + 1);

  const isQuizComplete = answers.every((answer) => answer !== "");
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <>
      {" "}
      <Navbar />
      <div className="quiz">
        <div className="quiz-header">
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
        ) : (
          <></>
        )}
        {!isLastQuestion && currentQuestion < totalQuestions ? (
          <button
            className="quiz-button"
            onClick={handleNext}
            disabled={!answers[currentQuestion]} // Disable if no answer selected
          >
            Next
          </button>
        ) : (
          <></>
        )}
        {isLastQuestion && isQuizComplete && (
          <button className="quiz-button" onClick={handleNext}>
            Submit Quiz
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
