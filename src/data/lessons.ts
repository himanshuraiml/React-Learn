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
  }
];