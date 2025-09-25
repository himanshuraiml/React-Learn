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
        title: 'Introduction to Components',
        description: 'Create your first React component',
        explanation: 'Components are the building blocks of React applications. They are reusable pieces of code that return JSX elements to be rendered to the DOM.',
        concepts: [
          'Function components',
          'JSX syntax',
          'Component naming conventions',
          'Returning JSX elements'
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
        description: 'Learn to use JavaScript expressions in JSX',
        explanation: 'JSX allows you to embed JavaScript expressions using curly braces {}. This enables dynamic content and makes your components interactive.',
        concepts: [
          'Curly braces syntax {}',
          'JavaScript expressions in JSX',
          'Variable interpolation',
          'Function calls in JSX'
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
        description: 'Pass data to components using props',
        explanation: 'Props (properties) are how you pass data from parent components to child components. They make components reusable and dynamic.',
        concepts: [
          'Props as function parameters',
          'Destructuring props',
          'Props are read-only',
          'Default prop values'
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
        title: 'State Basics',
        description: 'Manage component state with useState',
        explanation: 'State allows components to remember and update data over time. The useState hook is the most common way to add state to functional components.',
        concepts: [
          'useState hook',
          'State variables',
          'State setter functions',
          'Re-rendering on state changes'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

export default function Counter() {
  return (
    <div>
      <h1>Counter: 0</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <button 
        onClick={increment}
        style={{ 
          margin: '0 10px', 
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        +
      </button>
      <button 
        onClick={decrement}
        style={{ 
          margin: '0 10px', 
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        -
      </button>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Click the buttons to increment or decrement the counter!
      </p>
    </div>
  );
}`
        },
        task: 'Add state to the Counter component and make the buttons functional to increment and decrement the count.',
        hints: [
          {
            id: 'state-hint-1',
            text: 'Use useState(0) to create a state variable for the counter.',
            order: 1
          },
          {
            id: 'state-hint-2',
            text: 'useState returns an array: [value, setValue]. Use destructuring to get both.',
            order: 2
          },
          {
            id: 'state-hint-3',
            text: 'Add onClick handlers to the buttons to call the setter function.',
            order: 3
          }
        ],
        quiz: {
          id: 'state-quiz-1',
          question: 'What does useState return?',
          type: 'multiple-choice',
          options: [
            'Just the state value',
            'Just the setter function',
            'An array with the state value and setter function',
            'An object with the state value and setter function'
          ],
          correctAnswer: 2,
          explanation: 'useState returns an array with two elements: the current state value and a function to update that state. We typically destructure this: const [state, setState] = useState(initialValue).'
        },
        visualAid: {
          id: 'state-lifecycle',
          type: 'lifecycle',
          title: 'State Update Cycle',
          description: 'How state changes trigger re-renders',
          elements: [
            { id: 'user', type: 'component', label: 'User Click', x: 50, y: 50, color: 'blue' },
            { id: 'handler', type: 'component', label: 'Event Handler', x: 200, y: 50, color: 'orange' },
            { id: 'setstate', type: 'component', label: 'setState()', x: 350, y: 50, color: 'purple' },
            { id: 'rerender', type: 'component', label: 'Re-render', x: 200, y: 150, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'user', toId: 'handler' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'handler', toId: 'setstate' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'setstate', toId: 'rerender' }
          ]
        },
        achievementIds: ['state-wizard']
      }
    ]
  },
  {
    id: 'events',
    title: 'Events & Interactions',
    description: 'Handle user interactions with events',
    icon: '🎯',
    subLessons: [
      {
        id: 'event-handling',
        title: 'Event Handling Basics',
        description: 'Learn to handle clicks, form inputs, and more',
        explanation: 'React uses SyntheticEvents to provide consistent event handling across different browsers. Event handlers are functions that get called when events occur.',
        concepts: [
          'onClick handlers',
          'SyntheticEvent object',
          'Event parameters',
          'Preventing default behavior'
        ],
        files: {
          'App.tsx': `export default function App() {
  return (
    <div>
      <h1>Event Handling</h1>
      <button>Click me!</button>
      <input type="text" placeholder="Type here..." />
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
    setMessage('Button was clicked!');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Handling</h1>
      <button 
        onClick={handleClick}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        Click me!
      </button>
      <input 
        type="text" 
        placeholder="Type here..." 
        value={inputValue}
        onChange={handleInputChange}
        style={{ 
          padding: '10px', 
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {inputValue && <p>You typed: <strong>{inputValue}</strong></p>}
      </div>
    </div>
  );
}`
        },
        task: 'Add click handler to the button and change handler to the input. Display the results on screen.',
        hints: [
          {
            id: 'event-hint-1',
            text: 'Create a function like handleClick and pass it to the onClick prop.',
            order: 1
          },
          {
            id: 'event-hint-2',
            text: 'For input changes, use onChange prop and access e.target.value in the handler.',
            order: 2
          },
          {
            id: 'event-hint-3',
            text: 'Use useState to store and display the messages and input values.',
            order: 3
          }
        ],
        quiz: {
          id: 'events-quiz-1',
          question: 'How do you access the input value in an onChange event?',
          type: 'multiple-choice',
          options: [
            'event.value',
            'event.target.value',
            'event.input.value',
            'event.currentTarget.value'
          ],
          correctAnswer: 1,
          explanation: 'In React event handlers, you access the input value using event.target.value where "target" refers to the element that triggered the event.'
        },
        achievementIds: ['event-handler']
      },
      {
        id: 'form-handling',
        title: 'Form Handling',
        description: 'Build interactive forms with validation',
        explanation: 'Forms are essential for user input. React provides controlled components where form data is handled by component state.',
        concepts: [
          'Form submission',
          'Controlled components',
          'Form validation',
          'Multiple inputs'
        ],
        files: {
          'App.tsx': `export default function ContactForm() {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email must be valid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'green' }}>✅ Form Submitted!</h2>
        <p>Thank you, {formData.name}!</p>
        <p>We'll contact you at: {formData.email}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Contact Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: errors.name ? '2px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.name && <span style={{ color: 'red', fontSize: '14px' }}>{errors.name}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: errors.email ? '2px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
      </div>
      <button 
        type="submit"
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  );
}`
        },
        task: 'Create a controlled form with validation that shows a success message on submission.',
        hints: [
          {
            id: 'form-hint-1',
            text: 'Use useState to manage form data as an object: {name: "", email: ""}.',
            order: 1
          },
          {
            id: 'form-hint-2',
            text: 'Add name attributes to inputs and use e.target.name to identify which field changed.',
            order: 2
          },
          {
            id: 'form-hint-3',
            text: 'Use e.preventDefault() in onSubmit to prevent page refresh.',
            order: 3
          }
        ],
        quiz: {
          id: 'form-quiz-1',
          question: 'What is a controlled component in React?',
          type: 'multiple-choice',
          options: [
            'A component that controls other components',
            'A component whose form data is handled by React state',
            'A component that can be controlled remotely',
            'A component with validation rules'
          ],
          correctAnswer: 1,
          explanation: 'A controlled component is one where form data is handled by React state. The value of the input is controlled by state, and changes are handled by event handlers.'
        }
      }
    ]
  },
  {
    id: 'conditional-rendering',
    title: 'Conditional Rendering',
    description: 'Show/hide content based on conditions',
    icon: '🔀',
    subLessons: [
      {
        id: 'conditional-rendering',
        title: 'If/Else in JSX',
        description: 'Learn different ways to conditionally render content',
        explanation: 'React allows you to conditionally render elements using JavaScript expressions. You can use ternary operators, logical AND (&&), or if/else statements.',
        concepts: [
          'Ternary operator (? :)',
          'Logical AND (&&)',
          'If/else statements',
          'Conditional styling'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
      {/* Add conditional rendering here */}
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({ name: 'Alice', notifications: 3 });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Conditional Rendering Demo</h1>
      
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ 
          padding: '10px 20px',
          backgroundColor: isLoggedIn ? '#dc3545' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Ternary operator */}
      <div style={{ marginBottom: '15px' }}>
        {isLoggedIn ? (
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '5px'
          }}>
            <h3>Welcome back, {user.name}! 👋</h3>
            <p>You have {user.notifications} new notifications</p>
          </div>
        ) : (
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '5px'
          }}>
            <h3>Please log in to continue 🔐</h3>
            <p>You need to sign in to access your account</p>
          </div>
        )}
      </div>

      {/* Logical AND */}
      {isLoggedIn && user.notifications > 0 && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '5px',
          marginBottom: '15px'
        }}>
          🔔 You have {user.notifications} unread messages!
        </div>
      )}

      {/* Multiple conditions */}
      <div style={{ marginTop: '20px' }}>
        <h4>Account Status:</h4>
        <span style={{ 
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: isLoggedIn ? '#28a745' : '#6c757d',
          color: 'white'
        }}>
          {isLoggedIn ? '✅ Online' : '⚪ Offline'}
        </span>
      </div>
    </div>
  );
}`
        },
        task: 'Add conditional rendering to show different content for logged-in vs logged-out users, including notifications.',
        hints: [
          {
            id: 'conditional-hint-1',
            text: 'Use the ternary operator: condition ? <ComponentA /> : <ComponentB />',
            order: 1
          },
          {
            id: 'conditional-hint-2',
            text: 'Use logical AND for optional rendering: condition && <Component />',
            order: 2
          },
          {
            id: 'conditional-hint-3',
            text: 'You can also conditionally set CSS classes and styles based on state.',
            order: 3
          }
        ],
        quiz: {
          id: 'conditional-quiz-1',
          question: 'Which operator shows content only when a condition is true?',
          type: 'multiple-choice',
          options: [
            'Ternary operator (? :)',
            'Logical AND (&&)',
            'Logical OR (||)',
            'Assignment operator (=)'
          ],
          correctAnswer: 1,
          explanation: 'The logical AND (&&) operator is perfect for showing content only when a condition is true. If the condition is false, nothing is rendered.'
        },
        visualAid: {
          id: 'conditional-flow',
          type: 'data-flow',
          title: 'Conditional Rendering Flow',
          description: 'How conditions determine what gets rendered',
          elements: [
            { id: 'state', type: 'state', label: 'isLoggedIn', x: 50, y: 50, color: 'blue' },
            { id: 'condition', type: 'component', label: 'Condition Check', x: 200, y: 50, color: 'purple' },
            { id: 'true-branch', type: 'component', label: 'Welcome Message', x: 150, y: 150, color: 'green' },
            { id: 'false-branch', type: 'component', label: 'Login Prompt', x: 250, y: 150, color: 'orange' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'state', toId: 'condition' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'condition', toId: 'true-branch' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'condition', toId: 'false-branch' }
          ]
        },
        achievementIds: ['condition-master']
      }
    ]
  },
  {
    id: 'lists',
    title: 'Lists & Keys',
    description: 'Render dynamic lists efficiently',
    icon: '📋',
    subLessons: [
      {
        id: 'dynamic-lists',
        title: 'Rendering Lists',
        description: 'Learn to render arrays of data with keys',
        explanation: 'React can efficiently render lists of components using the map() function. Each item needs a unique "key" prop to help React identify which items have changed.',
        concepts: [
          'Array.map() method',
          'Key prop importance',
          'Unique identifiers',
          'List performance'
        ],
        files: {
          'App.tsx': `export default function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build awesome apps', completed: true },
    { id: 3, text: 'Master JavaScript', completed: false }
  ];

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Render the list here */}
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build awesome apps', completed: true },
    { id: 3, text: 'Master JavaScript', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>My Todo List 📝</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '12px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#6c757d' : '#333'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#6c757d', fontStyle: 'italic' }}>
          No todos yet. Add one above! ✨
        </p>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#6c757d' }}>
        Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
      </div>
    </div>
  );
}`
        },
        task: 'Render the todos array as a list with checkboxes and add functionality to toggle completion status.',
        hints: [
          {
            id: 'list-hint-1',
            text: 'Use todos.map() to transform each todo into a JSX element.',
            order: 1
          },
          {
            id: 'list-hint-2',
            text: 'Don\'t forget to add a unique key prop to each list item: key={todo.id}.',
            order: 2
          },
          {
            id: 'list-hint-3',
            text: 'Use conditional styling to show completed todos differently (strikethrough, different color).',
            order: 3
          }
        ],
        quiz: {
          id: 'list-quiz-1',
          question: 'Why are keys important when rendering lists in React?',
          type: 'multiple-choice',
          options: [
            'They make the components look better',
            'They help React identify which items have changed for efficient updates',
            'They are required by JavaScript',
            'They prevent memory leaks'
          ],
          correctAnswer: 1,
          explanation: 'Keys help React identify which items have changed, been added, or removed. This allows React to efficiently update the DOM by only re-rendering the components that actually changed.'
        },
        visualAid: {
          id: 'list-rendering',
          type: 'data-flow',
          title: 'List Rendering Process',
          description: 'How arrays get transformed into JSX elements',
          elements: [
            { id: 'array', type: 'component', label: 'todos[]', x: 50, y: 50, color: 'blue' },
            { id: 'map', type: 'component', label: 'map()', x: 200, y: 50, color: 'purple' },
            { id: 'jsx1', type: 'component', label: '<li>Todo 1</li>', x: 100, y: 150, color: 'green' },
            { id: 'jsx2', type: 'component', label: '<li>Todo 2</li>', x: 200, y: 150, color: 'green' },
            { id: 'jsx3', type: 'component', label: '<li>Todo 3</li>', x: 300, y: 150, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'array', toId: 'map' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'map', toId: 'jsx1' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'map', toId: 'jsx2' },
            { id: 'arrow4', type: 'arrow', label: '', x: 0, y: 0, fromId: 'map', toId: 'jsx3' }
          ]
        },
        achievementIds: ['list-warrior']
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Inputs',
    description: 'Build interactive forms and handle user input',
    icon: '📝',
    subLessons: [
      {
        id: 'controlled-components',
        title: 'Controlled Components',
        description: 'Master form inputs with React state',
        explanation: 'Controlled components are form elements whose values are controlled by React state. This gives you full control over the form data and enables features like validation and formatting.',
        concepts: [
          'Controlled vs uncontrolled components',
          'Form state management',
          'Input validation',
          'Multiple form fields'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

export default function UserProfile() {
  return (
    <form>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Bio:</label>
        <textarea></textarea>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState } from 'react';

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    age: '',
    country: 'us'
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!profile.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (profile.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!profile.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(profile.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (profile.age && (profile.age < 13 || profile.age > 120)) {
      newErrors.age = 'Age must be between 13 and 120';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  const handleReset = () => {
    setProfile({
      name: '',
      email: '',
      bio: '',
      age: '',
      country: 'us'
    });
    setErrors({});
    setSaved(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '25px', color: '#333' }}>👤 User Profile</h2>
        
        {saved && (
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '5px',
            marginBottom: '20px'
          }}>
            ✅ Profile saved successfully!
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              border: errors.name ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
              {errors.name}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              border: errors.email ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
              {errors.email}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Age
          </label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              border: errors.age ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="25"
            min="13"
            max="120"
          />
          {errors.age && (
            <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
              {errors.age}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Country
          </label>
          <select
            name="country"
            value={profile.country}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ced4da',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Bio
          </label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            rows={4}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ced4da',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
            placeholder="Tell us about yourself..."
          />
          <div style={{ fontSize: '12px', color: '#6c757d', marginTop: '5px' }}>
            {profile.bio.length}/500 characters
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: '15px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            💾 Save Profile
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '15px 25px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            🔄 Reset
          </button>
        </div>
      </form>

      {/* Profile Preview */}
      {(profile.name || profile.email) && (
        <div style={{ 
          marginTop: '30px',
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid #e9ecef',
          borderRadius: '10px'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#495057' }}>📋 Profile Preview</h3>
          <div style={{ lineHeight: '1.6', color: '#6c757d' }}>
            <strong>Name:</strong> {profile.name || 'Not provided'}<br />
            <strong>Email:</strong> {profile.email || 'Not provided'}<br />
            <strong>Age:</strong> {profile.age || 'Not provided'}<br />
            <strong>Country:</strong> {profile.country}<br />
            {profile.bio && (
              <>
                <strong>Bio:</strong><br />
                <em>"{profile.bio}"</em>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}`
        },
        task: 'Transform the form into a controlled component with validation, real-time preview, and proper error handling.',
        hints: [
          {
            id: 'form-hint-1',
            text: 'Create a state object to hold all form data: useState({ name: "", email: "", bio: "" }).',
            order: 1
          },
          {
            id: 'form-hint-2',
            text: 'Use the name attribute and e.target.name to identify which field changed.',
            order: 2
          },
          {
            id: 'form-hint-3',
            text: 'Add validation logic and show errors next to each field.',
            order: 3
          }
        ],
        quiz: {
          id: 'form-quiz-1',
          question: 'In a controlled component, where is the form data stored?',
          type: 'multiple-choice',
          options: [
            'In the DOM elements',
            'In React component state',
            'In local storage',
            'In the browser cache'
          ],
          correctAnswer: 1,
          explanation: 'In controlled components, form data is stored in React component state. The state becomes the "single source of truth" for the form values.'
        },
        achievementIds: ['form-master']
      }
    ]
  },
  {
    id: 'effects',
    title: 'useEffect & Side Effects',
    description: 'Handle side effects and lifecycle events',
    icon: '🌊',
    subLessons: [
      {
        id: 'useeffect-basics',
        title: 'useEffect Fundamentals',
        description: 'Learn to handle side effects in React',
        explanation: 'useEffect allows you to perform side effects in functional components. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount.',
        concepts: [
          'Side effects in React',
          'Effect dependencies',
          'Cleanup functions',
          'Effect timing'
        ],
        files: {
          'App.tsx': `import { useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button>Start Timer</button>
      <button>Reset</button>
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState('');

  // Effect for timer
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    
    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependency array

  // Effect for milestones
  useEffect(() => {
    if (seconds === 10) {
      setMessage('🎉 You reached 10 seconds!');
    } else if (seconds === 30) {
      setMessage('🚀 30 seconds! You're doing great!');
    } else if (seconds === 60) {
      setMessage('⭐ One whole minute! Amazing!');
    } else if (seconds > 0 && seconds % 30 === 0) {
      setMessage(\`🎯 \${seconds} seconds completed!\`);
    }
  }, [seconds]);

  // Effect for document title
  useEffect(() => {
    document.title = isRunning ? \`Timer: \${seconds}s\` : 'React Timer';
    
    // Cleanup on unmount
    return () => {
      document.title = 'React App';
    };
  }, [seconds, isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
    setMessage('');
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          margin: '0 0 20px 0',
          color: '#333'
        }}>
          ⏱️ React Timer
        </h1>
        
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: isRunning ? '#28a745' : '#6c757d',
          marginBottom: '20px',
          fontFamily: 'monospace'
        }}>
          {formatTime(seconds)}
        </div>

        {message && (
          <div style={{
            padding: '15px',
            backgroundColor: '#fff3cd',
            color: '#856404',
            borderRadius: '10px',
            marginBottom: '20px',
            border: '1px solid #ffeaa7'
          }}>
            {message}
          </div>
        )}

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button
            onClick={toggleTimer}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: isRunning ? '#dc3545' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              minWidth: '120px'
            }}
          >
            {isRunning ? '⏸️ Pause' : '▶️ Start'}
          </button>
          
          <button
            onClick={resetTimer}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              minWidth: '120px'
            }}
          >
            🔄 Reset
          </button>
        </div>

        <div style={{ 
          marginTop: '30px', 
          fontSize: '14px', 
          color: '#6c757d',
          lineHeight: '1.5'
        }}>
          <p><strong>Status:</strong> {isRunning ? '🟢 Running' : '🔴 Stopped'}</p>
          <p><strong>Total Sessions:</strong> {Math.floor(seconds / 60)} minutes</p>
        </div>
      </div>
    </div>
  );
}`
        },
        task: 'Implement a timer using useEffect that updates every second, updates the document title, and shows milestone messages.',
        hints: [
          {
            id: 'effect-hint-1',
            text: 'Use setInterval inside useEffect to update the timer every second.',
            order: 1
          },
          {
            id: 'effect-hint-2',
            text: 'Return a cleanup function to clear the interval when the component unmounts.',
            order: 2
          },
          {
            id: 'effect-hint-3',
            text: 'Add dependencies to the dependency array to control when the effect runs.',
            order: 3
          }
        ],
        quiz: {
          id: 'effect-quiz-1',
          question: 'When does the cleanup function in useEffect run?',
          type: 'multiple-choice',
          options: [
            'Before the effect runs',
            'Only when the component unmounts',
            'Before the next effect runs and when component unmounts',
            'After the effect runs'
          ],
          correctAnswer: 2,
          explanation: 'The cleanup function runs before the next effect runs (if dependencies changed) and when the component unmounts. This prevents memory leaks and cleans up subscriptions.'
        },
        visualAid: {
          id: 'effect-lifecycle',
          type: 'lifecycle',
          title: 'useEffect Lifecycle',
          description: 'How useEffect runs and cleans up',
          elements: [
            { id: 'mount', type: 'component', label: 'Component Mount', x: 50, y: 50, color: 'green' },
            { id: 'effect', type: 'component', label: 'Effect Runs', x: 200, y: 50, color: 'blue' },
            { id: 'deps-change', type: 'component', label: 'Dependencies Change', x: 350, y: 50, color: 'orange' },
            { id: 'cleanup', type: 'component', label: 'Cleanup', x: 200, y: 150, color: 'purple' },
            { id: 'unmount', type: 'component', label: 'Component Unmount', x: 50, y: 150, color: 'red' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'mount', toId: 'effect' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'effect', toId: 'deps-change' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'deps-change', toId: 'cleanup' },
            { id: 'arrow4', type: 'arrow', label: '', x: 0, y: 0, fromId: 'cleanup', toId: 'unmount' }
          ]
        },
        achievementIds: ['effect-specialist']
      }
    ]
  },
  {
    id: 'custom-hooks',
    title: 'Custom Hooks',
    description: 'Create reusable stateful logic',
    icon: '🪝',
    subLessons: [
      {
        id: 'custom-hooks',
        title: 'Building Custom Hooks',
        description: 'Extract and reuse stateful logic',
        explanation: 'Custom hooks allow you to extract component logic into reusable functions. They must start with "use" and can use other hooks.',
        concepts: [
          'Custom hook naming (use prefix)',
          'Extracting stateful logic',
          'Reusable hook patterns',
          'Hook composition'
        ],
        files: {
          'App.tsx': `import { useState, useEffect } from 'react';

// TODO: Extract this logic into a custom hook
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('London');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setWeather({
        city: cityName,
        temperature: Math.floor(Math.random() * 35) + 5,
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)]
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {loading ? <p>Loading...</p> : <p>{weather.city}: {weather.temperature}°C, {weather.condition}</p>}
    </div>
  );
}`
        },
        solutionFiles: {
          'App.tsx': `import { useState, useEffect } from 'react';

// Custom hook for weather data
function useWeather(initialCity = 'London') {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API call with random delay and occasional errors
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500));
      
      // Simulate occasional API errors
      if (Math.random() < 0.1) {
        throw new Error('Weather service temporarily unavailable');
      }
      
      const conditions = ['☀️ Sunny', '☁️ Cloudy', '🌧️ Rainy', '❄️ Snowy'];
      setWeather({
        city: cityName,
        temperature: Math.floor(Math.random() * 35) + 5,
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        humidity: Math.floor(Math.random() * 60) + 40,
        windSpeed: Math.floor(Math.random() * 20) + 5
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue];
}

// Custom hook for debounced input
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function WeatherApp() {
  const [city, setCity] = useLocalStorage('weatherCity', 'London');
  const [inputCity, setInputCity] = useState(city);
  const debouncedCity = useDebounce(inputCity, 800);
  
  const { weather, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    if (debouncedCity && debouncedCity !== city) {
      setCity(debouncedCity);
    }
  }, [debouncedCity]);

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const handleRefresh = () => {
    fetchWeather(city);
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 20px 0', fontSize: '2.5rem' }}>
          🌤️ Weather App
        </h1>
        
        <div style={{ marginBottom: '25px' }}>
          <input 
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Enter city name..."
            style={{
              padding: '15px 20px',
              fontSize: '18px',
              border: 'none',
              borderRadius: '25px',
              width: '300px',
              maxWidth: '100%',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
          <button
            onClick={handleRefresh}
            disabled={loading}
            style={{
              marginLeft: '15px',
              padding: '15px 20px',
              fontSize: '18px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '25px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            🔄 Refresh
          </button>
        </div>

        {loading && (
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⏳</div>
            <p style={{ margin: 0, fontSize: '18px' }}>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div style={{
            padding: '20px',
            backgroundColor: 'rgba(255,0,0,0.2)',
            border: '2px solid rgba(255,0,0,0.3)',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: 0, fontSize: '18px' }}>❌ {error}</p>
          </div>
        )}

        {weather && !loading && !error && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '25px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ margin: '0 0 15px 0', fontSize: '2rem' }}>
              📍 {weather.city}
            </h2>
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              margin: '20px 0'
            }}>
              {weather.temperature}°C
            </div>
            <div style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              {weather.condition}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              fontSize: '16px',
              opacity: 0.9
            }}>
              <div>
                <div>💧 Humidity</div>
                <div><strong>{weather.humidity}%</strong></div>
              </div>
              <div>
                <div>💨 Wind Speed</div>
                <div><strong>{weather.windSpeed} km/h</strong></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#495057' }}>🔧 Custom Hooks Used:</h3>
        <ul style={{ color: '#6c757d', lineHeight: '1.6' }}>
          <li><strong>useWeather:</strong> Manages weather data fetching and states</li>
          <li><strong>useLocalStorage:</strong> Persists city preference across sessions</li>
          <li><strong>useDebounce:</strong> Delays API calls while user is typing</li>
        </ul>
      </div>
    </div>
  );
}`
        },
        task: 'Extract the weather logic into a custom hook, add localStorage persistence and debounced search.',
        hints: [
          {
            id: 'hook-hint-1',
            text: 'Create a function starting with "use" and move the weather-related state and logic there.',
            order: 1
          },
          {
            id: 'hook-hint-2',
            text: 'Return an object with the state and functions that components need.',
            order: 2
          },
          {
            id: 'hook-hint-3',
            text: 'Custom hooks can use other hooks like useState and useEffect internally.',
            order: 3
          }
        ],
        quiz: {
          id: 'hook-quiz-1',
          question: 'What naming convention must custom hooks follow?',
          type: 'multiple-choice',
          options: [
            'They must end with "Hook"',
            'They must start with "use"',
            'They must be in camelCase',
            'They can have any name'
          ],
          correctAnswer: 1,
          explanation: 'Custom hooks must start with "use" (like useState, useEffect). This tells React that this function is a hook and enables React to check for hook rules violations.'
        },
        achievementIds: ['hook-architect']
      }
    ]
  }
];