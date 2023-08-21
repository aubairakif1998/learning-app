// Content.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "@/app/components/Content.css"; // Import the Content CSS module

interface Url {
  image: string;
  title: string;
  link: string;
  description: string;
}

interface Concept {
  title: string;
  content: string;
  urls: Url[];
}

interface ContentProps {
  concept: Concept;
}

const Content: React.FC<ContentProps> = ({ concept }) => {
  const router = useRouter();

  return (
    <>
      <h1 className="heading">Learning and evaluating platform</h1>
      <div className="content">
        <h2>{concept.title}</h2>
        <p>{concept.content}</p>
        <div className="urls">
          {concept.urls.length > 0 && (
            <div className="url">
              <div className="urlImage">
                <img src={concept.urls[0].image} alt={concept.urls[0].title} />
              </div>
              <div className="urlDetails">
                <a
                  href={concept.urls[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {concept.urls[0].title}
                </a>
                <p>{concept.urls[0].description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="buttons">
          <a
            href={concept.urls[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="learnMoreButton"
          >
            Learn More
          </a>
          <button className="startQuizButton">
            <a href="/quiz"> Start Quiz</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
