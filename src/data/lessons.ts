import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'components',
    title: 'React Components',
    description: 'Learn the building blocks of React',
    icon: '🧱',
    subLessons: [
      {
        id: 'intro-components',
        title: 'Introduction to Components',
        description: 'What are React components and why use them?',
        explanation: 'Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces, and think about each piece in isolation. A component takes in parameters, called "props", and returns a hierarchy of views to display via the render method.',
        concepts: [
          'Components are JavaScript functions or classes',
          'They return JSX (JavaScript XML)',
          'Components can be reused throughout your app',
          'They help organize and structure your code'
        ],
        files: {
          '/App.js': `function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;`,
        },
        solutionFiles: {
          '/App.js': `function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is my enhanced React component with better styling.</p>
      <button onClick={() => alert('Button clicked!')}>
        Click me!
      </button>
    </div>
  );
}

export default App;`,
        },
        task: 'Modify the component to display a personalized greeting with your name and add a button that shows an alert when clicked.',
        hints: [
          {
            id: 'hint-1',
            text: 'Change the h1 text to include your name, like "Hello, [Your Name]!"',
            order: 1
          },
          {
            id: 'hint-2',
            text: 'Add a button element below the paragraph',
            order: 2
          },
          {
            id: 'hint-3',
            text: 'Use onClick={() => alert("message")} to handle button clicks',
            order: 3
          }
        ],
        quiz: {
          id: 'components-quiz-1',
          question: 'What do React components return?',
          type: 'multiple-choice',
          options: [
            'HTML strings',
            'JSX elements',
            'Plain JavaScript objects',
            'CSS styles'
          ],
          correctAnswer: 1,
          explanation: 'React components return JSX elements, which describe what the UI should look like. JSX gets compiled to JavaScript function calls that create virtual DOM elements.'
        },
        visualAid: {
          id: 'component-structure',
          type: 'component-tree',
          title: 'Component Structure',
          description: 'How components are organized in React',
          elements: [
            { id: 'app', type: 'component', label: 'App Component', x: 150, y: 50, color: 'blue' },
            { id: 'header', type: 'component', label: 'Header', x: 50, y: 150, color: 'green' },
            { id: 'main', type: 'component', label: 'Main Content', x: 200, y: 150, color: 'green' },
            { id: 'footer', type: 'component', label: 'Footer', x: 125, y: 250, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'header' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'main' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'app', toId: 'footer' }
          ]
        },
        achievementIds: ['first-component']
      },
      {
        id: 'jsx-basics',
        title: 'JSX Fundamentals',
        description: 'Learn the syntax that makes React components readable',
        explanation: 'JSX is a syntax extension to JavaScript that lets you write HTML-like markup inside a JavaScript file. It makes React components more readable and expressive. JSX gets compiled to regular JavaScript function calls.',
        concepts: [
          'JSX looks like HTML but is actually JavaScript',
          'Use curly braces {} to embed JavaScript expressions',
          'JSX elements must have a closing tag or be self-closing',
          'className is used instead of class attribute'
        ],
        files: {
          '/App.js': `function App() {
  const name = "React Developer";
  const isLoggedIn = true;
  
  return (
    <div>
      <h1>Welcome, {/* Add the name variable here */}</h1>
      <p>Status: {/* Show "Online" if logged in, "Offline" if not */}</p>
    </div>
  );
}

export default App;`,
        },
        solutionFiles: {
          '/App.js': `function App() {
  const name = "React Developer";
  const isLoggedIn = true;
  
  return (
    <div className="container">
      <h1>Welcome, {name}!</h1>
      <p>Status: {isLoggedIn ? "Online" : "Offline"}</p>
      <div style={{color: 'blue', fontSize: '18px'}}>
        Current time: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

export default App;`,
        },
        task: 'Complete the JSX by embedding the JavaScript variables and expressions in the marked spots. Add styling and show the current time.',
        hints: [
          {
            id: 'hint-jsx-1',
            text: 'Use curly braces {name} to display the name variable',
            order: 1
          },
          {
            id: 'hint-jsx-2',
            text: 'Use a ternary operator: {isLoggedIn ? "Online" : "Offline"}',
            order: 2
          },
          {
            id: 'hint-jsx-3',
            text: 'Add className for CSS styling and use inline styles with double braces {{}}',
            order: 3
          }
        ],
        quiz: {
          id: 'jsx-quiz-1',
          question: 'How do you embed a JavaScript expression in JSX?',
          type: 'fill-blank',
          code: `<h1>Hello, _____name_____</h1>`,
          correctAnswer: '{name}',
          explanation: 'You embed JavaScript expressions in JSX using curly braces {}. This tells JSX to evaluate the expression and render its result.'
        },
        visualAid: {
          id: 'jsx-flow',
          type: 'data-flow',
          title: 'JSX Compilation',
          description: 'How JSX transforms into JavaScript',
          elements: [
            { id: 'jsx', type: 'component', label: 'JSX Code', x: 50, y: 100, color: 'blue' },
            { id: 'babel', type: 'component', label: 'Babel Compiler', x: 200, y: 100, color: 'orange' },
            { id: 'js', type: 'component', label: 'JavaScript', x: 350, y: 100, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'jsx', toId: 'babel' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'babel', toId: 'js' }
          ]
        },
        achievementIds: ['jsx-master']
      }
    ]
  },
  {
    id: 'props',
    title: 'Props & Data Flow',
    description: 'Pass data between components',
    icon: '📦',
    subLessons: [
      {
        id: 'intro-props',
        title: 'Understanding Props',
        description: 'Learn how to pass data to components',
        explanation: 'Props are how components talk to each other. By passing data from parent to child component, you can make your components dynamic and reusable. Props are read-only and flow in one direction.',
        concepts: [
          'Props are passed from parent to child components',
          'Props are read-only and immutable',
          'Props make components reusable and dynamic',
          'Use destructuring to extract props cleanly'
        ],
        files: {
          '/App.js': `// Create a Greeting component that accepts a name prop
function Greeting(/* Add props parameter here */) {
  return (
    <div>
      <h2>Hello, {/* Display the name prop here */}</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Website</h1>
      {/* Use the Greeting component with different names */}
    </div>
  );
}

export default App;`,
        },
        solutionFiles: {
          '/App.js': `// Greeting component with props
function Greeting(props) {
  return (
    <div style={{
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: '#eff6ff'
    }}>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to our website!</p>
      {props.age && <p>Age: {props.age}</p>}
    </div>
  );
}

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h1>My Website</h1>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;`,
        },
        task: 'Create a Greeting component that accepts name and age as props, then use it multiple times with different values.',
        hints: [
          {
            id: 'hint-props-1',
            text: 'Add props as a parameter to the Greeting function: function Greeting(props)',
            order: 1
          },
          {
            id: 'hint-props-2',
            text: 'Access the name prop using props.name inside curly braces',
            order: 2
          },
          {
            id: 'hint-props-3',
            text: 'Use the component like: <Greeting name="Alice" /> in the App component',
            order: 3
          }
        ],
        quiz: {
          id: 'props-quiz-1',
          question: 'Props flow from _____ to _____?',
          type: 'fill-blank',
          correctAnswer: 'parent to child',
          explanation: 'In React, data flows unidirectionally from parent components to child components through props. This makes the data flow predictable and easier to debug.'
        },
        visualAid: {
          id: 'props-flow',
          type: 'data-flow',
          title: 'Props Data Flow',
          description: 'How props are passed from parent to child',
          elements: [
            { id: 'parent', type: 'component', label: 'Parent Component', x: 100, y: 50, color: 'blue' },
            { id: 'prop1', type: 'prop', label: 'name="Alice"', x: 75, y: 120, color: 'purple' },
            { id: 'prop2', type: 'prop', label: 'age={25}', x: 175, y: 120, color: 'purple' },
            { id: 'child', type: 'component', label: 'Child Component', x: 100, y: 190, color: 'green' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'parent', toId: 'prop1' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'parent', toId: 'prop2' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'prop1', toId: 'child' },
            { id: 'arrow4', type: 'arrow', label: '', x: 0, y: 0, fromId: 'prop2', toId: 'child' }
          ]
        },
        achievementIds: ['props-master']
      }
    ]
  },
  {
    id: 'state',
    title: 'State Management',
    description: 'Learn to manage component state',
    icon: '🔄',
    subLessons: [
      {
        id: 'intro-state',
        title: 'useState Hook',
        description: 'Add state to functional components',
        explanation: 'State allows components to remember values and trigger re-renders when those values change. The useState Hook is the simplest way to add state to functional components.',
        concepts: [
          'State is data that can change over time',
          'useState returns current value and setter function',
          'State changes trigger component re-renders',
          'Each component has its own state'
        ],
        files: {
          '/App.js': `import { useState } from 'react';

function Counter() {
  // Add useState here to track the count
  
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h2>Counter: {/* Display count here */}</h2>
      <div>
        <button 
          // Add onClick handler to decrease count
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          -
        </button>
        <button 
          // Add onClick handler to increase count
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React State Demo</h1>
      <Counter />
    </div>
  );
}

export default App;`,
        },
        solutionFiles: {
          '/App.js': `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      margin: '20px',
      backgroundColor: count > 10 ? '#fef3c7' : 'white'
    }}>
      <h2>Counter: {count}</h2>
      <div>
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          -
        </button>
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          +
        </button>
      </div>
      {count > 10 && (
        <p style={{color: '#d97706', marginTop: '10px'}}>
          🎉 Great job! You've reached {count}!
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{textAlign: 'center'}}>React State Demo</h1>
      <Counter />
    </div>
  );
}

export default App;`,
        },
        task: 'Implement a counter with useState that can increment and decrement. Add a reset button and show a celebration message when count reaches 10.',
        hints: [
          {
            id: 'hint-state-1',
            text: 'Import useState from React and use it like: const [count, setCount] = useState(0)',
            order: 1
          },
          {
            id: 'hint-state-2',
            text: 'Create onClick handlers: onClick={() => setCount(count + 1)}',
            order: 2
          },
          {
            id: 'hint-state-3',
            text: 'Use conditional rendering: {count > 10 && <p>Celebration message!</p>}',
            order: 3
          }
        ],
        quiz: {
          id: 'state-quiz-1',
          question: 'What does useState return?',
          type: 'multiple-choice',
          options: [
            'Just the current state value',
            'Just the setter function',
            'An array with current value and setter function',
            'An object with state properties'
          ],
          correctAnswer: 2,
          explanation: 'useState returns an array with exactly two elements: the current state value and a function to update it. We typically use array destructuring to assign these to variables.'
        },
        visualAid: {
          id: 'state-lifecycle',
          type: 'lifecycle',
          title: 'State Update Cycle',
          description: 'How state changes trigger re-renders',
          elements: [
            { id: 'event', type: 'component', label: 'User Event', x: 50, y: 50, color: 'blue' },
            { id: 'setState', type: 'component', label: 'setState Called', x: 200, y: 50, color: 'orange' },
            { id: 'rerender', type: 'component', label: 'Component Re-renders', x: 350, y: 50, color: 'green' },
            { id: 'newUI', type: 'component', label: 'Updated UI', x: 200, y: 150, color: 'purple' },
            { id: 'arrow1', type: 'arrow', label: '', x: 0, y: 0, fromId: 'event', toId: 'setState' },
            { id: 'arrow2', type: 'arrow', label: '', x: 0, y: 0, fromId: 'setState', toId: 'rerender' },
            { id: 'arrow3', type: 'arrow', label: '', x: 0, y: 0, fromId: 'rerender', toId: 'newUI' }
          ]
        },
        achievementIds: ['state-wizard']
      }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first-component',
    title: 'First Steps',
    description: 'Created your first React component',
    icon: '🏅',
    condition: { type: 'lesson-complete', target: 'intro-components' }
  },
  {
    id: 'jsx-master',
    title: 'JSX Ninja',
    description: 'Mastered JSX syntax and expressions',
    icon: '⚡',
    condition: { type: 'lesson-complete', target: 'jsx-basics' }
  },
  {
    id: 'props-master',
    title: 'Props Master',
    description: 'Completed all props challenges',
    icon: '🏅',
    condition: { type: 'lesson-complete', target: 'intro-props' }
  },
  {
    id: 'state-wizard',
    title: 'State Wizard',
    description: 'Successfully managed component state',
    icon: '⭐',
    condition: { type: 'lesson-complete', target: 'intro-state' }
  }
];