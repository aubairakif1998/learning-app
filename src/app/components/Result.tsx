// Result.tsx
import React from "react";

interface Option {
  id: string;
  text: string;
}

interface Question {
  text: string;
  options: Option[];
  correctOption: string;
}

interface ResultProps {
  answers: string[];
  questions: Question[];
}

const Result: React.FC<ResultProps> = ({ answers, questions }) => {
  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].correctOption
  );

  return (
    <div className="result">
      <h3>Quiz Results</h3>
      <p>
        You answered {correctAnswers.length} out of {questions.length} questions
        correctly.
      </p>
    </div>
  );
};

export default Result;
