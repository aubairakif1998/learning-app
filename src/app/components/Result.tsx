import React from "react";
import { useRouter } from "next/navigation";
import "./Result.css";
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
  const router = useRouter();
  const handleGoToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="result-container">
      <h3 className="result-title">Quiz Results</h3>
      <p>
        You answered {correctAnswers.length} out of {questions.length} questions
        correctly.
      </p>

      {/* Apply the CSS class to the button */}
      <button className="button-style" onClick={handleGoToHomePage}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Result;
