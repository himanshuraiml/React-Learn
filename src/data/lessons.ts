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
  }
];