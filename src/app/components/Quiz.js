// Quiz.js
import React, { useState } from "react";
import Question from "./Question"; // Import the Question component
import Result from "./Result"; // Import the Result component
import "./Quiz.css";
import Navbar from "./Navbar";
const questions = [
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
  // Add more questions
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const totalQuestions = questions.length;
  const remainingQuestions = totalQuestions - currentQuestion;

  return (
    <>
      <Navbar />
      <div className="quiz">
        <div className="quiz-header">
          <div className="quiz-progress">
            {currentQuestion + 1}/{totalQuestions} Questions
          </div>
          {currentQuestion > 0 && (
            <button className="quiz-back-button" onClick={handleGoBack}>
              Back
            </button>
          )}
        </div>
        {currentQuestion < totalQuestions ? (
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Result answers={answers} questions={questions} />
        )}
      </div>
    </>
  );
}

export default Quiz;
