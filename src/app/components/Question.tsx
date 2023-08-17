import React from "react";
import "@/app/components/Question.css"; // Import the Question CSS

interface Option {
  id: string;
  text: string;
}

interface QuestionProps {
  question: {
    text: string;
    options: Option[];
  };
  handleAnswer: (selectedOption: string) => void;
  selectedOption: string | null;
}

const Question: React.FC<QuestionProps> = ({
  question,
  handleAnswer,
  selectedOption,
}) => {
  return (
    <div className="question">
      <h3>{question.text}</h3>
      <ul className="options">
        {question.options.map((option) => (
          <li
            key={option.id}
            className={`option ${
              selectedOption === option.id ? "selected" : ""
            }`}
            onClick={() => handleAnswer(option.id)}
          >
            <input
              type="radio"
              name="answer"
              id={`option-${option.id}`}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => {}}
            />
            <label htmlFor={`option-${option.id}`} className="option-label">
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
