import { Lesson, Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-steps',
    title: 'First Steps',
    description: 'Created your first React component!',
    icon: '🏅',
    condition: {
      type: 'lesson-complete',
      target: 'intro-components'
    }
  },
  {
    id: 'jsx-ninja',
    title: 'JSX Ninja',
    description: 'Mastered JSX syntax and expressions!',
    icon: '⚡',
    condition: {
      type: 'lesson-complete',
      target: 'jsx-expressions'
    }
  },
  {
    id: 'props-master',
    title: 'Props Master',
    description: 'Conquered component props!',
    icon: '🏅',
    condition: {
      type: 'lesson-complete',
      target: 'component-props'
    }
  },
  {
    id: 'state-wizard',
    title: 'State Wizard',
    description: 'Unlocked the power of React state!',
    icon: '⭐',
    condition: {
      type: 'lesson-complete',
      target: 'state-basics'
    }
  },
  {
    id: 'event-handler',
    title: 'Event Handler',
    description: 'Mastered React event handling!',
    icon: '🎯',
    condition: {
      type: 'lesson-complete',
      target: 'event-handling'
    }
  },
  {
    id: 'condition-master',
    title: 'Condition Master',
    description: 'Conquered conditional rendering!',
    icon: '🔀',
    condition: {
      type: 'lesson-complete',
      target: 'conditional-rendering'
    }
  },
  {
    id: 'list-warrior',
    title: 'List Warrior',
    description: 'Mastered dynamic lists and keys!',
    icon: '📋',
    condition: {
      type: 'lesson-complete',
      target: 'dynamic-lists'
    }
  },
  {
    id: 'form-master',
    title: 'Form Master',
    description: 'Built awesome interactive forms!',
    icon: '📝',
    condition: {
      type: 'lesson-complete',
      target: 'controlled-components'
    }
  },
  {
    id: 'effect-specialist',
    title: 'Effect Specialist',
    description: 'Mastered useEffect and side effects!',
    icon: '🌊',
    condition: {
      type: 'lesson-complete',
      target: 'useeffect-basics'
    }
  },
  {
    id: 'hook-architect',
    title: 'Hook Architect',
    description: 'Created your first custom hook!',
    icon: '🪝',
    condition: {
      type: 'lesson-complete',
      target: 'custom-hooks'
    }
  },
  {
    id: 'reducer-master',
    title: 'Reducer Master',
    description: 'Mastered complex state with useReducer!',
    icon: '⚙️',
    condition: {
      type: 'lesson-complete',
      target: 'use-reducer'
    }
  },
  {
    id: 'context-champion',
    title: 'Context Champion',
    description: 'Conquered global state with Context API!',
    icon: '🌍',
    condition: {
      type: 'lesson-complete',
      target: 'context-basics'
    }
  },
  {
    id: 'performance-optimizer',
    title: 'Performance Optimizer',
    description: 'Optimized React performance with useMemo and useCallback!',
    icon: '🚀',
    condition: {
      type: 'lesson-complete',
      target: 'performance-hooks'
    }
  },
  {
    id: 'lifecycle-master',
    title: 'Lifecycle Master',
    description: 'Mastered React component lifecycle!',
    icon: '🔄',
    condition: {
      type: 'lesson-complete',
      target: 'lifecycle-patterns'
    }
  }
];

export const lessons: Lesson[] = [
  {
    id: 'components',
    title: 'React Components',
    description: 'Learn the fundamentals of React components',
    icon: '⚛️',
    subLessons: [
      {
        id: 'intro-components',
        title: 'What are Components?',
        description: 'Learn the building blocks of React applications',
        explanation: 'Think of React components like LEGO blocks for websites! Just as you build amazing structures by combining different LEGO pieces, you build web applications by combining different components. A component is simply a JavaScript function that returns HTML-like code (called JSX). For example, instead of writing the same button code everywhere, you create a Button component once and reuse it throughout your app. This makes your code organized, reusable, and easier to maintain. Components can be as simple as a single button or as complex as an entire page - they\'re the foundation of every React application.',
        concepts: [
          'What is a component',
          'Function components',
          'Component naming conventions',
          'Component composition',
          'JSX basics'
        ],
        files: {
          'App.tsx': `export default function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is your first component.</p>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `function Greeting() {
  return <h2>Hello, React learner!</h2>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Greeting />
      <p>This is your first component with a custom Greeting component!</p>
    </div>
  );
}`
        },
        task: 'Create a new component called "Greeting" that returns an h2 element with the text "Hello, React learner!" and use it in the App component.',
        hints: [
          {
            id: 'hint-1',
            text: 'Create a new function called "Greeting" that returns JSX.',
            order: 1
          },
          {
            id: 'hint-2',
            text: 'Remember to use PascalCase for component names (Greeting, not greeting).',
            order: 2
          },
          {
            id: 'hint-3',
            text: 'Add the <Greeting /> component inside the App component\'s return statement.',
            order: 3
          }
        ],
        quiz: {
          id: 'components-quiz-1',
          question: 'What naming convention should React components follow?',
          type: 'multiple-choice',
          options: [
            'camelCase (myComponent)',
            'PascalCase (MyComponent)',
            'snake_case (my_component)',
            'kebab-case (my-component)'
          ],
          correctAnswer: 1,
          explanation: 'React components must use PascalCase naming convention. This helps React distinguish between custom components and regular HTML elements.'
        },
        visualAid: {
          id: 'component-tree',
          type: 'component-tree',
          title: 'Component Hierarchy',
          description: 'How components are structured in a React app',
          elements: [
            { id: 'app', type: 'component', label: 'App', x: 150, y: 50, color: 'blue' },
            { id: 'greeting', type: 'component', label: 'Greeting', x: 100, y: 150, color: 'green' },
            { id: 'paragraph', type: 'component', label: '<p>', x: 200, y: 150, color: 'gray' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'greeting' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'paragraph' }
          ]
        },
        achievementIds: ['first-steps']
      },
      {
        id: 'jsx-expressions',
        title: 'JSX Expressions',
        description: 'Embed JavaScript in your components',
        explanation: 'JSX is like HTML\'s super-powered cousin! While HTML is static, JSX lets you make your content dynamic by embedding JavaScript expressions inside curly braces {}. Think of curly braces as "JavaScript windows" in your HTML. You can put variables, calculations, function calls, or any JavaScript expression inside them. For example, {userName} displays a user\'s name, {2 + 2} displays 4, and {new Date().getFullYear()} displays the current year. This makes your components smart and interactive instead of just static text!',
        concepts: [
          'JavaScript expressions in JSX',
          'Curly braces syntax',
          'Dynamic content rendering',
          'Expression vs statement',
          'Template literals'
        ],
        files: {
          'App.tsx': `export default function App() {
  const name = "React Learner";
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today is: </p>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `export default function App() {
  const name = "React Learner";
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today is: {currentDate}</p>
      <p>Random number: {Math.floor(Math.random() * 100)}</p>
    </div>
  );
}`
        },
        task: 'Add the current date and a random number to the component using JSX expressions.',
        hints: [
          {
            id: 'jsx-hint-1',
            text: 'Use new Date().toLocaleDateString() to get the current date.',
            order: 1
          },
          {
            id: 'jsx-hint-2',
            text: 'Use Math.floor(Math.random() * 100) to generate a random number.',
            order: 2
          },
          {
            id: 'jsx-hint-3',
            text: 'Remember to wrap JavaScript expressions in curly braces {}.',
            order: 3
          }
        ],
        quiz: {
          id: 'jsx-quiz-1',
          question: 'How do you embed JavaScript expressions in JSX?',
          type: 'fill-blank',
          code: 'const name = "John";\nreturn <h1>Hello, ___name___!</h1>;',
          correctAnswer: '{name}',
          explanation: 'JavaScript expressions in JSX must be wrapped in curly braces {}. So {name} will render the value of the name variable.'
        },
        achievementIds: ['jsx-ninja']
      },
      {
        id: 'component-props',
        title: 'Component Props',
        description: 'Pass data between components',
        explanation: 'Props (short for "properties") are like ingredient labels on a recipe! Just as a recipe tells you what ingredients to use, props tell a component what data to work with. When a parent component uses a child component, it can pass information through props. For example, a Greeting component might receive a "name" prop to know who to greet. Props flow in one direction - from parent to child - like water flowing downstream. This makes React predictable: you always know where your data comes from. Props are read-only, meaning the child component can\'t change them, just like you can\'t change the ingredients list on a recipe box!',
        concepts: [
          'Props as function parameters',
          'Passing props to components',
          'Props are read-only',
          'Destructuring props',
          'Default props'
        ],
        files: {
          'App.tsx': `function Greeting() {
  return <h2>Hello!</h2>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to Props</h1>
      <Greeting />
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `function Greeting({ name, age, location }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to Props</h1>
      <Greeting name="Alice" age={25} location="New York" />
      <Greeting name="Bob" age={30} location="San Francisco" />
    </div>
  );
}`
        },
        task: 'Modify the Greeting component to accept name, age, and location props, then create two Greeting components with different data.',
        hints: [
          {
            id: 'props-hint-1',
            text: 'Add props as a parameter to the Greeting function: function Greeting(props) or use destructuring.',
            order: 1
          },
          {
            id: 'props-hint-2',
            text: 'Access props using props.name or destructure: { name, age, location }.',
            order: 2
          },
          {
            id: 'props-hint-3',
            text: 'Pass props to components like HTML attributes: <Greeting name="Alice" age={25} />.',
            order: 3
          }
        ],
        quiz: {
          id: 'props-quiz-1',
          question: 'Props flow from ___ to ___?',
          type: 'multiple-choice',
          options: [
            'Child to Parent',
            'Parent to Child',
            'Sibling to Sibling',
            'Randomly between components'
          ],
          correctAnswer: 1,
          explanation: 'In React, props flow unidirectionally from parent components to child components. This is called "one-way data flow" and makes applications predictable and easier to debug.'
        },
        visualAid: {
          id: 'props-flow',
          type: 'data-flow',
          title: 'Props Data Flow',
          description: 'How props flow from parent to child components',
          elements: [
            { id: 'app', type: 'component', label: 'App', x: 150, y: 50, color: 'blue' },
            { id: 'greeting1', type: 'component', label: 'Greeting (Alice)', x: 50, y: 180, color: 'green' },
            { id: 'greeting2', type: 'component', label: 'Greeting (Bob)', x: 250, y: 180, color: 'green' },
            { id: 'prop1', type: 'prop', label: 'name="Alice"', x: 80, y: 120, color: 'orange' },
            { id: 'prop2', type: 'prop', label: 'name="Bob"', x: 220, y: 120, color: 'orange' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'prop1' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'prop1', toId: 'greeting1' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'prop2' },
            { id: 'arrow4', type: 'arrow', label: '', x: 0, y: 0, fromId: 'prop2', toId: 'greeting2' }
          ]
        },
        achievementIds: ['props-master']
      },
      {
        id: 'state-basics',
        title: 'Component State',
        description: 'Manage changing data in components',
        explanation: 'State is like a component\'s memory! While props are data passed from outside (like ingredients), state is data that the component manages internally (like keeping track of how many cookies you\'ve baked). Think of state as variables that can change over time and trigger re-renders of your component when they do. The useState hook is your tool for adding state to function components. When state changes, React automatically updates the UI to reflect the new state. It\'s like having a smart assistant that repaints your room every time you rearrange the furniture!',
        concepts: [
          'What is state',
          'useState hook',
          'State initialization',
          'State updates trigger re-renders',
          'State vs props difference'
        ],
        files: {
          'App.tsx': `export default function App() {
  const likes = 0;
  
  return (
    <div>
      <h1>My Post</h1>
      <p>This is an awesome post!</p>
      <p>👍 {likes} likes</p>
      <button>Like</button>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(0);
  
  const handleLike = () => {
    setLikes(likes + 1);
  };
  
  return (
    <div>
      <h1>My Post</h1>
      <p>This is an awesome post!</p>
      <p>👍 {likes} likes</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}`
        },
        task: 'Convert the likes variable to state using useState and make the Like button functional.',
        hints: [
          {
            id: 'state-hint-1',
            text: 'Import useState from React: import { useState } from \'react\';',
            order: 1
          },
          {
            id: 'state-hint-2',
            text: 'Use useState to create state: const [likes, setLikes] = useState(0);',
            order: 2
          },
          {
            id: 'state-hint-3',
            text: 'Add onClick handler to button: <button onClick={handleLike}>Like</button>',
            order: 3
          }
        ],
        quiz: {
          id: 'state-quiz-1',
          question: 'What happens when state changes in React?',
          type: 'multiple-choice',
          options: [
            'Nothing happens',
            'The component re-renders',
            'The entire page refreshes',
            'Only the state variable updates'
          ],
          correctAnswer: 1,
          explanation: 'When state changes in React, the component automatically re-renders to reflect the new state values in the UI.'
        },
        achievementIds: ['state-wizard']
      }
    ]
  },
  {
    id: 'interactivity',
    title: 'Interactive Components',
    description: 'Handle user interactions and events',
    icon: '🎯',
    subLessons: [
      {
        id: 'event-handling',
        title: 'Event Handling',
        description: 'Respond to user interactions like clicks and form inputs',
        explanation: 'Event handling in React is like teaching your components to listen and respond to user actions! Just like how you might wave back when someone waves at you, React components can respond to clicks, keyboard input, mouse movements, and more. React uses SyntheticEvents, which are cross-browser wrappers around native DOM events. This means your event handlers work consistently across different browsers. Event handlers are functions that get called when specific events occur, and they receive an event object with useful information about what happened.',
        concepts: [
          'SyntheticEvent system',
          'onClick handlers',
          'Form events (onChange, onSubmit)',
          'Keyboard events',
          'Event object properties'
        ],
        files: {
          'App.tsx': `export default function App() {
  return (
    <div>
      <h1>Interactive Buttons</h1>
      <button>Click me!</button>
      <button>Hover me!</button>
      <input type="text" placeholder="Type something..." />
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  const handleClick = () => {
    setMessage('Button clicked! 🎉');
  };
  
  const handleMouseEnter = () => {
    setMessage('Mouse is hovering! 🖱️');
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setMessage(\`You typed: "\${event.target.value}"\`);
  };
  
  return (
    <div>
      <h1>Interactive Buttons</h1>
      <p>{message || 'Try interacting with the elements below!'}</p>
      
      <button onClick={handleClick}>Click me!</button>
      <button onMouseEnter={handleMouseEnter}>Hover me!</button>
      <input 
        type="text" 
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}`
        },
        task: 'Add event handlers for clicking, hovering, and typing that update a message display.',
        hints: [
          {
            id: 'event-hint-1',
            text: 'Create a state variable for the message and input value.',
            order: 1
          },
          {
            id: 'event-hint-2',
            text: 'Add onClick, onMouseEnter, and onChange event handlers.',
            order: 2
          },
          {
            id: 'event-hint-3',
            text: 'Use event.target.value to get the input field\'s current value.',
            order: 3
          }
        ],
        quiz: {
          id: 'events-quiz-1',
          question: 'How do you access the value of an input field in an onChange handler?',
          type: 'fill-blank',
          code: 'const handleChange = (event) => {\n  console.log(_____________);\n};',
          correctAnswer: 'event.target.value',
          explanation: 'The event object contains a target property that refers to the element that triggered the event. For input elements, target.value gives you the current input value.'
        },
        achievementIds: ['event-handler']
      }
    ]
  },
  {
    id: 'conditional-rendering',
    title: 'Dynamic Content',
    description: 'Show different content based on conditions',
    icon: '🔀',
    subLessons: [
      {
        id: 'conditional-rendering',
        title: 'Conditional Rendering',
        description: 'Display content based on state and props',
        explanation: 'Conditional rendering is like having a smart TV that shows different channels based on what you want to watch! In React, you can show or hide elements, or display completely different content based on conditions like state values, props, or any JavaScript expression that evaluates to true or false. You can use if statements, ternary operators (condition ? ifTrue : ifFalse), or logical AND operators (condition && content) to control what gets rendered. This makes your components dynamic and responsive to user interactions and data changes.',
        concepts: [
          'Conditional rendering with if statements',
          'Ternary operator in JSX',
          'Logical AND operator (&&)',
          'Rendering null to hide content',
          'Multiple conditions'
        ],
        files: {
          'App.tsx': `export default function App() {
  const isLoggedIn = false;
  const username = "Alice";
  
  return (
    <div>
      <h1>Welcome to our App</h1>
      <p>Please log in to continue.</p>
      <p>Hello, Guest!</p>
      <button>Login</button>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username] = useState("Alice");
  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div>
      <h1>Welcome to our App</h1>
      
      {/* Conditional content based on login status */}
      {isLoggedIn ? (
        <div>
          <p>Welcome back, {username}! 🎉</p>
          <p>You have access to premium features.</p>
        </div>
      ) : (
        <p>Please log in to continue.</p>
      )}
      
      {/* Conditional greeting */}
      <p>Hello, {isLoggedIn ? username : "Guest"}!</p>
      
      {/* Login notification (only shows when logged in) */}
      {isLoggedIn && (
        <div style={{ color: 'green', fontWeight: 'bold' }}>
          ✅ Successfully logged in!
        </div>
      )}
      
      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}`
        },
        task: 'Add conditional rendering to show different content based on login status.',
        hints: [
          {
            id: 'conditional-hint-1',
            text: 'Use the ternary operator: condition ? ifTrue : ifFalse',
            order: 1
          },
          {
            id: 'conditional-hint-2',
            text: 'Use logical AND (&&) for showing content only when condition is true.',
            order: 2
          },
          {
            id: 'conditional-hint-3',
            text: 'Make isLoggedIn a state variable so you can toggle it.',
            order: 3
          }
        ],
        quiz: {
          id: 'conditional-quiz-1',
          question: 'Which operator shows content only when a condition is true?',
          type: 'multiple-choice',
          options: [
            'condition ? content : null',
            'condition && content',
            'condition || content',
            'condition != content'
          ],
          correctAnswer: 1,
          explanation: 'The logical AND operator (&&) only renders the content after it if the condition before it is true. If the condition is false, nothing is rendered.'
        },
        achievementIds: ['condition-master']
      }
    ]
  },
  {
    id: 'lists-and-keys',
    title: 'Working with Lists',
    description: 'Render dynamic lists of data',
    icon: '📋',
    subLessons: [
      {
        id: 'dynamic-lists',
        title: 'Lists and Keys',
        description: 'Render arrays of data efficiently',
        explanation: 'Rendering lists in React is like organizing a playlist - you have multiple items that need to be displayed in a specific order! React makes it easy to render lists using the JavaScript map() method, which transforms each item in an array into a React element. However, React needs a way to keep track of each item efficiently, especially when the list changes. That\'s where "keys" come in - they\'re like unique ID tags that help React identify which items have changed, been added, or removed. This helps React update the DOM efficiently and avoid bugs.',
        concepts: [
          'Using map() to render lists',
          'The importance of keys',
          'Key prop requirements',
          'Rendering nested lists',
          'Filtering and transforming data'
        ],
        files: {
          'App.tsx': `export default function App() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];
  
  return (
    <div>
      <h1>My Favorite Fruits</h1>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [fruits] = useState([
    { id: 1, name: 'Apple', emoji: '🍎', category: 'tree' },
    { id: 2, name: 'Banana', emoji: '🍌', category: 'tropical' },
    { id: 3, name: 'Orange', emoji: '🍊', category: 'citrus' },
    { id: 4, name: 'Grape', emoji: '🍇', category: 'vine' },
    { id: 5, name: 'Strawberry', emoji: '🍓', category: 'berry' }
  ]);
  
  const [filter, setFilter] = useState('all');
  
  const filteredFruits = filter === 'all' 
    ? fruits 
    : fruits.filter(fruit => fruit.category === filter);
  
  return (
    <div>
      <h1>My Favorite Fruits</h1>
      
      <div>
        <button 
          onClick={() => setFilter('all')}
          style={{ backgroundColor: filter === 'all' ? '#e3f2fd' : 'white' }}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('citrus')}
          style={{ backgroundColor: filter === 'citrus' ? '#e3f2fd' : 'white' }}
        >
          Citrus
        </button>
        <button 
          onClick={() => setFilter('berry')}
          style={{ backgroundColor: filter === 'berry' ? '#e3f2fd' : 'white' }}
        >
          Berry
        </button>
      </div>
      
      <ul>
        {filteredFruits.map(fruit => (
          <li key={fruit.id}>
            <span style={{ fontSize: '1.5em' }}>{fruit.emoji}</span>
            <strong>{fruit.name}</strong>
            <em> ({fruit.category})</em>
          </li>
        ))}
      </ul>
      
      <p>Total fruits: {filteredFruits.length}</p>
    </div>
  );
}`
        },
        task: 'Convert the static list to use map() with proper keys, and add filtering functionality.',
        hints: [
          {
            id: 'list-hint-1',
            text: 'Use the map() method: fruits.map(fruit => <li key={...}>...)',
            order: 1
          },
          {
            id: 'list-hint-2',
            text: 'Each item needs a unique key prop, preferably an ID.',
            order: 2
          },
          {
            id: 'list-hint-3',
            text: 'Use array.filter() to create filtered lists based on criteria.',
            order: 3
          }
        ],
        quiz: {
          id: 'lists-quiz-1',
          question: 'Why are keys important when rendering lists in React?',
          type: 'multiple-choice',
          options: [
            'They make the code look cleaner',
            'They help React identify which items have changed',
            'They are required by JavaScript',
            'They improve the visual appearance'
          ],
          correctAnswer: 1,
          explanation: 'Keys help React identify which items have changed, been added, or removed. This allows React to efficiently update the DOM and avoid potential bugs with component state.'
        },
        visualAid: {
          id: 'list-rendering',
          type: 'data-flow',
          title: 'List Rendering Process',
          description: 'How React renders lists with keys',
          elements: [
            { id: 'array', type: 'component', label: 'Array Data', x: 50, y: 50, color: 'blue' },
            { id: 'map', type: 'component', label: '.map()', x: 200, y: 50, color: 'orange' },
            { id: 'elements', type: 'component', label: 'React Elements', x: 350, y: 50, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'array', toId: 'map' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'map', toId: 'elements' }
          ]
        },
        achievementIds: ['list-warrior']
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms and Input',
    description: 'Handle user input and form submission',
    icon: '📝',
    subLessons: [
      {
        id: 'controlled-components',
        title: 'Controlled Components',
        description: 'Manage form inputs with React state',
        explanation: 'Controlled components are like having a conversation where you\'re actively listening and responding! In HTML, form elements like input fields manage their own state internally. But in React, we prefer "controlled components" where React state becomes the "single source of truth" for the input\'s value. This means the input field always shows what\'s in your React state, and when the user types, you update the state which then updates the display. It\'s like having a two-way mirror - state reflects in the input, and input changes reflect in state. This gives you full control over the form data and makes it easy to validate, transform, or reset form values.',
        concepts: [
          'Controlled vs uncontrolled components',
          'Value and onChange props',
          'Form submission handling',
          'Input validation',
          'Form state management'
        ],
        files: {
          'App.tsx': `export default function App() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };
  
  const isFormValid = formData.name && formData.email && formData.message;
  
  return (
    <div>
      <h1>Contact Form</h1>
      
      {submitted && (
        <div style={{ backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          ✅ Thank you {formData.name}! Your message has been sent.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Message:</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            style={{ marginLeft: '10px', padding: '5px', display: 'block', width: '300px' }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={!isFormValid}
          style={{
            backgroundColor: isFormValid ? '#007bff' : '#ccc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
        >
          Send Message
        </button>
      </form>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <h3>Form Data Preview:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}`
        },
        task: 'Convert the form to use controlled components with state management and form validation.',
        hints: [
          {
            id: 'form-hint-1',
            text: 'Create state to store form data: useState({ name: "", email: "", message: "" })',
            order: 1
          },
          {
            id: 'form-hint-2',
            text: 'Add value and onChange props to each input field.',
            order: 2
          },
          {
            id: 'form-hint-3',
            text: 'Use event.preventDefault() in onSubmit to prevent page reload.',
            order: 3
          }
        ],
        quiz: {
          id: 'forms-quiz-1',
          question: 'What makes a component "controlled" in React?',
          type: 'multiple-choice',
          options: [
            'It uses CSS for styling',
            'React state controls its value',
            'It has event handlers',
            'It prevents form submission'
          ],
          correctAnswer: 1,
          explanation: 'A controlled component is one where React state controls the value of the form element. The input displays the state value, and changes update the state.'
        },
        achievementIds: ['form-master']
      }
    ]
  },
  {
    id: 'effects',
    title: 'Side Effects',
    description: 'Handle side effects and external data',
    icon: '🌊',
    subLessons: [
      {
        id: 'useeffect-basics',
        title: 'useEffect Hook',
        description: 'Perform side effects in function components',
        explanation: 'useEffect is like having a personal assistant for your React components! While your component focuses on rendering UI, useEffect handles all the "side effects" - things like fetching data from APIs, setting up timers, subscribing to events, or updating the document title. Think of it as a way to "step outside" the normal render flow to interact with the outside world. useEffect runs after every render by default, but you can control when it runs using dependencies. It\'s like saying "whenever these specific things change, please run this code." You can also return a cleanup function to tidy up when the component unmounts or before the effect runs again.',
        concepts: [
          'What are side effects',
          'useEffect syntax and timing',
          'Dependency arrays',
          'Cleanup functions',
          'Common use cases (data fetching, timers, subscriptions)'
        ],
        files: {
          'App.tsx': `export default function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This page has been open for: 0 seconds</p>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useEffect } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  
  useEffect(() => {
    console.log('Component mounted or isRunning changed');
    
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    
    // Cleanup function - runs when component unmounts or before next effect
    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, [isRunning]); // Dependency array - effect runs when isRunning changes
  
  // Effect that runs only once when component mounts
  useEffect(() => {
    document.title = \`Timer: \${seconds}s\`;
    console.log('Document title updated');
  }, [seconds]);
  
  // Effect with no dependencies - runs after every render (be careful!)
  useEffect(() => {
    console.log('This runs after every render');
  });
  
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  const resetTimer = () => {
    setSeconds(0);
  };
  
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This page has been open for: <strong>{seconds}</strong> seconds</p>
      <p>Timer is: <strong>{isRunning ? 'Running' : 'Stopped'}</strong></p>
      
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
      
      <button onClick={resetTimer} style={{ marginLeft: '10px' }}>
        Reset Timer
      </button>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>📝 Check the browser console to see useEffect logs!</p>
        <p>🔍 Notice how the page title changes with the timer</p>
      </div>
    </div>
  );
}`
        },
        task: 'Add useEffect to create a timer that updates every second and updates the document title.',
        hints: [
          {
            id: 'effect-hint-1',
            text: 'Import useEffect: import { useState, useEffect } from "react";',
            order: 1
          },
          {
            id: 'effect-hint-2',
            text: 'Use setInterval inside useEffect to update seconds every 1000ms.',
            order: 2
          },
          {
            id: 'effect-hint-3',
            text: 'Return a cleanup function that calls clearInterval.',
            order: 3
          }
        ],
        quiz: {
          id: 'effect-quiz-1',
          question: 'When does useEffect run by default?',
          type: 'multiple-choice',
          options: [
            'Before the component renders',
            'After every render',
            'Only when state changes',
            'Only once when component mounts'
          ],
          correctAnswer: 1,
          explanation: 'By default, useEffect runs after every render (both initial render and updates). You can control this behavior using dependency arrays.'
        },
        achievementIds: ['effect-specialist']
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Patterns',
    description: 'Learn advanced React patterns and hooks',
    icon: '🚀',
    subLessons: [
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Create reusable stateful logic',
        explanation: 'Custom hooks are like creating your own power tools for React! Just as a carpenter might create a custom jig to make repetitive cuts easier, you can create custom hooks to package up stateful logic that you use frequently. A custom hook is simply a JavaScript function that starts with "use" and can call other hooks inside it. The magic is that you can extract complex state logic, side effects, and behavior into a reusable function that multiple components can use. It\'s like having a recipe that you can follow in different kitchens - the same logic works everywhere you use it, keeping your components clean and focused.',
        concepts: [
          'What are custom hooks',
          'Hook naming conventions (use prefix)',
          'Extracting stateful logic',
          'Sharing logic between components',
          'Custom hook best practices'
        ],
        files: {
          'App.tsx': `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Custom Hooks Example</h1>
      <Counter />
      
      {/* We want to add another counter here but avoid duplicating code */}
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useEffect } from 'react';

// Custom hook - reusable stateful logic
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  const setValue = (value) => setCount(value);
  
  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  return [value, setStoredValue];
}

function Counter({ title, initialValue = 0 }) {
  const { count, increment, decrement, reset } = useCounter(initialValue);
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [username, setUsername] = useLocalStorage('username', '');
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>Settings (Saved to localStorage)</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Theme: </label>
        <select 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <span style={{ marginLeft: '10px' }}>Current: {theme}</span>
      </div>
      
      <div>
        <label>Username: </label>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Custom Hooks Example</h1>
      <p>🪝 Custom hooks let us reuse stateful logic across components!</p>
      
      <Counter title="Counter 1" initialValue={0} />
      <Counter title="Counter 2" initialValue={10} />
      <Counter title="Counter 3" initialValue={100} />
      
      <Settings />
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h4>What we accomplished:</h4>
        <ul>
          <li>✅ <strong>useCounter</strong>: Reusable counter logic with increment/decrement/reset</li>
          <li>✅ <strong>useLocalStorage</strong>: Persistent state that survives page refreshes</li>
          <li>✅ <strong>Component reuse</strong>: Multiple counters without duplicating code</li>
        </ul>
      </div>
    </div>
  );
}`
        },
        task: 'Extract the counter logic into a custom hook and create a useLocalStorage hook for persistent state.',
        hints: [
          {
            id: 'custom-hook-hint-1',
            text: 'Create a function starting with "use": function useCounter(initialValue) {...}',
            order: 1
          },
          {
            id: 'custom-hook-hint-2',
            text: 'Return an object with the state and functions: return { count, increment, decrement, reset };',
            order: 2
          },
          {
            id: 'custom-hook-hint-3',
            text: 'Use useState(() => {...}) for lazy initial state with localStorage.',
            order: 3
          }
        ],
        quiz: {
          id: 'custom-hooks-quiz-1',
          question: 'What must custom hook names start with?',
          type: 'fill-blank',
          code: 'function ___Counter(initialValue) {\n  // hook logic here\n}',
          correctAnswer: 'use',
          explanation: 'Custom hooks must start with "use" - this is a React convention that allows the linter to check for proper hook usage and enables React to track hook calls correctly.'
        },
        achievementIds: ['hook-architect']
      }
    ]
  },
  {
    id: 'advanced-hooks',
    title: 'Advanced Hooks',
    description: 'Master React\'s powerful built-in hooks',
    icon: '🪝',
    subLessons: [
      {
        id: 'use-reducer',
        title: 'useReducer Hook',
        description: 'Manage complex state with useReducer',
        explanation: 'useReducer is like having a super-powered remote control for complex state! While useState is perfect for simple state like a light switch (on/off), useReducer is like the control panel for a spaceship with many interconnected systems. It\'s especially useful when your state has multiple sub-values or when the next state depends on the previous one. Think of it as useState\'s big brother - it can handle more complex scenarios like forms with multiple fields, shopping carts, or any state that needs to be updated in multiple different ways. The reducer function is like a rulebook that says "when this action happens, update the state this way."',
        concepts: [
          'When to use useReducer vs useState',
          'Reducer function patterns',
          'Action objects and types',
          'Complex state management',
          'State transitions'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  return (
    <div>
      <h1>Counter with Step</h1>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      
      <div>
        <button onClick={() => setCount(count + step)}>+{step}</button>
        <button onClick={() => setCount(count - step)}>-{step}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      
      <div>
        <button onClick={() => setStep(step + 1)}>Increase Step</button>
        <button onClick={() => setStep(Math.max(1, step - 1))}>Decrease Step</button>
      </div>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useReducer } from 'react';

// State interface
interface CounterState {
  count: number;
  step: number;
}

// Action types
type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_STEP'; payload: number };

// Reducer function - the "rulebook" for state updates
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_STEP':
      return { ...state, step: Math.max(1, action.payload) };
    default:
      return state;
  }
}

// Initial state
const initialState: CounterState = {
  count: 0,
  step: 1
};

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Advanced Counter with useReducer</h1>
      
      <div style={{ fontSize: '18px', marginBottom: '20px' }}>
        <p><strong>Count:</strong> {state.count}</p>
        <p><strong>Step:</strong> {state.step}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          +{state.step}
        </button>
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          -{state.step}
        </button>
        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          style={{ padding: '8px 16px', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Reset
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Step Controls:</h3>
        <button 
          onClick={() => dispatch({ type: 'SET_STEP', payload: state.step + 1 })}
          style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Increase Step
        </button>
        <button 
          onClick={() => dispatch({ type: 'SET_STEP', payload: state.step - 1 })}
          style={{ padding: '8px 16px', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Decrease Step
        </button>
      </div>
      
      <div style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h4>🧠 What's happening:</h4>
        <ul style={{ fontSize: '14px' }}>
          <li><strong>useReducer</strong> manages complex state with multiple values</li>
          <li><strong>dispatch</strong> sends actions to the reducer</li>
          <li><strong>Reducer</strong> determines how state changes based on actions</li>
          <li><strong>Actions</strong> describe what happened (INCREMENT, RESET, etc.)</li>
        </ul>
      </div>
    </div>
  );
}`
        },
        task: 'Convert the useState-based counter to use useReducer for managing both count and step values.',
        hints: [
          {
            id: 'reducer-hint-1',
            text: 'Define action types: INCREMENT, DECREMENT, RESET, SET_STEP',
            order: 1
          },
          {
            id: 'reducer-hint-2',
            text: 'Create a reducer function that handles all these action types',
            order: 2
          },
          {
            id: 'reducer-hint-3',
            text: 'Use dispatch({ type: "ACTION_NAME" }) to trigger state updates',
            order: 3
          }
        ],
        quiz: {
          id: 'reducer-quiz-1',
          question: 'When should you use useReducer instead of useState?',
          type: 'multiple-choice',
          options: [
            'When you have simple boolean state',
            'When you have complex state with multiple sub-values',
            'When you need to store strings',
            'When you want to make HTTP requests'
          ],
          correctAnswer: 1,
          explanation: 'useReducer is ideal for complex state logic with multiple sub-values or when the next state depends on the previous one. It provides more predictable state updates through a reducer function.'
        },
        achievementIds: ['reducer-master']
      },
      {
        id: 'performance-hooks',
        title: 'Performance Hooks',
        description: 'Optimize with useMemo and useCallback',
        explanation: 'useMemo and useCallback are like smart caching systems for your React app! Imagine your app is a restaurant kitchen - useMemo is like preparing ingredients in advance and storing them in the fridge so you don\'t have to chop vegetables every single time someone orders. useCallback is like training your chefs to remember their specialized techniques so they don\'t have to relearn them for every dish. These hooks prevent unnecessary recalculations and function recreations, making your app faster and more efficient. However, like any optimization, use them wisely - not every calculation needs caching!',
        concepts: [
          'When to use useMemo',
          'When to use useCallback',
          'Dependency arrays',
          'Avoiding unnecessary re-renders',
          'Performance optimization patterns'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

function ExpensiveCalculation({ number }) {
  // This function runs on every render
  const calculate = () => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += number;
    }
    return result;
  };
  
  return <div>Result: {calculate()}</div>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(5);
  
  return (
    <div>
      <h1>Performance Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <div>
        <input 
          type="number" 
          value={input} 
          onChange={(e) => setInput(Number(e.target.value))} 
        />
        <ExpensiveCalculation number={input} />
      </div>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useMemo, useCallback } from 'react';

// Child component that receives a callback
function Counter({ onIncrement, count }) {
  console.log('Counter component rendered');
  
  return (
    <div style={{ border: '2px solid #e5e7eb', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>Counter Component</h3>
      <p>Count: {count}</p>
      <button 
        onClick={onIncrement}
        style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Increment
      </button>
    </div>
  );
}

// Component with expensive calculation
function ExpensiveCalculation({ number }) {
  console.log('ExpensiveCalculation component rendered');
  
  // useMemo prevents recalculation unless 'number' changes
  const expensiveValue = useMemo(() => {
    console.log('🔥 Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += number;
    }
    return result;
  }, [number]); // Only recalculate when number changes
  
  // useMemo for formatting (lighter calculation)
  const formattedValue = useMemo(() => {
    console.log('📊 Formatting value...');
    return new Intl.NumberFormat().format(expensiveValue);
  }, [expensiveValue]);
  
  return (
    <div style={{ border: '2px solid #10b981', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>Expensive Calculation</h3>
      <p><strong>Input:</strong> {number}</p>
      <p><strong>Result:</strong> {formattedValue}</p>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(5);
  const [otherState, setOtherState] = useState('');
  
  // useCallback prevents function recreation unless count changes
  const handleIncrement = useCallback(() => {
    console.log('🚀 Increment function called');
    setCount(prev => prev + 1);
  }, []); // Empty dependency array since we use functional update
  
  // Another callback that depends on count
  const handleReset = useCallback(() => {
    console.log('🔄 Reset function called');
    setCount(0);
  }, []); // Empty dependency array since we set to constant value
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Performance Hooks Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Main count:</strong> {count}</p>
        <button 
          onClick={handleReset}
          style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px' }}
        >
          Reset Count
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Other state (doesn't affect calculations): </label>
        <input 
          type="text"
          value={otherState} 
          onChange={(e) => setOtherState(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '5px', marginLeft: '10px' }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Number for calculation: </label>
        <input 
          type="number" 
          value={input} 
          onChange={(e) => setInput(Number(e.target.value))}
          style={{ padding: '5px', marginLeft: '10px', width: '100px' }}
        />
      </div>
      
      <Counter onIncrement={handleIncrement} count={count} />
      <ExpensiveCalculation number={input} />
      
      <div style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h4>🔍 Performance Optimization:</h4>
        <ul style={{ fontSize: '14px' }}>
          <li><strong>useMemo:</strong> Caches expensive calculations until dependencies change</li>
          <li><strong>useCallback:</strong> Prevents function recreation on every render</li>
          <li><strong>Check console:</strong> See when calculations actually run</li>
          <li><strong>Try:</strong> Change "other state" - calculations won't re-run!</li>
        </ul>
      </div>
    </div>
  );
}`
        },
        task: 'Add useMemo to cache expensive calculations and useCallback to optimize event handlers.',
        hints: [
          {
            id: 'perf-hint-1',
            text: 'Wrap expensive calculations with useMemo and provide dependencies',
            order: 1
          },
          {
            id: 'perf-hint-2',
            text: 'Use useCallback for event handlers that are passed to child components',
            order: 2
          },
          {
            id: 'perf-hint-3',
            text: 'Check the browser console to see when calculations run',
            order: 3
          }
        ],
        quiz: {
          id: 'performance-quiz-1',
          question: 'What does useMemo help with?',
          type: 'multiple-choice',
          options: [
            'Creating new functions',
            'Caching expensive calculations',
            'Managing component state',
            'Handling side effects'
          ],
          correctAnswer: 1,
          explanation: 'useMemo caches the result of expensive calculations and only recalculates when its dependencies change, improving performance by avoiding unnecessary work.'
        },
        achievementIds: ['performance-optimizer']
      }
    ]
  },
  {
    id: 'context-api',
    title: 'Context API',
    description: 'Share data across components without prop drilling',
    icon: '🌍',
    subLessons: [
      {
        id: 'context-basics',
        title: 'React Context',
        description: 'Global state management with Context API',
        explanation: 'React Context is like a family group chat that everyone can access! Instead of passing messages from parent to child to grandchild (prop drilling), Context lets you create a "broadcast channel" that any component in your app can tune into. It\'s perfect for sharing data that many components need, like user authentication status, theme preferences, or language settings. Think of it as creating a shared storage locker that all your components have the key to - no more passing props through components that don\'t even use them!',
        concepts: [
          'What is Context API',
          'Creating Context with createContext',
          'Providing values with Provider',
          'Consuming context with useContext',
          'When to use Context vs props'
        ],
        files: {
          'App.tsx': `function Header({ user, theme, onThemeToggle }) {
  return (
    <header style={{ backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0', padding: '1rem' }}>
      <h1>My App</h1>
      <div>
        <span>Welcome, {user.name}!</span>
        <button onClick={onThemeToggle}>
          Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
    </header>
  );
}

function Sidebar({ user, theme }) {
  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#222' : '#e0e0e0', padding: '1rem', minHeight: '300px' }}>
      <h3>Sidebar</h3>
      <p>User: {user.name}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}

function Content({ user, theme }) {
  return (
    <main style={{ backgroundColor: theme === 'dark' ? '#111' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '1rem', flex: 1 }}>
      <h2>Main Content</h2>
      <p>Hello {user.name}, you're using {theme} theme!</p>
    </main>
  );
}

export default function App() {
  const user = { name: 'Alice', role: 'admin' };
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div>
      <Header user={user} theme={theme} onThemeToggle={toggleTheme} />
      <div style={{ display: 'flex' }}>
        <Sidebar user={user} theme={theme} />
        <Content user={user} theme={theme} />
      </div>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { createContext, useContext, useState } from 'react';

// Create contexts
const UserContext = createContext();
const ThemeContext = createContext();

// Custom hooks for easier context consumption
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Header component - no more prop drilling!
function Header() {
  const user = useUser();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{ 
      backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0', 
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>My App with Context</h1>
      <div>
        <span style={{ marginRight: '15px' }}>Welcome, {user.name}! (Role: {user.role})</span>
        <button 
          onClick={toggleTheme}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: theme === 'dark' ? '#555' : '#ddd',
            color: theme === 'dark' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
    </header>
  );
}

// Sidebar component - clean and simple
function Sidebar() {
  const user = useUser();
  const { theme } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme === 'dark' ? '#222' : '#e0e0e0',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '1rem', 
      minHeight: '400px',
      width: '200px'
    }}>
      <h3>Navigation</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <a href="#" style={{ color: theme === 'dark' ? '#88c999' : '#2563eb' }}>Dashboard</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#" style={{ color: theme === 'dark' ? '#88c999' : '#2563eb' }}>Profile</a>
        </li>
        {user.role === 'admin' && (
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: theme === 'dark' ? '#fbbf24' : '#d97706' }}>Admin Panel</a>
          </li>
        )}
      </ul>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: theme === 'dark' ? '#333' : '#f9f9f9', borderRadius: '4px' }}>
        <small>
          <strong>User:</strong> {user.name}<br/>
          <strong>Theme:</strong> {theme}
        </small>
      </div>
    </div>
  );
}

// Content component - also clean
function Content() {
  const user = useUser();
  const { theme } = useTheme();
  
  return (
    <main style={{ 
      backgroundColor: theme === 'dark' ? '#111' : '#fff', 
      color: theme === 'dark' ? '#fff' : '#000', 
      padding: '2rem', 
      flex: 1
    }}>
      <h2>Main Content Area</h2>
      <p>Hello <strong>{user.name}</strong>, welcome to your personalized dashboard!</p>
      <p>You're currently using the <strong>{theme}</strong> theme.</p>
      
      {user.role === 'admin' && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: theme === 'dark' ? '#1f2937' : '#fef3c7',
          border: '1px solid ' + (theme === 'dark' ? '#374151' : '#fbbf24'),
          borderRadius: '8px'
        }}>
          <h3>🔐 Admin Section</h3>
          <p>You have administrator privileges and can access special features.</p>
        </div>
      )}
      
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
        borderRadius: '8px'
      }}>
        <h4>🎯 Benefits of Context:</h4>
        <ul>
          <li>No more prop drilling through intermediate components</li>
          <li>Clean and readable component interfaces</li>
          <li>Easy to share global state (user info, theme, etc.)</li>
          <li>Better maintainability and less code duplication</li>
        </ul>
      </div>
    </main>
  );
}

export default function App() {
  // App-level state
  const [user] = useState({ name: 'Alice', role: 'admin' });
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
          <Header />
          <div style={{ display: 'flex', minHeight: '500px' }}>
            <Sidebar />
            <Content />
          </div>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}`
        },
        task: 'Convert the prop-drilling example to use React Context for user and theme data.',
        hints: [
          {
            id: 'context-hint-1',
            text: 'Create contexts using createContext() for user and theme data',
            order: 1
          },
          {
            id: 'context-hint-2',
            text: 'Wrap your app with Provider components and pass values',
            order: 2
          },
          {
            id: 'context-hint-3',
            text: 'Use useContext() in components to access the context values',
            order: 3
          }
        ],
        quiz: {
          id: 'context-quiz-1',
          question: 'What problem does React Context solve?',
          type: 'multiple-choice',
          options: [
            'It speeds up component rendering',
            'It prevents prop drilling',
            'It handles HTTP requests',
            'It manages component lifecycle'
          ],
          correctAnswer: 1,
          explanation: 'React Context solves the prop drilling problem by allowing you to share data across components without passing props through intermediate components that don\'t need them.'
        },
        achievementIds: ['context-champion']
      }
    ]
  },
  {
    id: 'lifecycle',
    title: 'Component Lifecycle',
    description: 'Master component lifecycle with hooks',
    icon: '🔄',
    subLessons: [
      {
        id: 'lifecycle-patterns',
        title: 'Lifecycle Patterns',
        description: 'Component mounting, updating, and cleanup',
        explanation: 'Component lifecycle in React is like the life stages of a butterfly! Every React component goes through phases: mounting (being born), updating (growing and changing), and unmounting (cleanup time). With hooks, we use useEffect to handle these lifecycle events. It\'s like having different instruction manuals for "when the component first appears," "when something changes," and "when it\'s time to clean up." Understanding these patterns helps you manage data fetching, subscriptions, timers, and cleanup properly, preventing memory leaks and bugs.',
        concepts: [
          'Component lifecycle phases',
          'useEffect for mounting',
          'useEffect for updates',
          'Cleanup with return functions',
          'Dependency arrays and lifecycle'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  // This should start a timer when component mounts
  // and clean it up when component unmounts
  
  return (
    <div>
      <h3>Timer: {seconds} seconds</h3>
    </div>
  );
}

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // This should fetch user data when userId changes
  
  return (
    <div>
      {loading ? (
        <p>Loading user...</p>
      ) : (
        <div>
          <h3>User Profile</h3>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(1);
  
  return (
    <div>
      <h1>Lifecycle Demo</h1>
      
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? 'Hide Timer' : 'Show Timer'}
        </button>
        {showTimer && <Timer />}
      </div>
      
      <div>
        <h2>User Profiles</h2>
        <button onClick={() => setSelectedUserId(1)}>User 1</button>
        <button onClick={() => setSelectedUserId(2)}>User 2</button>
        <button onClick={() => setSelectedUserId(3)}>User 3</button>
        <UserProfile userId={selectedUserId} />
      </div>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useEffect } from 'react';

// Component demonstrating mounting and unmounting lifecycle
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  // Effect for mounting and unmounting
  useEffect(() => {
    console.log('⚡ Timer component mounted!');
    
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup function - runs when component unmounts
    return () => {
      console.log('🧹 Timer component unmounting - cleaning up interval');
      clearInterval(interval);
    };
  }, []); // Empty dependency array = runs once on mount
  
  // Effect that runs on every update (be careful with this!)
  useEffect(() => {
    console.log(\`🔄 Timer updated: \${seconds} seconds\`);
  }); // No dependency array = runs on every render
  
  // Effect that runs when seconds changes
  useEffect(() => {
    if (seconds > 0 && seconds % 5 === 0) {
      console.log(\`🎉 5-second milestone reached: \${seconds} seconds!\`);
    }
  }, [seconds]); // Runs when seconds changes
  
  return (
    <div style={{ border: '2px solid #3b82f6', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>⏱️ Timer Component</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Time: {seconds} seconds</p>
      {seconds >= 10 && (
        <p style={{ color: '#22c55e', fontWeight: 'bold' }}>
          🚀 Timer has been running for {seconds} seconds!
        </p>
      )}
    </div>
  );
}

// Component demonstrating data fetching and updates
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Effect for fetching user data when userId changes
  useEffect(() => {
    console.log(\`👤 Fetching user data for ID: \${userId}\`);
    
    setLoading(true);
    setError(null);
    
    // Simulate API call
    const fetchUser = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        const mockUsers = {
          1: { name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
          2: { name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
          3: { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' }
        };
        
        const userData = mockUsers[userId];
        
        if (userData) {
          setUser(userData);
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
    
    // Cleanup function for any pending requests
    return () => {
      console.log(\`🧹 Cleaning up user fetch for ID: \${userId}\`);
    };
  }, [userId]); // Re-run effect when userId changes
  
  // Effect that runs when user data is loaded
  useEffect(() => {
    if (user) {
      console.log(\`✅ User data loaded for: \${user.name}\`);
      document.title = \`Profile: \${user.name}\`;
    }
    
    // Cleanup document title when component unmounts
    return () => {
      document.title = 'React Learning App';
    };
  }, [user]);
  
  if (loading) {
    return (
      <div style={{ border: '2px solid #f59e0b', padding: '15px', margin: '10px', borderRadius: '8px' }}>
        <p>🔄 Loading user data...</p>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#fef3c7', borderRadius: '2px' }}>
          <div 
            style={{ 
              width: '50%', 
              height: '100%', 
              backgroundColor: '#f59e0b', 
              borderRadius: '2px',
              animation: 'pulse 1s infinite'
            }}
          />
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div style={{ border: '2px solid #ef4444', padding: '15px', margin: '10px', borderRadius: '8px' }}>
        <h3>❌ Error</h3>
        <p style={{ color: '#dc2626' }}>{error}</p>
      </div>
    );
  }
  
  return (
    <div style={{ border: '2px solid #22c55e', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>👤 User Profile (ID: {userId})</h3>
      <div style={{ backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '4px' }}>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}

// Component demonstrating window event listeners
function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    console.log('📏 WindowSize component mounted - adding resize listener');
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup - remove event listener
    return () => {
      console.log('🧹 WindowSize component unmounting - removing resize listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div style={{ border: '2px solid #8b5cf6', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>📏 Window Size</h3>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
      <small style={{ color: '#6b7280' }}>Try resizing your browser window!</small>
    </div>
  );
}

export default function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showWindowSize, setShowWindowSize] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(1);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔄 Component Lifecycle Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Timer Component (Mount/Unmount)</h2>
        <button 
          onClick={() => setShowTimer(!showTimer)}
          style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {showTimer ? 'Hide Timer' : 'Show Timer'}
        </button>
        {showTimer && <Timer />}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>User Profile (Data Fetching on Update)</h2>
        <div>
          {[1, 2, 3].map(id => (
            <button 
              key={id}
              onClick={() => setSelectedUserId(id)}
              style={{ 
                marginRight: '10px', 
                padding: '8px 16px', 
                backgroundColor: selectedUserId === id ? '#22c55e' : '#6b7280',
                color: 'white', 
                border: 'none', 
                borderRadius: '4px' 
              }}
            >
              User {id}
            </button>
          ))}
        </div>
        <UserProfile userId={selectedUserId} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Window Size (Event Listeners)</h2>
        <button 
          onClick={() => setShowWindowSize(!showWindowSize)}
          style={{ padding: '8px 16px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {showWindowSize ? 'Hide Window Size' : 'Show Window Size'}
        </button>
        {showWindowSize && <WindowSize />}
      </div>
      
      <div style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '8px' }}>
        <h3>🧠 Lifecycle Patterns:</h3>
        <ul style={{ fontSize: '14px' }}>
          <li><strong>Mount:</strong> useEffect with empty dependency array []</li>
          <li><strong>Update:</strong> useEffect with specific dependencies [value]</li>
          <li><strong>Unmount:</strong> return cleanup function from useEffect</li>
          <li><strong>Every render:</strong> useEffect with no dependency array</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '10px' }}>
          Check your browser console to see lifecycle logs!
        </p>
      </div>
    </div>
  );
}`
        },
        task: 'Implement proper lifecycle patterns for timer, data fetching, and cleanup.',
        hints: [
          {
            id: 'lifecycle-hint-1',
            text: 'Use useEffect with empty dependency array [] for mounting effects',
            order: 1
          },
          {
            id: 'lifecycle-hint-2',
            text: 'Return cleanup functions from useEffect for proper unmounting',
            order: 2
          },
          {
            id: 'lifecycle-hint-3',
            text: 'Use dependency arrays to control when effects run on updates',
            order: 3
          }
        ],
        quiz: {
          id: 'lifecycle-quiz-1',
          question: 'When does a useEffect cleanup function run?',
          type: 'multiple-choice',
          options: [
            'When the component first mounts',
            'When the component unmounts or before the effect runs again',
            'On every state update',
            'Only when there\'s an error'
          ],
          correctAnswer: 1,
          explanation: 'The cleanup function returned by useEffect runs when the component unmounts or before the effect runs again (if dependencies change). This prevents memory leaks and cleans up subscriptions.'
        },
        achievementIds: ['lifecycle-master']
      }
    ]
  }
];