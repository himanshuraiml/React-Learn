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
        explanation: 'State is like a component\'s memory! While props are data passed from outside (like ingredients), state is data that the component manages internally (like keeping track of how many cookies you\'ve baked). Think of state as variables that can change over time and trigger re-renders of your component when they do. This allows your components to be interactive and respond to user actions or data changes.',
        concepts: [],
        files: {},
        solutionFiles: {},
        task: '',
        hints: [],
        achievementIds: []
      }
    ]
  }
]