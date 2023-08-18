import React from "react";
import "@/app/components/Content.css"; // Import the Content CSS module
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <div className="content">
      <h2>{concept.title}</h2>
      <p>{concept.content}</p>
      <div className="urls">
        {concept.urls.map((url, index) => (
          <div key={index} className="url">
            <div className="urlImage">
              <img src={url.image} alt={url.title} />
            </div>
            <div className="urlDetails">
              <a href={url.link} target="_blank" rel="noopener noreferrer">
                {url.title}
              </a>
              <p>{url.description}</p>
              <a
                href={url.link}
                target="_blank"
                rel="noopener noreferrer"
                className="learnMoreButton"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="startQuizButton">
        <a href="/quiz"> Start Quiz</a>
      </button>
    </div>
  );
};

export default Content;
