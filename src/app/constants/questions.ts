interface Question {
    text: string;
    options: Option[];
    correctOption: string;
}
interface Option {
    id: string;
    text: string;
}


const questions: Question[] = [
    {
        text: "What is the purpose of the 'useMemo' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To perform side effects in functional components" },
            { id: "3", text: "To optimize performance by memoizing values" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to pass data down the component tree without manually passing props at each level?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "Hooks" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'dangerouslySetInnerHTML' prop?",
        options: [
            {
                id: "1",
                text: "It allows embedding external content directly in the component",
            },
            { id: "2", text: "It renders HTML content from a variable" },
            { id: "3", text: "It renders HTML content as static text" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the recommended approach to optimize the performance of React components that render large lists?",
        options: [
            { id: "1", text: "Using the 'pure' higher-order component (HOC)" },
            { id: "2", text: "Using the 'memo' function to memoize components" },
            { id: "3", text: "Using the 'shouldComponentUpdate' method" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the difference between controlled and uncontrolled components?",
        options: [
            {
                id: "1",
                text: "Controlled components are managed by Redux, while uncontrolled components are not",
            },
            {
                id: "2",
                text: "Controlled components have their state managed by React, while uncontrolled components manage their own state",
            },
            {
                id: "3",
                text: "Controlled components are written in functional style, while uncontrolled components use class syntax",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is used to modify the state of a component in React?",
        options: [
            { id: "1", text: "this.updateState()" },
            { id: "2", text: "this.setState()" },
            { id: "3", text: "this.modifyState()" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the purpose of 'shouldComponentUpdate' method?",
        options: [
            {
                id: "1",
                text: "It is used to check if a component should update or not",
            },
            { id: "2", text: "It is used to force a component to update" },
            { id: "3", text: "It is used to fetch data from an API" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useState' hook in React?",
        options: [
            { id: "1", text: "To fetch data from an API" },
            {
                id: "2",
                text: "To manage and update the state of a functional component",
            },
            { id: "3", text: "To define the initial props of a component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which lifecycle method is invoked before a component receives new props?",
        options: [
            { id: "1", text: "componentDidUpdate" },
            { id: "2", text: "shouldComponentUpdate" },
            { id: "3", text: "componentWillReceiveProps" },
        ],
        correctOption: "3",
    },
    {
        text: "What is the purpose of 'defaultProps' in a React component?",
        options: [
            { id: "1", text: "It defines the default rendering of the component" },
            { id: "2", text: "It sets the default values for the component's props" },
            { id: "3", text: "It handles default event handlers for the component" },
        ],
        correctOption: "2",
    }, {
        text: "What is the purpose of the 'useContext' hook in React?",
        options: [
            {
                id: "1",
                text: "To manage state in functional components",
            },
            {
                id: "2",
                text: "To handle navigation in functional components",
            },
            {
                id: "3",
                text: "To consume context values in functional components",
            },
        ],
        correctOption: "3",
    },
    {
        text: "Explain the concept of 'controlled components' and 'uncontrolled components' in React forms.",
        options: [
            {
                id: "1",
                text: "'Controlled components' are components that manage their own state, while 'uncontrolled components' rely on external state management",
            },
            {
                id: "2",
                text: "'Controlled components' are components that are not managed by the React component tree, while 'uncontrolled components' are managed by React",
            },
            {
                id: "3",
                text: "'Controlled components' are components that rely on props for data, while 'uncontrolled components' manage their own state internally",
            },
        ],
        correctOption: "1",
    },
    {
        text: "What is the role of the 'dangerouslySetInnerHTML' prop in React?",
        options: [
            {
                id: "1",
                text: "It is used to embed external content directly in the component",
            },
            {
                id: "2",
                text: "It is used to render HTML content from a variable",
            },
            {
                id: "3",
                text: "It is used to render HTML content as static text",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Explain the concept of 'render props' in React.",
        options: [
            {
                id: "1",
                text: "'Render props' is a technique to pass a function as a prop to share code between components",
            },
            {
                id: "2",
                text: "'Render props' is a way to define default rendering for a component",
            },
            {
                id: "3",
                text: "'Render props' is a method to define the order of rendering for child components",
            },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useImperativeHandle' hook in React?",
        options: [
            {
                id: "1",
                text: "It is used to access DOM elements directly in functional components",
            },
            {
                id: "2",
                text: "It is used to share props between parent and child components",
            },
            {
                id: "3",
                text: "It is used to customize the instance value exposed to parent components when using 'ref'",
            },
        ],
        correctOption: "3",
    },
    {
        text: "Explain the concept of 'code splitting' in React applications.",
        options: [
            {
                id: "1",
                text: "'Code splitting' is a technique to divide the application's code into smaller bundles that can be loaded on-demand",
            },
            {
                id: "2",
                text: "'Code splitting' refers to organizing code using comments and breakpoints for debugging purposes",
            },
            {
                id: "3",
                text: "'Code splitting' is a method to optimize the rendering performance of components",
            },
        ],
        correctOption: "1",
    }, {
        text: "Which React feature is used to improve the performance of rendering lists?",
        options: [
            { id: "1", text: "Virtual DOM" },
            { id: "2", text: "React Router" },
            { id: "3", text: "Redux" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the main advantage of using React functional components?",
        options: [
            {
                id: "1",
                text: "They offer better performance compared to class components",
            },
            { id: "2", text: "They provide more advanced lifecycle methods" },
            {
                id: "3",
                text: "They have a simpler syntax and better support for hooks",
            },
        ],
        correctOption: "3",
    },
    {
        text: "In React, what is the purpose of the 'map' function when rendering lists?",
        options: [
            { id: "1", text: "It modifies the original array of data" },
            { id: "2", text: "It filters the elements of the list" },
            {
                id: "3",
                text: "It transforms each item of the list into a new element",
            },
        ],
        correctOption: "3",
    },
    {
        text: "What is the purpose of React's 'render' method in a class component?",
        options: [
            { id: "1", text: "To define the initial state of the component" },
            { id: "2", text: "To update the component's state" },
            { id: "3", text: "To render the component's UI" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to manage and share stateful logic between components?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Hooks" },
            { id: "3", text: "Redux" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            { id: "1", text: "To declare state variables in functional components" },
            { id: "2", text: "To manage side effects in functional components" },
            { id: "3", text: "To create custom hooks for reusable logic" },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is used to update the state of a component in React?",
        options: [
            { id: "1", text: "this.setState()" },
            { id: "2", text: "this.updateState()" },
            { id: "3", text: "this.modifyState()" },
        ],
        correctOption: "1",
    },
    {
        text: "In React, what is the role of the 'key' prop when rendering lists?",
        options: [
            {
                id: "1",
                text: "It helps to identify the position of the element in the list",
            },
            {
                id: "2",
                text: "It provides a unique identifier for each element in the list",
            },
            {
                id: "3",
                text: "It specifies the order in which elements should be displayed",
            },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            { id: "1", text: "To declare state variables in functional components" },
            { id: "2", text: "To manage side effects in functional components" },
            { id: "3", text: "To create custom hooks for reusable logic" },
        ],
        correctOption: "2",
    }, {
        text: "What is the purpose of the 'useMemo' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To perform side effects in functional components" },
            { id: "3", text: "To optimize performance by memoizing values" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to pass data down the component tree without manually passing props at each level?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "Hooks" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the recommended approach to optimize the performance of React components that render large lists?",
        options: [
            { id: "1", text: "Using the 'pure' higher-order component (HOC)" },
            { id: "2", text: "Using the 'memo' function to memoize components" },
            { id: "3", text: "Using the 'shouldComponentUpdate' method" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the purpose of the 'bind' method?",
        options: [
            { id: "1", text: "It binds event handlers to components" },
            { id: "2", text: "It binds functions to the global scope" },
            { id: "3", text: "It binds data to the state of a component" },
        ],
        correctOption: "1",
    },
    {
        text: "Which tool can be used for code splitting in React applications to improve performance?",
        options: [
            { id: "1", text: "Webpack" },
            { id: "2", text: "Babel" },
            { id: "3", text: "ESLint" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useState' hook in React?",
        options: [
            { id: "1", text: "To fetch data from an API" },
            {
                id: "2",
                text: "To manage and update the state of a functional component",
            },
            { id: "3", text: "To define the initial props of a component" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the role of the 'key' prop when rendering lists?",
        options: [
            {
                id: "1",
                text: "It helps to identify the position of the element in the list",
            },
            {
                id: "2",
                text: "It provides a unique identifier for each element in the list",
            },
            {
                id: "3",
                text: "It specifies the order in which elements should be displayed",
            },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            { id: "1", text: "To declare state variables in functional components" },
            { id: "2", text: "To manage side effects in functional components" },
            { id: "3", text: "To create custom hooks for reusable logic" },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is used to update the state of a component in React?",
        options: [
            { id: "1", text: "this.setState()" },
            { id: "2", text: "this.updateState()" },
            { id: "3", text: "this.modifyState()" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'render' method in a class component?",
        options: [
            { id: "1", text: "To define the initial state of the component" },
            { id: "2", text: "To update the component's state" },
            { id: "3", text: "To render the component's UI" },
        ],
        correctOption: "3",
    }, {
        text: "What is the purpose of the 'exact' prop in React Router's Route component?",
        options: [
            { id: "1", text: "It matches the exact path provided in the URL" },
            { id: "2", text: "It specifies a strict comparison for path matching" },
            { id: "3", text: "It is used to define a default route" },
        ],
        correctOption: "1",
    },
    {
        text: "Which lifecycle method is used to fetch data from an API in a class component?",
        options: [
            { id: "1", text: "componentDidMount" },
            { id: "2", text: "componentWillUpdate" },
            { id: "3", text: "componentWillUnmount" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'key' prop when rendering lists in React?",
        options: [
            { id: "1", text: "It is used for styling list items" },
            { id: "2", text: "It determines the order of elements in the list" },
            { id: "3", text: "It helps React optimize the rendering of the list" },
        ],
        correctOption: "3",
    },
    {
        text: "Which hook is used to manage and share stateful logic between components?",
        options: [
            { id: "1", text: "useMemo" },
            { id: "2", text: "useContext" },
            { id: "3", text: "useReducer" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'children' prop in React components?",
        options: [
            { id: "1", text: "It defines the child components of a parent component" },
            { id: "2", text: "It represents the HTML content of a component" },
            { id: "3", text: "It passes additional data to the component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is commonly used to perform shallow comparisons of props and state?",
        options: [
            { id: "1", text: "shouldComponentUpdate" },
            { id: "2", text: "componentDidUpdate" },
            { id: "3", text: "componentWillReceiveProps" },
        ],
        correctOption: "1",
    },
    {
        text: "Which tool can be used to inspect and debug React components and their state?",
        options: [
            { id: "1", text: "Redux DevTools" },
            { id: "2", text: "React Developer Tools" },
            { id: "3", text: "Webpack Inspector" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'useMemo' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To perform side effects in functional components" },
            { id: "3", text: "To optimize performance by memoizing values" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to pass data down the component tree without manually passing props at each level?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "Hooks" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the recommended approach to optimize the performance of React components that render large lists?",
        options: [
            { id: "1", text: "Using the 'pure' higher-order component (HOC)" },
            { id: "2", text: "Using the 'memo' function to memoize components" },
            { id: "3", text: "Using the 'shouldComponentUpdate' method" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of React's 'dangerouslySetInnerHTML' prop?",
        options: [
            {
                id: "1",
                text: "It allows embedding external content directly in the component",
            },
            { id: "2", text: "It renders HTML content from a variable" },
            { id: "3", text: "It renders HTML content as static text" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'React.memo' function?",
        options: [
            {
                id: "1",
                text: "It is used to memoize functions and prevent unnecessary re-renders",
            },
            {
                id: "2",
                text: "It is used to create new components with optimized rendering performance",
            },
            {
                id: "3",
                text: "It is used to handle asynchronous operations in functional components",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Explain the concept of the 'useRef' hook in React.",
        options: [
            {
                id: "1",
                text: "The 'useRef' hook is used to manage state in functional components",
            },
            {
                id: "2",
                text: "The 'useRef' hook is used to reference external libraries in functional components",
            },
            {
                id: "3",
                text: "The 'useRef' hook is used to reference DOM elements in functional components",
            },
        ],
        correctOption: "3",
    }, {
        text: "What is the purpose of the 'useMemo' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To perform side effects in functional components" },
            { id: "3", text: "To optimize performance by memoizing values" },
        ],
        correctOption: "3",
    },
    {
        text: "What is the difference between 'props' and 'state' in React?",
        options: [
            {
                id: "1",
                text: "'Props' are immutable and used to pass data from parent to child components, while 'state' is mutable and represents internal component data",
            },
            {
                id: "2",
                text: "'Props' and 'state' are interchangeable terms used to define component data",
            },
            {
                id: "3",
                text: "'Props' and 'state' both refer to the same concept of storing component data",
            },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'React.Fragment' component in React?",
        options: [
            {
                id: "1",
                text: "It creates a new React component with a specified name",
            },
            {
                id: "2",
                text: "It is used to group multiple elements without adding an additional DOM node",
            },
            {
                id: "3",
                text: "It represents a single element in the React component tree",
            },
        ],
        correctOption: "2",
    },
    {
        text: "What are React hooks?",
        options: [
            {
                id: "1",
                text: "Hooks are functions that handle asynchronous operations in React components",
            },
            {
                id: "2",
                text: "Hooks are a feature that lets you use state and other React features without writing a class",
            },
            {
                id: "3",
                text: "Hooks are built-in HTML elements used in React templates",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Explain the concept of 'lifting state up' in React.",
        options: [
            {
                id: "1",
                text: "'Lifting state up' refers to the process of moving state management from child components to their parent component, allowing data to be shared among components",
            },
            {
                id: "2",
                text: "'Lifting state up' is a term used for optimizing rendering performance of functional components",
            },
            {
                id: "3",
                text: "'Lifting state up' refers to the process of passing props from parent components to child components",
            },
        ],
        correctOption: "1",
    },
    {
        text: "What is the significance of the 'key' prop when rendering dynamic lists?",
        options: [
            { id: "1", text: "It helps in styling list items" },
            { id: "2", text: "It identifies the position of the element in the list" },
            {
                id: "3",
                text: "It assists React in efficiently updating and reordering list items",
            },
        ],
        correctOption: "3",
    },
    {
        text: "How does React handle the order of component updates?",
        options: [
            {
                id: "1",
                text: "React updates components in the order they were initially mounted",
            },
            {
                id: "2",
                text: "React updates components from the top of the component tree to the bottom",
            },
            {
                id: "3",
                text: "React updates components randomly based on the order they were clicked",
            },
        ],
        correctOption: "2",
    },
    {
        text: "What is the significance of the 'useReducer' hook in React?",
        options: [
            { id: "1", text: "It is used to manage asynchronous operations" },
            { id: "2", text: "It provides an alternative to 'useState' for managing state" },
            { id: "3", text: "It is used to control component rendering behavior" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'forwardRef' function in React?",
        options: [
            { id: "1", text: "To create reusable custom hooks" },
            { id: "2", text: "To forward props from child to parent components" },
            {
                id: "3",
                text: "To pass a ref from a parent component to a child component",
            },
        ],
        correctOption: "3",
    },
    {
        text: "What is the recommended approach for handling form submissions in React?",
        options: [
            { id: "1", text: "Use the 'submit' event of the form element" },
            {
                id: "2",
                text: "Use the 'onClick' event of the submit button",
            },
            {
                id: "3",
                text: "Use the 'onSubmit' event of the form element",
            },
        ],
        correctOption: "3",
    },
    {
        text: "What is the purpose of the 'useLayoutEffect' hook in React?",
        options: [
            {
                id: "1",
                text: "It is used to manage layout changes in a React component",
            },
            {
                id: "2",
                text: "It is used to perform side effects after rendering the component",
            },
            {
                id: "3",
                text: "It is used to perform side effects before the browser layout is updated",
            },
        ],
        correctOption: "3",
    }, {
        text: "What is the purpose of the 'memo' function in React?",
        options: [
            { id: "1", text: "To create new components" },
            { id: "2", text: "To optimize performance by memoizing components" },
            { id: "3", text: "To manage state in functional components" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the purpose of the 'useCallback' hook?",
        options: [
            { id: "1", text: "To manage and update state in functional components" },
            { id: "2", text: "To perform asynchronous operations in functional components" },
            { id: "3", text: "To memoize functions and prevent unnecessary re-renders" },
        ],
        correctOption: "3",
    },
    {
        text: "Which lifecycle method is invoked immediately before a component is re-rendered?",
        options: [
            { id: "1", text: "componentWillUpdate" },
            { id: "2", text: "componentDidUpdate" },
            { id: "3", text: "shouldComponentUpdate" },
        ],
        correctOption: "3",
    },
    {
        text: "What is the purpose of the 'StrictMode' component in React?",
        options: [
            { id: "1", text: "To enforce strict coding guidelines" },
            { id: "2", text: "To provide better debugging tools" },
            { id: "3", text: "To highlight potential problems in an application" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to manage state across multiple components without prop drilling?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "React Router" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'componentDidCatch' lifecycle method in React?",
        options: [
            { id: "1", text: "To catch errors in asynchronous code" },
            { id: "2", text: "To handle errors in rendering" },
            { id: "3", text: "To manage API requests" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the role of the 'shouldComponentUpdate' method?",
        options: [
            { id: "1", text: "To determine if a component should update or not" },
            { id: "2", text: "To trigger a component to re-render immediately" },
            { id: "3", text: "To validate the props and state of a component" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useContext' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To handle navigation in functional components" },
            { id: "3", text: "To consume context values in functional components" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to handle forms and user input?",
        options: [
            { id: "1", text: "useState" },
            { id: "2", text: "useForm" },
            { id: "3", text: "useInput" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useRef' hook in React?",
        options: [
            { id: "1", text: "To reference external libraries in functional components" },
            { id: "2", text: "To reference DOM elements in functional components" },
            { id: "3", text: "To manage state in functional components" },
        ],
        correctOption: "2",
    }, {
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
    {
        text: "What does JSX stand for?",
        options: [
            { id: "1", text: "JavaScript XML" },
            { id: "2", text: "Java Standard Extension" },
            { id: "3", text: "JSON XML Syntax" },
        ],
        correctOption: "1",
    },
    {
        text: "Which hook is used to manage side effects in a functional component?",
        options: [
            { id: "1", text: "useState" },
            { id: "2", text: "useEffect" },
            { id: "3", text: "useContext" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of React's virtual DOM?",
        options: [
            { id: "1", text: "To directly manipulate the actual DOM" },
            { id: "2", text: "To improve SEO" },
            { id: "3", text: "To efficiently update the UI" },
        ],
        correctOption: "3",
    },
    {
        text: "Which method is called when a component is being removed from the DOM?",
        options: [
            { id: "1", text: "componentWillUnmount" },
            { id: "2", text: "componentWillUpdate" },
            { id: "3", text: "componentDidMount" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React Router?",
        options: [
            { id: "1", text: "To manage state in React applications" },
            { id: "2", text: "To optimize rendering performance" },
            { id: "3", text: "To handle navigation in React applications" },
        ],
        correctOption: "3",
    },
    {
        text: "Which lifecycle method is used to fetch data from an API in a class component?",
        options: [
            { id: "1", text: "componentDidMount" },
            { id: "2", text: "componentWillUpdate" },
            { id: "3", text: "componentWillUnmount" },
        ],
        correctOption: "1",
    },
    {
        text: "In React, what is the purpose of the 'key' prop when rendering lists of elements?",
        options: [
            { id: "1", text: "It provides a unique identifier for the component" },
            { id: "2", text: "It determines the order of elements in the list" },
            { id: "3", text: "It helps React optimize the rendering of the list" },
        ],
        correctOption: "3",
    },
    {
        text: "Which hook is used to manage and share stateful logic between components?",
        options: [
            { id: "1", text: "useMemo" },
            { id: "2", text: "useContext" },
            { id: "3", text: "useReducer" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'children' prop in React components?",
        options: [
            {
                id: "1",
                text: "It defines the child components of a parent component",
            },
            { id: "2", text: "It represents the HTML content of a component" },
            { id: "3", text: "It passes additional data to the component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which lifecycle method is commonly used to perform shallow comparisons of props and state?",
        options: [
            { id: "1", text: "shouldComponentUpdate" },
            { id: "2", text: "componentDidUpdate" },
            { id: "3", text: "componentWillReceiveProps" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'exact' prop in React Router's Route component?",
        options: [
            { id: "1", text: "It matches the exact path provided in the URL" },
            { id: "2", text: "It specifies a strict comparison for path matching" },
            { id: "3", text: "It is used to define a default route" },
        ],
        correctOption: "1",
    },
    {
        text: "Which CSS-in-JS library is commonly used with React for styling components?",
        options: [
            { id: "1", text: "Sass" },
            { id: "2", text: "Styled Components" },
            { id: "3", text: "Bootstrap" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'component' prop in React Router's Route component?",
        options: [
            {
                id: "1",
                text: "It specifies the component to be rendered when the path matches",
            },
            { id: "2", text: "It defines the path for the component" },
            { id: "3", text: "It provides additional metadata for the route" },
        ],
        correctOption: "1",
    },
    {
        text: "In React, what is the recommended way to update the state based on the previous state?",
        options: [
            { id: "1", text: "Using the setState method without any callback" },
            {
                id: "2",
                text: "Using the setState method with a function as an argument",
            },
            {
                id: "3",
                text: "Using the spread operator to modify the state directly",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Which hook is used to perform code cleanup or side effects when a component unmounts?",
        options: [
            { id: "1", text: "useEffect" },
            { id: "2", text: "useCleanup" },
            { id: "3", text: "useUnmount" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'dangerouslySetInnerHTML' prop?",
        options: [
            {
                id: "1",
                text: "It allows embedding external content directly in the component",
            },
            { id: "2", text: "It renders HTML content from a variable" },
            { id: "3", text: "It renders HTML content as static text" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is a higher-order component (HOC)?",
        options: [
            { id: "1", text: "A component that only renders other components" },
            {
                id: "2",
                text: "A component that wraps another component to provide additional functionality",
            },
            { id: "3", text: "A component that only handles state management" },
        ],
        correctOption: "2",
    },
    {
        text: "Which tool can be used to inspect and debug React components and their state?",
        options: [
            { id: "1", text: "Redux DevTools" },
            { id: "2", text: "React Developer Tools" },
            { id: "3", text: "Webpack Inspector" },
        ],
        correctOption: "2",
    },

    {
        text: "What is the purpose of React's 'key' prop when rendering dynamic lists?",
        options: [
            { id: "1", text: "It is used for styling list items" },
            { id: "2", text: "It is required for list items to render properly" },
            {
                id: "3",
                text: "It helps React identify which items have changed, added, or removed",
            },
        ],
        correctOption: "3",
    },
    {
        text: "Which method is called right after a component is rendered for the first time?",
        options: [
            { id: "1", text: "componentDidMount" },
            { id: "2", text: "componentWillMount" },
            { id: "3", text: "componentRendered" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'exact' prop in React Router's NavLink component?",
        options: [
            { id: "1", text: "It matches the exact path provided in the URL" },
            { id: "2", text: "It specifies a strict comparison for path matching" },
            { id: "3", text: "It is used to define a default route" },
        ],
        correctOption: "1",
    }, {
        text: "Which React feature is used to manage state across multiple components without prop drilling?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "Mobx" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'useState' hook?",
        options: [
            { id: "1", text: "To fetch data from an API" },
            {
                id: "2",
                text: "To manage and update the state of a functional component",
            },
            { id: "3", text: "To define the initial props of a component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which library is commonly used for state management in React applications?",
        options: [
            { id: "1", text: "React Router" },
            { id: "2", text: "Redux" },
            { id: "3", text: "React Context" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'dispatch' function in Redux?",
        options: [
            { id: "1", text: "To update the component's props" },
            { id: "2", text: "To manage side effects in functional components" },
            { id: "3", text: "To send an action to update the state" },
        ],
        correctOption: "3",
    },
    {
        text: "What is the main advantage of using Redux for state management?",
        options: [
            { id: "1", text: "It simplifies component rendering" },
            { id: "2", text: "It improves SEO for React applications" },
            { id: "3", text: "It provides a centralized store for state" },
        ],
        correctOption: "3",
    },
    {
        text: "In Redux, what is an 'action'?",
        options: [
            { id: "1", text: "A function that directly updates the state" },
            { id: "2", text: "An object that describes a state change" },
            { id: "3", text: "A callback used to handle asynchronous operations" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'connect' function in Redux?",
        options: [
            { id: "1", text: "To connect the Redux store to a React component" },
            { id: "2", text: "To create a new Redux store instance" },
            { id: "3", text: "To dispatch actions to the Redux store" },
        ],
        correctOption: "1",
    },
    {
        text: "Which Redux middleware is commonly used for handling asynchronous actions?",
        options: [
            { id: "1", text: "Redux Thunk" },
            { id: "2", text: "Redux Saga" },
            { id: "3", text: "Redux Promise" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useSelector' hook in React Redux?",
        options: [
            { id: "1", text: "To define the initial state of a component" },
            { id: "2", text: "To select specific data from the Redux store" },
            { id: "3", text: "To dispatch actions to update the state" },
        ],
        correctOption: "2",
    },
    {
        text: "Which Redux middleware is used to handle side effects as generators?",
        options: [
            { id: "1", text: "Redux Thunk" },
            { id: "2", text: "Redux Saga" },
            { id: "3", text: "Redux Promise" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the difference between controlled and uncontrolled components?",
        options: [
            {
                id: "1",
                text: "Controlled components are managed by Redux, while uncontrolled components are not",
            },
            {
                id: "2",
                text: "Controlled components have their state managed by React, while uncontrolled components manage their own state",
            },
            {
                id: "3",
                text: "Controlled components are written in functional style, while uncontrolled components use class syntax",
            },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is used to modify the state of a component in React?",
        options: [
            { id: "1", text: "this.updateState()" },
            { id: "2", text: "this.setState()" },
            { id: "3", text: "this.modifyState()" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the purpose of 'shouldComponentUpdate' method?",
        options: [
            {
                id: "1",
                text: "It is used to check if a component should update or not",
            },
            { id: "2", text: "It is used to force a component to update" },
            { id: "3", text: "It is used to fetch data from an API" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useState' hook in React?",
        options: [
            { id: "1", text: "To fetch data from an API" },
            {
                id: "2",
                text: "To manage and update the state of a functional component",
            },
            { id: "3", text: "To define the initial props of a component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which lifecycle method is invoked before a component receives new props?",
        options: [
            { id: "1", text: "componentDidUpdate" },
            { id: "2", text: "shouldComponentUpdate" },
            { id: "3", text: "componentWillReceiveProps" },
        ],
        correctOption: "3",
    },
    {
        text: "What is the purpose of 'defaultProps' in a React component?",
        options: [
            { id: "1", text: "It defines the default rendering of the component" },
            { id: "2", text: "It sets the default values for the component's props" },
            { id: "3", text: "It handles default event handlers for the component" },
        ],
        correctOption: "2",
    },
    {
        text: "Which React feature is used to improve the performance of rendering lists?",
        options: [
            { id: "1", text: "Virtual DOM" },
            { id: "2", text: "React Router" },
            { id: "3", text: "Redux" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the main advantage of using React functional components?",
        options: [
            {
                id: "1",
                text: "They offer better performance compared to class components",
            },
            { id: "2", text: "They provide more advanced lifecycle methods" },
            {
                id: "3",
                text: "They have a simpler syntax and better support for hooks",
            },
        ],
        correctOption: "3",
    },
    {
        text: "In React, what is the purpose of the 'map' function when rendering lists?",
        options: [
            { id: "1", text: "It modifies the original array of data" },
            { id: "2", text: "It filters the elements of the list" },
            {
                id: "3",
                text: "It transforms each item of the list into a new element",
            },
        ],
        correctOption: "3",
    },
    // ... (Previous questions)

    {
        text: "What is the purpose of the 'useMemo' hook in React?",
        options: [
            { id: "1", text: "To manage state in functional components" },
            { id: "2", text: "To perform side effects in functional components" },
            { id: "3", text: "To optimize performance by memoizing values" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to pass data down the component tree without manually passing props at each level?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Redux" },
            { id: "3", text: "Hooks" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'dangerouslySetInnerHTML' prop?",
        options: [
            {
                id: "1",
                text: "It allows embedding external content directly in the component",
            },
            { id: "2", text: "It renders HTML content from a variable" },
            { id: "3", text: "It renders HTML content as static text" },
        ],
        correctOption: "2",
    },
    {
        text: "What is the recommended approach to optimize the performance of React components that render large lists?",
        options: [
            { id: "1", text: "Using the 'pure' higher-order component (HOC)" },
            { id: "2", text: "Using the 'memo' function to memoize components" },
            { id: "3", text: "Using the 'shouldComponentUpdate' method" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the purpose of the 'bind' method?",
        options: [
            { id: "1", text: "It binds event handlers to components" },
            { id: "2", text: "It binds functions to the global scope" },
            { id: "3", text: "It binds data to the state of a component" },
        ],
        correctOption: "1",
    },
    {
        text: "Which tool can be used for code splitting in React applications to improve performance?",
        options: [
            { id: "1", text: "Webpack" },
            { id: "2", text: "Babel" },
            { id: "3", text: "ESLint" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of the 'useState' hook in React?",
        options: [
            { id: "1", text: "To fetch data from an API" },
            {
                id: "2",
                text: "To manage and update the state of a functional component",
            },
            { id: "3", text: "To define the initial props of a component" },
        ],
        correctOption: "2",
    },
    {
        text: "In React, what is the role of the 'key' prop when rendering lists?",
        options: [
            {
                id: "1",
                text: "It helps to identify the position of the element in the list",
            },
            {
                id: "2",
                text: "It provides a unique identifier for each element in the list",
            },
            {
                id: "3",
                text: "It specifies the order in which elements should be displayed",
            },
        ],
        correctOption: "2",
    },
    {
        text: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            { id: "1", text: "To declare state variables in functional components" },
            { id: "2", text: "To manage side effects in functional components" },
            { id: "3", text: "To create custom hooks for reusable logic" },
        ],
        correctOption: "2",
    },
    {
        text: "Which method is used to update the state of a component in React?",
        options: [
            { id: "1", text: "this.setState()" },
            { id: "2", text: "this.updateState()" },
            { id: "3", text: "this.modifyState()" },
        ],
        correctOption: "1",
    },
    {
        text: "What is the purpose of React's 'render' method in a class component?",
        options: [
            { id: "1", text: "To define the initial state of the component" },
            { id: "2", text: "To update the component's state" },
            { id: "3", text: "To render the component's UI" },
        ],
        correctOption: "3",
    },
    {
        text: "Which React feature is used to manage and share stateful logic between components?",
        options: [
            { id: "1", text: "Context API" },
            { id: "2", text: "Hooks" },
            { id: "3", text: "Redux" },
        ],
        correctOption: "2",
    },
    // Add more questions here
];
let questionSetIndex = 0;
let shuffledQuestionSets: Question[][] = [];

function shuffleArray(question: Question[]) {
    for (let i = question.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question[i], question[j]] = [question[j], question[i]];
    }
    return question;
}

function getRandomQuestions() {
    if (questionSetIndex === 0 || questionSetIndex % 5 === 0) {
        // Shuffle questions and create a new set
        shuffledQuestionSets.push(shuffleArray([...questions]));
    }

    const currentSetIndex = questionSetIndex % 5;
    questionSetIndex++;

    return shuffledQuestionSets[currentSetIndex].slice(0, 10);
}

const randomQuestions = getRandomQuestions();
export default randomQuestions 