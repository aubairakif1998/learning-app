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

const concepts: Concept[] = [
  {
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces...",
    urls: [
      {
        title: "React Official Documentation",
        description: "Learn more about React from its official documentation.",
        link: "https://reactjs.org/docs/getting-started.html",
        image: "React.png", // Add the path to your image
      },
    ],
  },
  {
    title: "React ES6",
    content: "Learn how to use modern ES6 features with React.",
    urls: [
      {
        title: "ES6 Features",
        description:
          "Explore ES6 features like arrow functions, destructuring, and more.",
        link: "https://www.w3schools.com/js/js_es6.asp",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Rendering HTML",
    content: "Understand how React renders HTML elements.",
    urls: [
      {
        title: "React Rendering",
        description: "Learn about React's rendering process.",
        link: "https://reactjs.org/docs/rendering-elements.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React JSX",
    content:
      "JSX is a syntax extension for JavaScript, often used with React to describe what the UI should look like...",
    urls: [
      {
        title: "JSX Introduction",
        description: "Introduction to JSX syntax and usage.",
        link: "https://reactjs.org/docs/introducing-jsx.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Components",
    content: "Components are the building blocks of React applications...",
    urls: [
      {
        title: "Components and Props",
        description: "Learn about React components and their props.",
        link: "https://reactjs.org/docs/components-and-props.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Class Components",
    content:
      "Class components were the original way to write components in React...",
    urls: [
      {
        title: "React Class Components",
        description:
          "Explore React's class components and their lifecycle methods.",
        link: "https://reactjs.org/docs/react-component.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Props",
    content: "Props are a way to pass data from parent to child components...",
    urls: [
      {
        title: "Components and Props",
        description: "Learn about React components and their props.",
        link: "https://reactjs.org/docs/components-and-props.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Events",
    content: "React events are named using camelCase instead of lowercase...",
    urls: [
      {
        title: "Handling Events",
        description: "Learn how to handle events in React components.",
        link: "https://reactjs.org/docs/handling-events.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Conditionals",
    content:
      "Use conditional statements to control the rendering of components...",
    urls: [
      {
        title: "Conditional Rendering",
        description: "Learn about conditional rendering in React.",
        link: "https://reactjs.org/docs/conditional-rendering.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Lists",
    content: "Learn how to render lists of items in React components...",
    urls: [
      {
        title: "Lists and Keys",
        description: "Guide to rendering lists in React with keys.",
        link: "https://reactjs.org/docs/lists-and-keys.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Forms",
    content: "Handle form elements and user input in React applications...",
    urls: [
      {
        title: "Forms",
        description: "Guide to handling forms in React.",
        link: "https://reactjs.org/docs/forms.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Router",
    content: "Learn about routing in React applications...",
    urls: [
      {
        title: "React Router",
        description: "Explore React Router for navigation.",
        link: "https://reactrouter.com/web/guides/quick-start",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Memo",
    content: "Optimize functional components using React's memoization...",
    urls: [
      {
        title: "React Memo",
        description:
          "Guide to using React's memoization for performance optimization.",
        link: "https://reactjs.org/docs/react-api.html#reactmemo",
        image: "React.png",
      },
    ],
  },
  {
    title: "React CSS Styling",
    content: "Learn how to apply CSS styling to React components...",
    urls: [
      {
        title: "Styling and CSS",
        description: "Guide to styling React components with CSS.",
        link: "https://reactjs.org/docs/faq-styling.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Sass Styling",
    content: "Explore using Sass for styling React components...",
    urls: [
      {
        title: "Styling and CSS",
        description: "Guide to styling React components with CSS.",
        link: "https://reactjs.org/docs/faq-styling.html",
        image: "React.png",
      },
      {
        title: "Sass Official Documentation",
        description: "Learn more about Sass for advanced styling.",
        link: "https://sass-lang.com/documentation",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Hooks - useState & useEffect",
    content:
      "Learn about React's functional component hooks for state and side effects...",
    urls: [
      {
        title: "Hooks at a Glance",
        description:
          "Overview of React hooks, including useState and useEffect.",
        link: "https://reactjs.org/docs/hooks-overview.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React Hooks - useReducer & useRef",
    content:
      "Explore more hooks: useReducer for complex state and useRef for accessing DOM elements...",
    urls: [
      {
        title: "Hooks API Reference",
        description: "Detailed reference for React hooks.",
        link: "https://reactjs.org/docs/hooks-reference.html",
        image: "React.png",
      },
    ],
  },
  {
    title: "React State Management with Redux",
    content:
      "Learn how to manage state in larger React applications using Redux...",
    urls: [
      {
        title: "Redux Official Documentation",
        description: "Learn more about Redux for state management.",
        link: "https://redux.js.org/introduction/getting-started",
        image: "React.png",
      },
    ],
  },
  // Add more concepts here
];
interface Url {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface Concept {
  title: string;
  content: string;
  urls: Url[];
}
const Documentation: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<number>(0);

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const userData = res.data.data as User; // Cast userData to User type
        // Dispatching the setUser action with user data
        dispatch(setUser(userData));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails(); // Fetch user details when the component mounts
  }, [dispatch]);

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
