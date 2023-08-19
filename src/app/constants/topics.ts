const concepts: Concept[] = [
    {
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces that allows developers to create interactive and dynamic web applications. Developed and maintained by Facebook, React has gained widespread adoption in the web development community due to its efficiency and reusability. React follows a component-based architecture, where UI elements are encapsulated into reusable components. This modularity makes it easier to manage complex UI structures and encourages a more organized codebase.",
        urls: [
            {
                title: "React Official Documentation",
                description: "Learn more about React from its official documentation. The documentation provides comprehensive guides, examples, and references to help you get started and become proficient with React.",
                link: "https://reactjs.org/docs/getting-started.html",
                image: "React.png",
            },
        ],
    }
    ,
    {
        title: "React ES6",
        content: "React leverages many features introduced in ECMAScript 2015 (ES6) to enhance the development process and promote cleaner, more readable code. ES6 brings a range of modern JavaScript features that can be effectively utilized in React applications, making development more efficient and enjoyable.",

        urls: [
            {
                title: "ES6 Features",
                description:
                    "Explore ES6 features like arrow functions, destructuring, and more. React leverages many features introduced in ECMAScript 2015 (ES6) to enhance the development process and promote cleaner, more readable code. ES6 brings a range of modern JavaScript features that can be effectively utilized in React applications, making development more efficient and enjoyable.",
                link: "https://www.w3schools.com/js/js_es6.asp",
                image: "React.png",
            },
            {
                title: "JavaScript Destructuring",
                description:
                    "Learn about destructuring in JavaScript and how it can be used to extract values from arrays and objects. Destructuring is a powerful feature that can make your code more concise and readable.",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
                image: "Destructuring.png",
            },
            {
                title: "Arrow Functions",
                description:
                    "Arrow functions provide a concise syntax for writing functions in JavaScript. They are especially useful when writing short, inline functions. Explore how arrow functions work and when to use them.",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
                image: "ArrowFunctions.png",
            },
            // Add more URLs here...
        ],
    }
    ,
    {
        title: "React Rendering HTML",
        content: "Understand how React renders HTML elements. React's efficient rendering process is a key feature that enables developers to build fast and responsive user interfaces.",
        urls: [
            {
                title: "React Rendering Overview",
                description: "Learn about React's rendering process and how it efficiently updates the user interface by using the virtual DOM.",
                link: "https://reactjs.org/docs/rendering-elements.html",
                image: "React.png",
            },
            {
                title: "React Virtual DOM",
                description: "Discover how React's virtual DOM optimizes rendering and updates in the UI. The virtual DOM allows React to update only the necessary parts of the actual DOM, improving performance.",
                link: "https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom",
                image: "VirtualDOM.png",
            },
            {
                title: "Reconciliation Algorithm",
                description: "Learn how React efficiently updates the DOM by reconciling changes. React's reconciliation algorithm ensures that only the necessary changes are applied to the actual DOM, minimizing performance bottlenecks.",
                link: "https://reactjs.org/docs/reconciliation.html",
                image: "Reconciliation.png",
            },
            {
                title: "React Fiber Architecture",
                description: "Explore React's Fiber architecture, an internal reimplementation of the reconciliation algorithm. Fiber enables finer-grained control over the rendering process and supports features like asynchronous rendering.",
                link: "https://reactjs.org/docs/concurrent-mode-intro.html",
                image: "Fiber.png",
            },
            // Add more URLs here...
        ],
    }
    ,
    {
        title: "React JSX",
        content: "JSX is a syntax extension for JavaScript, often used with React to describe what the UI should look like. It allows developers to write declarative UI components using a syntax that resembles HTML, making it easier to visualize and build complex user interfaces.",

        urls: [
            {
                title: "JSX Introduction",
                description: "Introduction to JSX syntax and usage. Learn how JSX enhances the development of user interfaces in React applications.",
                link: "https://reactjs.org/docs/introducing-jsx.html",
                image: "React.png",
            },
            {
                title: "JSX Expressions",
                description: "Explore using expressions within JSX to dynamically render content. JSX allows embedding JavaScript expressions within curly braces to create dynamic UI elements.",
                link: "https://reactjs.org/docs/jsx-in-depth.html#jsx-expressions",
                image: "JSXExpressions.png",
            },
            {
                title: "JSX Attributes",
                description: "Learn how to set attributes and properties in JSX elements. JSX attributes provide a way to pass data and configure components in a declarative manner.",
                link: "https://reactjs.org/docs/jsx-in-depth.html#jsx-attributes",
                image: "JSXAttributes.png",
            },
            {
                title: "JSX and Babel",
                description: "Understand the role of Babel in transforming JSX code into regular JavaScript. JSX code is transpiled by tools like Babel to ensure browser compatibility.",
                link: "https://reactjs.org/docs/jsx-in-depth.html#jsx-and-babel",
                image: "Babel.png",
            },
            // Add more URLs here...
        ],
    }
    ,
    {
        title: "React Components",
        content: "Components are the fundamental building blocks of React applications. They encapsulate UI elements, logic, and behavior into modular and reusable pieces, allowing developers to create complex user interfaces by composing smaller, manageable parts. React components enable a structured and efficient approach to building user interfaces in a declarative manner.",
        urls: [
            {
                title: "Components and Props",
                description: "Learn about React components and their props. This official documentation guide provides detailed explanations of how to create, use, and compose components, along with practical examples and best practices.",
                link: "https://reactjs.org/docs/components-and-props.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Class Components",
        content: "Class components were the original way to write components in React. They are JavaScript classes that extend the `React.Component` class and provide a way to define components using lifecycle methods and state. While functional components have gained prominence due to their simplicity and performance benefits, understanding class components is still valuable for maintaining and working with existing codebases.",
        urls: [
            {
                title: "React Class Components",
                description: "Explore React's class components and their lifecycle methods. This official documentation guide provides detailed explanations of class components, their lifecycle, and how to work with them. While functional components have become more prevalent, understanding class components remains valuable.",
                link: "https://reactjs.org/docs/react-component.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Props",
        content: "Props (short for properties) are a fundamental concept in React that enable communication between parent and child components. They allow data to be passed from a parent component to its child components, allowing for the dynamic and reusable composition of UI elements. Props play a crucial role in creating modular and customizable React applications.",
        urls: [
            {
                title: "Components and Props",
                description: "Learn about React components and their props. This official documentation guide provides detailed explanations of how to pass and use props, along with practical examples and best practices.",
                link: "https://reactjs.org/docs/components-and-props.html",
                image: "React.png",
            },
        ],
    },

    {
        title: "React Events",
        content: "React events provide a way to capture and respond to interactions that occur within your application, such as user clicks, mouse movements, keyboard inputs, and more. React events are similar to standard HTML events but have some key differences that make them more consistent and efficient. Understanding how to handle events in React is crucial for building interactive and responsive user interfaces.",
        urls: [
            {
                title: "Handling Events",
                description: "Learn how to handle events in React components. This official documentation guide provides detailed explanations of event handling, how to bind event handlers, and best practices for handling events in React applications.",
                link: "https://reactjs.org/docs/handling-events.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Conditionals",
        content: "Use conditional statements to control the rendering of components in React applications. Conditionals are essential for building dynamic user interfaces that respond to user interactions and changing data.",

        urls: [
            {
                title: "Conditional Rendering",
                description: "Learn about conditional rendering in React. Conditional rendering allows you to show or hide components based on certain conditions, enabling you to build flexible and interactive UIs.",
                link: "https://reactjs.org/docs/conditional-rendering.html",
                image: "React.png",
            },
            {
                title: "Ternary Operator",
                description: "Discover how to use the ternary operator for simple conditional rendering. The ternary operator is a concise way to conditionally render content based on a single condition.",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
                image: "TernaryOperator.png",
            },
            {
                title: "Conditional Rendering with State",
                description: "Learn how to use React's state to manage dynamic rendering. By changing the state of components, you can trigger re-renders and conditionally display different content.",
                link: "https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class",
                image: "StateRendering.png",
            },
            {
                title: "React Hooks and Conditional Rendering",
                description: "Explore using React Hooks to implement conditional rendering in functional components. Hooks like useState enable you to manage component state and trigger updates.",
                link: "https://reactjs.org/docs/hooks-state.html",
                image: "Hooks.png",
            },
            // Add more URLs here...
        ],
    }
    ,
    {
        title: "React Lists",
        content: "Learn how to render lists of items in React components. Lists are a fundamental aspect of building dynamic user interfaces, enabling you to display collections of data in an organized manner.",

        urls: [
            {
                title: "Lists and Keys",
                description: "Guide to rendering lists in React with keys. Keys help React optimize the rendering process when dealing with dynamically changing lists, and they are essential for maintaining component state.",
                link: "https://reactjs.org/docs/lists-and-keys.html",
                image: "React.png",
            },
            {
                title: "Mapping Over Arrays",
                description: "Explore the concept of mapping over arrays to render list items. By using the map function, you can efficiently generate components for each item in an array.",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
                image: "Mapping.png",
            },
            {
                title: "Conditional Rendering in Lists",
                description: "Learn how to conditionally render items within lists. Combining conditional rendering techniques with list rendering allows you to create dynamic lists with varying content.",
                link: "https://reactjs.org/docs/conditional-rendering.html",
                image: "ConditionalRendering.png",
            },
            {
                title: "Dynamic List Manipulation",
                description: "Explore methods for dynamically manipulating lists in React. Techniques like adding, removing, and updating list items help maintain a dynamic user experience.",
                link: "https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class",
                image: "DynamicManipulation.png",
            },
            // Add more URLs here...
        ],
    }
    ,
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
        content: "Learn how to manage state in larger React applications using Redux. Redux is a predictable state container that helps you manage the state of your application in a consistent and centralized manner.",

        urls: [
            {
                title: "Redux Official Documentation",
                description: "Learn more about Redux for state management. The official Redux documentation provides comprehensive guides, tutorials, and examples to help you understand and implement Redux in your React applications.",
                link: "https://redux.js.org/introduction/getting-started",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Context",
        content:
            "Learn how to manage global state and avoid prop drilling using React Context.",
        urls: [
            {
                title: "React Context",
                description: "Explore React's Context API for state management.",
                link: "https://reactjs.org/docs/context.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Portals",
        content:
            "Understand how to render components outside of their parent hierarchy using React Portals.",
        urls: [
            {
                title: "Portals",
                description:
                    "Guide to using React Portals for rendering outside the DOM hierarchy.",
                link: "https://reactjs.org/docs/portals.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Error Boundaries",
        content:
            "Learn how to handle errors in React components using Error Boundaries.",
        urls: [
            {
                title: "Error Boundaries",
                description:
                    "Guide to using Error Boundaries in React for better error handling.",
                link: "https://reactjs.org/docs/error-boundaries.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Performance Optimization",
        content:
            "Explore techniques to optimize the performance of your React applications.",
        urls: [
            {
                title: "Optimizing Performance",
                description:
                    "Tips and tricks to optimize React application performance.",
                link: "https://reactjs.org/docs/optimizing-performance.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "Server-Side Rendering (SSR) with React",
        content:
            "Learn how to perform Server-Side Rendering using React for improved SEO and initial loading times.",
        urls: [
            {
                title: "Server Rendering",
                description: "Guide to implementing Server-Side Rendering with React.",
                link: "https://reactjs.org/docs/react-dom-server.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Testing",
        content:
            "Discover different testing approaches and tools for testing React components.",
        urls: [
            {
                title: "Testing Overview",
                description: "Overview of testing React components and applications.",
                link: "https://reactjs.org/docs/testing.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Best Practices",
        content:
            "Explore best practices for structuring and organizing React applications.",
        urls: [
            {
                title: "Best Practices",
                description:
                    "Best practices for writing clean and maintainable React code.",
                link: "https://reactjs.org/docs/best-practices.html",
                image: "React.png",
            },
        ],
    },
    {
        title: "React Security",
        content:
            "Learn about common security considerations when developing React applications.",
        urls: [
            {
                title: "Security",
                description:
                    "Guide to React security best practices and considerations.",
                link: "https://reactjs.org/docs/security.html",
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
export default concepts