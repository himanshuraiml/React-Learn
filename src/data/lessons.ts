import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'components',
    title: 'React Components',
    description: 'Learn the building blocks of React applications',
    icon: '⚛️',
    subLessons: [
      {
        id: 'intro-components',
        title: 'Introduction to Components',
        description: 'Understand what React components are and why they matter',
        explanation: 'React components are the cornerstone of modern web development with React. They represent a paradigm shift from traditional HTML/JavaScript development to a component-based architecture. A component is essentially a JavaScript function that returns JSX (a syntax extension that looks like HTML but is actually JavaScript). This approach allows you to create reusable, modular pieces of UI that can be composed together like building blocks. Components encapsulate both the visual structure (what the UI looks like) and the behavior (how it responds to user interactions), making your code more organized, maintainable, and scalable. Unlike traditional web development where HTML, CSS, and JavaScript are separate, React components bring them together in a cohesive unit. This makes it easier to reason about your application, test individual pieces, and collaborate with other developers. Every React application is essentially a tree of components, from small UI elements like buttons to entire page layouts.',
        concepts: [
          'Components are JavaScript functions that return JSX - a syntax extension for JavaScript',
          'JSX combines HTML-like syntax with JavaScript expressions using curly braces {}',
          'Components encapsulate both visual structure (UI) and behavior (logic) in one place',
          'Component-based architecture promotes code reusability and modularity',
          'Each component manages its own piece of the UI independently',
          'Components can be nested inside other components to build complex interfaces',
          'React uses a virtual DOM to efficiently update only changed components',
          'Components follow a declarative programming paradigm - you describe what the UI should look like',
          'Component names must always start with a capital letter to distinguish them from HTML elements'
        ],
        files: {
          '/App.tsx': `// This is a simple React component
function Welcome() {
  return <h1>Hello World!</h1>;
}

function App() {
  return <Welcome />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}

.welcome-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
}

p {
  color: #666;
  text-align: center;
  line-height: 1.6;
}`
        },
        solutionFiles: {
          '/App.tsx': `// A more complete React component
function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Hello World!</h1>
      <p>Welcome to your first React component!</p>
    </div>
  );
}

function App() {
  return <Welcome />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}

.welcome-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #2563eb;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

p {
  color: #6b7280;
  line-height: 1.6;
  font-size: 1.1rem;
}`
        },
        task: 'Modify the Welcome component to include a paragraph element with a welcome message. Wrap both elements in a div container.'
      },
      {
        id: 'creating-components',
        title: 'Creating Your First Component',
        description: 'Build and customize your own React components',
        explanation: 'Creating your first React component is an exciting milestone in your React journey. The process involves writing a JavaScript function that returns JSX - a powerful syntax extension that allows you to write HTML-like code directly in your JavaScript. This might seem unusual at first if you come from traditional web development, but it\'s incredibly powerful. When you write JSX, you\'re not actually writing HTML - you\'re writing JavaScript expressions that React converts into virtual DOM elements. This allows you to seamlessly integrate JavaScript logic directly into your markup using curly braces {}. You can include variables, perform calculations, call functions, and even include conditional logic right within your component\'s return statement. The capital letter naming convention isn\'t just a style choice - it\'s a requirement that helps React\'s JSX parser distinguish between your custom components and built-in HTML elements. This component-based approach allows you to create reusable UI pieces that can accept different data and behave differently based on that data.',
        concepts: [
          'Component names must start with a capital letter (PascalCase naming convention)',
          'Components are JavaScript functions that return a single JSX element or fragment',
          'JSX looks like HTML but is actually JavaScript that gets compiled to React.createElement calls',
          'JavaScript expressions can be embedded in JSX using curly braces {}',
          'Variables, function calls, and calculations can be included directly in JSX',
          'JSX elements must be properly closed (self-closing tags need />)',
          'You can use JavaScript template literals and string interpolation within JSX',
          'Comments in JSX must be written as {/* comment */} instead of HTML comments',
          'JSX expressions must have one parent element or use React Fragments (<> </>)',
          'The return statement can span multiple lines when wrapped in parentheses'
        ],
        files: {
          '/App.tsx': `function Greeting() {
  return <h1>Hello!</h1>;
}

function App() {
  return <Greeting />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.greeting-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}

h1 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  color: #6b7280;
  margin: 0.5rem 0;
  line-height: 1.6;
}`
        },
        solutionFiles: {
          '/App.tsx': `function Greeting() {
  const name = "React Developer";
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="greeting-card">
      <h1>Hello, {name}!</h1>
      <p>Current time: {currentTime}</p>
      <p>Ready to learn React?</p>
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.greeting-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

h1 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
}

p {
  color: #6b7280;
  margin: 0.5rem 0;
  line-height: 1.6;
  font-size: 1.1rem;
}

p:last-child {
  font-weight: 600;
  color: #3b82f6;
}`
        },
        task: 'Create a personalized greeting component that displays your name, the current time, and asks if you are ready to learn React. Use JavaScript variables and expressions within JSX.'
      },
      {
        id: 'component-structure',
        title: 'Component Structure and JSX',
        description: 'Master JSX syntax and component organization',
        explanation: 'JSX (JavaScript XML) represents one of React\'s most powerful features and biggest innovations in web development. It\'s a syntax extension that allows you to write HTML-like code directly in your JavaScript files, bridging the gap between markup and logic in an elegant way. Under the hood, JSX is transpiled (converted) by tools like Babel into React.createElement() function calls, which create virtual DOM elements that React uses to efficiently update the real DOM. This compilation process means you get all the benefits of JavaScript - variables, functions, loops, conditionals - right within your markup. However, JSX has its own rules and conventions that differ from HTML. For example, you must use className instead of class (because class is a reserved word in JavaScript), and all elements must be properly closed. The power of JSX becomes evident when you start embedding JavaScript expressions using curly braces - you can include variables, perform calculations, call functions, and even include complex conditional logic. Understanding JSX deeply is crucial because it\'s not just about syntax - it\'s about understanding how React thinks about UI as a function of state.',
        concepts: [
          'JSX is a syntax extension that gets transpiled to React.createElement() calls',
          'JSX elements must have a single parent element or be wrapped in React Fragments (<> </>)',
          'Use className instead of class attribute (class is a JavaScript reserved word)',
          'Use htmlFor instead of for attribute in labels (for is a JavaScript reserved word)',
          'All JSX elements must be properly closed - self-closing tags need />',
          'JavaScript expressions are embedded using curly braces {} - these can include variables, functions, calculations',
          'JSX attribute names use camelCase (onClick instead of onclick, onChange instead of onchange)',
          'Inline styles in JSX must be objects with camelCase properties: style={{backgroundColor: \'red\'}}',
          'JSX prevents injection attacks by automatically escaping values',
          'You can conditionally render elements using && operator or ternary expressions',
          'Arrays of JSX elements can be rendered directly, but each element needs a unique key prop',
          'JSX comments must be written as {/* comment */} and cannot be HTML-style comments'
        ],
        files: {
          '/App.tsx': `function UserCard() {
  return (
    <div>
      <h2>John Doe</h2>
      <p>Software Developer</p>
    </div>
  );
}

function App() {
  return <UserCard />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f3f4f6;
  min-height: 100vh;
}

.user-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 2rem auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

h2 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
}

p {
  margin: 0.25rem 0;
  color: #6b7280;
}`
        },
        solutionFiles: {
          '/App.tsx': `function UserCard() {
  const user = {
    name: "John Doe",
    title: "Software Developer",
    email: "john.doe@example.com",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150",
    isOnline: true
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <div className="user-avatar">
          <img
            src={user.avatar} 
            alt="User avatar" 
            className="avatar"
          />
          <div className={"status-indicator " + (user.isOnline ? 'online' : 'offline')}></div>
        </div>
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.title}</p>
          <p className="email">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <UserCard />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f3f4f6;
  min-height: 100vh;
}

.user-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 2rem auto;
  transition: box-shadow 0.3s ease;
}

.user-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-avatar {
  position: relative;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.online { background-color: #10b981; }
.offline { background-color: #6b7280; }

h2 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
}

p {
  margin: 0.25rem 0;
  color: #6b7280;
}

.email {
  font-size: 0.875rem;
  color: #9ca3af;
}`
        },
        task: 'Transform the basic user card into a complete profile card with an avatar image, email, online status indicator, and proper styling using Tailwind classes.'
      },
      {
        id: 'components-challenge',
        title: 'Component Challenge',
        description: 'Put your component skills to the test',
        explanation: 'This comprehensive challenge brings together all the fundamental concepts you\'ve learned about React components into a real-world scenario. You\'ll be building a complete e-commerce product card component, which is a common pattern in web applications. This challenge will test your understanding of JSX syntax, JavaScript integration, conditional rendering, and component structure. You\'ll work with complex data objects, perform calculations (like discount percentages), implement conditional logic for different states (in stock vs out of stock, on sale vs regular price), and create interactive elements. This type of component demonstrates how React components can encapsulate both presentation and logic - the product data, the business rules for displaying prices and availability, and the visual presentation all come together in a single, reusable component. You\'ll also work with event handlers, dynamic CSS classes based on component state, and complex JSX structures with nested elements. This challenge simulates what you\'d encounter in a real React application, where components need to handle various states and display information dynamically based on data.',
        concepts: [
          'Integrating complex JavaScript objects and data structures within React components',
          'Performing calculations and data transformations directly in JSX expressions',
          'Implementing conditional rendering based on multiple criteria (stock status, sale status)',
          'Using JavaScript template literals and string interpolation for dynamic content',
          'Organizing complex, nested JSX structures with proper indentation and readability',
          'Applying dynamic CSS classes based on component data and state',
          'Creating interactive elements with event handlers (onClick, disabled states)',
          'Working with array methods like Math.floor(), repeat(), and conditional operators',
          'Implementing business logic within components (discount calculations, stock validation)',
          'Building reusable component patterns that can work with different data sets',
          'Structuring components for maintainability and readability',
          'Handling edge cases and different component states gracefully'
        ],
        files: {
          '/App.tsx': `// Create a Product Card component for an e-commerce site
const product = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
  image: 'https://via.placeholder.com/200',
  description: 'High-quality wireless headphones'
};

function ProductCard() {
  return (
    <div>
      <h3>Product Name</h3>
      <p>Price: $0.00</p>
    </div>
  );
}

function App() {
  return <ProductCard />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f9fafb;
  min-height: 100vh;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 320px;
  margin: 2rem auto;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.125rem;
}

p {
  margin: 0;
  color: #6b7280;
  font-weight: 600;
}`
        },
        solutionFiles: {
          '/App.tsx': `function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=300",
    inStock: true,
    isOnSale: true
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        {product.isOnSale && (
          <span className="sale-badge">
            -{discount}% OFF
          </span>
        )}
        {!product.inStock && (
          <div className="out-of-stock-overlay">
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        
        <div className="rating">
          <div className="stars">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="review-count">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="product-footer">
          <div className="price-section">
            <span className="current-price">
              alt={\`$\{product.price\}\`} 
            </span>
            {product.isOnSale && (
              <span className="original-price">
                 alt={\`$\{product.originalPrice\}\`} 
              </span>
            )}
          </div>
          
          <button 
            className={"add-to-cart " + (
              product.inStock 
                ? 'in-stock' 
                : 'out-of-stock'
            )}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <ProductCard />;
}

export default App;`,
          '/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f9fafb;
  min-height: 100vh;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 320px;
  margin: 2rem auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-image-container {
  position: relative;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.sale-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ef4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.out-of-stock-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.out-of-stock-overlay span {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}

.product-info {
  padding: 1rem;
}

h3 {
  margin: 0 0 0.75rem 0;
  color: #1f2937;
  font-size: 1.125rem;
  font-weight: 600;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.stars {
  color: #fbbf24;
  font-size: 1rem;
}

.review-count {
  font-size: 0.875rem;
  color: #6b7280;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.original-price {
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: line-through;
}

.add-to-cart {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-to-cart.in-stock {
  background: #3b82f6;
  color: white;
}

.add-to-cart.in-stock:hover {
  background: #2563eb;
}

.add-to-cart.out-of-stock {
  background: #d1d5db;
  color: #6b7280;
  cursor: not-allowed;
}`
        },
        task: 'Create a complete e-commerce product card that displays product image, name, rating with stars, price (with sale price if applicable), stock status, and an add to cart button. Include proper styling and conditional rendering for sales and stock status.'
      }
    ]
  },
  {
    id: 'props',
    title: 'Props & Data Flow',
    description: 'Learn to pass data between components',
    icon: '📦',
    subLessons: [
      {
        id: 'intro-props',
        title: 'Understanding Props',
        description: 'Learn what props are and how they work',
        explanation: 'Props (short for properties) represent one of the most important concepts in React - the mechanism for passing data from parent components to child components. Think of props as the "arguments" to your component functions, similar to how you pass arguments to regular JavaScript functions. This is what makes React components truly powerful and reusable. Without props, every component would be static and show the same content every time. With props, a single component can display different data and behave differently based on what\'s passed to it. For example, a single Button component can be used throughout your application for "Save", "Cancel", "Delete" actions just by passing different props. Props flow in one direction - from parent to child - which is called "unidirectional data flow." This makes your application predictable and easier to debug because you always know where data is coming from. Props are immutable within the receiving component, meaning the child component cannot modify the props it receives. This enforces a clear separation of concerns and prevents unexpected side effects. Understanding props is crucial because they enable component composition - the ability to build complex UIs by combining simpler components.',
        concepts: [
          'Props are the mechanism for passing data from parent to child components',
          'Props flow unidirectionally - from parent to child, never upward',
          'Props are immutable within the receiving component - they cannot be modified',
          'Props are passed as attributes in JSX, similar to HTML attributes',
          'Any JavaScript value can be passed as props: strings, numbers, objects, arrays, functions',
          'Props enable component reusability - the same component can display different data',
          'Components can define default props for optional properties',
          'Props enable component composition - building complex UIs from simple components',
          'Functions can be passed as props to enable child-to-parent communication',
          'Props can be validated using PropTypes or TypeScript for better development experience',
          'Destructuring props makes code cleaner and more readable',
          'The children prop is special and contains any JSX nested within component tags'
        ],
        initialCode: `function Greeting() {
  return <h1>Hello!</h1>;
}

function App() {
  return <Greeting />;
}

export default App;`,
        solution: `function Greeting(props) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h1 className="text-2xl font-bold text-blue-800">Hello, {props.name}!</h1>
      <p className="text-blue-600">You are {props.age} years old.</p>
      <p className="text-blue-600">Welcome to {props.location}!</p>
    </div>
  );
}

function App() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <Greeting name="Alice" age={25} location="New York" />
    </div>
  );
}

export default App;`,
        task: 'Modify the Greeting component to accept props for name, age, and location. Display these props in the component output with proper styling.'
      },
      {
        id: 'destructuring-props',
        title: 'Destructuring Props',
        description: 'Learn clean ways to work with props',
        explanation: 'Destructuring props is a modern JavaScript feature that significantly improves code readability and developer experience in React applications. Instead of repeatedly typing props.name, props.email, props.isActive throughout your component, destructuring allows you to extract these values directly into variables. You can destructure props either in the function parameters (parameter destructuring) or within the function body (assignment destructuring). Parameter destructuring is generally preferred because it makes the component\'s interface immediately clear - you can see exactly what props the component expects just by looking at the function signature. Destructuring also enables you to provide default values directly in the parameter list, which is cleaner than using conditional logic inside the component. The rest operator (...) can be used with destructuring to collect remaining props, which is useful for passing props through to child components or HTML elements. This technique is essential for building professional React applications because it makes your code more maintainable, easier to read, and helps prevent typos when accessing props. It also enables better IDE support with autocomplete and error detection.',
        concepts: [
          'Destructuring extracts object properties into individual variables',
          'Parameter destructuring in function signatures makes component interfaces clear',
          'Assignment destructuring can be used within the component body for complex cases',
          'Default values can be provided directly in the destructuring assignment',
          'Default values prevent undefined errors and make components more robust',
          'The rest operator (...rest) collects remaining props into an object',
          'Rest props are useful for passing through props to child components or HTML elements',
          'Destructuring improves code readability by eliminating repetitive props. syntax',
          'IDE support is better with destructuring - autocomplete and error detection',
          'Destructuring makes it easier to spot typos and missing props during development',
          'Nested destructuring can be used for complex prop structures',
          'Renaming variables during destructuring: {name: userName} = props'
        ],
        initialCode: `function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.role}</p>
    </div>
  );
}

function App() {
  return (
    <UserProfile 
      name="John Doe" 
      email="john@example.com" 
      role="Developer" 
    />
  );
}

export default App;`,
        solution: `function UserProfile({ name, email, role = "User", avatar, isOnline = false }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img 
            src={avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100"} 
            alt="Profile" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className={"absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white " + (isOnline ? "bg-green-400" : "bg-gray-400")}></div>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="py-8">
      <UserProfile 
        name="John Doe" 
        email="john@example.com" 
        role="Senior Developer"
        isOnline={true}
      />
    </div>
  );
}

export default App;`,
        task: 'Refactor the UserProfile component to use destructured props with default values. Add an avatar image and online status indicator.'
      },
      {
        id: 'prop-types',
        title: 'TypeScript Props',
        description: 'Type-safe props with TypeScript',
        explanation: 'TypeScript integration with React props represents a quantum leap in development experience and code quality. TypeScript allows you to define interfaces that describe exactly what props your components expect, including their types, whether they\'re required or optional, and even what values are acceptable (through union types). This type safety catches errors at compile time rather than runtime, preventing many common bugs before they reach production. When you define prop types, your IDE can provide intelligent autocomplete, showing you exactly what props are available and their types as you write code. This is invaluable when working with complex components or in team environments. TypeScript interfaces also serve as living documentation - other developers (including future you) can quickly understand how to use a component just by looking at its interface definition. Generic types allow you to create flexible, reusable components that work with different data types while maintaining type safety. Optional props with default values, union types for variants, and function types for event handlers all contribute to creating robust, predictable components that are easier to use and maintain.',
        concepts: [
          'TypeScript interfaces define the exact structure and types of component props',
          'Interface definitions serve as both type checking and documentation',
          'Optional props are marked with ? and can be undefined',
          'Required props must be provided or TypeScript will show an error',
          'Union types allow props to accept multiple specific values: \'primary\' | \'secondary\'',
          'Generic types enable reusable components that work with different data types',
          'Function types define the signature of event handlers and callbacks',
          'React.ReactNode type is used for props that can contain JSX elements',
          'Default parameter values in destructuring provide fallbacks for optional props',
          'Compile-time error checking prevents runtime errors in production',
          'IDE autocomplete and IntelliSense work better with TypeScript interfaces',
          'Refactoring is safer with TypeScript - changes propagate through the codebase',
          'Type assertions can be used when you know more about the type than TypeScript',
          'Extending interfaces allows for composition and reusability of prop definitions'
        ],
        initialCode: `function Button(props) {
  return (
    <button>
      {props.children}
    </button>
  );
}

function App() {
  return <Button>Click me</Button>;
}

export default App;`,
        solution: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }: ButtonProps) {
  const baseClasses = "font-medium rounded transition-colors";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed" : ""
  ].join(" ");

  return (
    <button 
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="p-8 space-x-4">
      <Button variant="primary" size="lg">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger" size="sm">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;`,
        task: 'Create a typed Button component with props for variant, size, disabled state, and click handler. Use TypeScript interfaces and implement proper styling.'
      }
    ]
  },
  {
    id: 'state',
    title: 'State & Hooks',
    description: 'Manage component state with React hooks',
    icon: '🔄',
    subLessons: [
      {
        id: 'intro-state',
        title: 'Understanding State',
        description: 'Learn what state is and why it matters',
        explanation: 'State is one of the most fundamental concepts in React that enables components to be dynamic and interactive. While props allow data to flow into components from their parents, state represents data that is internal to a component and can change over time in response to user interactions, network requests, timers, or other events. State is what makes your React applications come alive - it\'s the difference between a static website and an interactive application. When state changes, React automatically re-renders the component and its children to reflect the new state, ensuring the UI always stays in sync with the underlying data. The useState hook is the primary way to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. State updates are asynchronous and may be batched for performance reasons. React uses Object.is() comparison to determine if state has actually changed before triggering a re-render. Understanding state is crucial because it\'s the foundation for creating interactive user interfaces, handling forms, managing loading states, and building dynamic applications that respond to user actions.',
        concepts: [
          'State represents mutable data that belongs to a specific component instance',
          'State is local to a component and not accessible to other components unless passed as props',
          'State changes trigger re-renders of the component and its children',
          'The useState hook is the primary way to add state to functional components',
          'useState returns a tuple: [currentValue, setterFunction]',
          'State setter functions are asynchronous and may batch multiple updates',
          'React uses Object.is() comparison to determine if state has changed',
          'State updates should always create new objects/arrays, not mutate existing ones',
          'Functional updates (prevState => newState) ensure correct state transitions',
          'State can hold any JavaScript value: primitives, objects, arrays, functions',
          'Multiple useState hooks can be used in a single component for different state variables',
          'State updates may be batched for performance in event handlers',
          'State provides the foundation for creating interactive, dynamic user interfaces',
          'State should be kept as simple and flat as possible for better performance'
        ],
        initialCode: `import { useState } from 'react';

function Counter() {
  return (
    <div>
      <h1>Count: 0</h1>
      <button>Increment</button>
    </div>
  );
}

export default Counter;`,
        solution: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Count: {count}</h1>
      <div className="space-x-2">
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <button 
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;`,
        task: 'Create a counter component with increment, decrement, and reset functionality using the useState hook.'
      },
      {
        id: 'complex-state',
        title: 'Complex State Management',
        description: 'Working with objects and arrays in state',
        explanation: 'Managing complex state involving objects and arrays is a critical skill in React development that requires understanding immutability principles. React uses shallow comparison (Object.is()) to determine if state has changed, which means if you mutate an existing object or array, React won\'t detect the change and won\'t re-render your component. This is a common source of bugs for developers new to React. Instead, you must create new objects or arrays whenever you want to update state. The spread operator (...) is your best friend for creating copies of objects and arrays. For objects, you use {...oldObject, changedProperty: newValue} to create a new object with updated properties. For arrays, methods like map(), filter(), and concat() return new arrays, while push(), pop(), and splice() mutate existing arrays and should be avoided in state updates. Understanding these patterns is essential because real applications often deal with complex data structures like lists of users, shopping cart items, form data with multiple fields, or nested configuration objects. Tools like Immer can help manage complex immutable updates, but understanding the fundamentals is crucial.',
        concepts: [
          'Immutability is required for React to detect state changes and trigger re-renders',
          'Object.is() shallow comparison means nested changes might not be detected',
          'Spread operator (...) creates shallow copies of objects and arrays',
          'Object updates: setState({...oldState, changedProperty: newValue})',
          'Array updates should use methods that return new arrays (map, filter, concat)',
          'Avoid mutating methods like push(), pop(), splice(), sort() directly on state',
          'Functional state updates ensure correct updates when state depends on previous state',
          'Nested object updates require spreading at each level of nesting',
          'Array of objects updates often use map() to update specific items',
          'Complex state might benefit from useReducer hook instead of multiple useState',
          'State normalization (flat structures) can simplify complex updates',
          'Libraries like Immer can help manage complex immutable updates',
          'Always prefer returning new state objects rather than modifying existing ones',
          'State structure design affects the complexity of your update logic'
        ],
        initialCode: `import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      <h1>Todo App</h1>
      <input placeholder="Add a todo..." />
      <button>Add</button>
      <ul>
        {/* Todo list will go here */}
      </ul>
    </div>
  );
}

export default TodoApp;`,
        solution: `import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo App</h1>
      
      <div className="flex mb-4">
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a todo..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center space-x-2 p-2 border border-gray-200 rounded">
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span className={"flex-1 " + (todo.completed ? "line-through text-gray-500" : "text-gray-800")}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No todos yet. Add one above!</p>
      )}
    </div>
  );
}

export default TodoApp;`,
        task: 'Build a complete todo application with add, toggle complete, and delete functionality using complex state management.'
      },
      {
        id: 'useeffect-hook',
        title: 'useEffect Hook',
        description: 'Handle side effects in functional components',
        explanation: 'The useEffect hook is React\'s powerful mechanism for handling side effects in functional components, representing a paradigm shift from lifecycle methods in class components. Side effects are operations that interact with the outside world or affect something beyond the component\'s render output - things like API calls, setting up subscriptions, timers, manually changing the DOM, or logging. useEffect consolidates the functionality of three class component lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount. By default, effects run after every render, but you can control when they run using the dependency array. An empty dependency array means the effect runs only once (after the initial render), while including variables in the array means the effect runs whenever those variables change. Effects can also return a cleanup function, which React calls before the component unmounts or before running the effect again - this prevents memory leaks and unwanted behavior. Understanding useEffect is crucial for building real-world applications that need to fetch data, handle subscriptions, manage timers, or integrate with external libraries.',
        concepts: [
          'useEffect handles side effects that occur outside of the component render cycle',
          'Effects run after the DOM has been updated, not during render',
          'By default, effects run after every render (both initial and subsequent)',
          'Dependency array controls when effects run: [], [dep1, dep2], or no array',
          'Empty dependency array [] means effect runs only once after initial render',
          'Including variables in dependency array means effect runs when those variables change',
          'Cleanup functions prevent memory leaks and cancel ongoing operations',
          'Cleanup functions run before component unmounts and before effect runs again',
          'Multiple useEffect hooks can be used to separate different concerns',
          'Effects should be pure and not have side effects during render',
          'Common use cases: API calls, subscriptions, timers, DOM manipulation',
          'useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount',
          'Missing dependencies in the array can cause stale closure bugs',
          'ESLint plugin can help identify missing dependencies automatically'
        ],
        initialCode: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
}

export default Timer;`,
        solution: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return \`\${minutes.toString().padStart(2, '0')}:\${remainingSeconds.toString().padStart(2, '0')}\`;

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{formatTime(seconds)}</h1>
      
      <div className="space-x-2">
        <button 
          onClick={startTimer}
          disabled={isRunning}
          className={"px-4 py-2 rounded transition-colors " + (isRunning 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-green-500 text-white hover:bg-green-600"
          )}
        >
          Start
        </button>
        
        <button 
          onClick={stopTimer}
          disabled={!isRunning}
          className={"px-4 py-2 rounded transition-colors " + (!isRunning 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-red-500 text-white hover:bg-red-600"
          )}
        >
          Stop
        </button>
        
        <button 
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        Status: {isRunning ? 'Running' : 'Stopped'}
      </div>
    </div>
  );
}

export default Timer;`,
        task: 'Create a timer component that starts, stops, and resets using useEffect to manage the interval. Format the display as MM:SS and show the current status.'
      }
    ]
  },
  {
    id: 'events',
    title: 'Event Handling',
    description: 'Handle user interactions and events',
    icon: '🖱️',
    subLessons: [
      {
        id: 'basic-events',
        title: 'Basic Event Handling',
        description: 'Learn to handle clicks, changes, and other events',
        explanation: 'Event handling in React bridges the gap between user interactions and application state changes, making your components truly interactive. While similar to vanilla JavaScript event handling, React uses SyntheticEvents - a wrapper system around native browser events that provides consistent behavior across different browsers and platforms. SyntheticEvents have the same interface as native events, including preventDefault() and stopPropagation(), but they\'re pooled for performance and normalized to work identically across browsers. Event handlers in React are passed as props using camelCase naming (onClick, onChange, onSubmit), and they receive the SyntheticEvent object as their first parameter. You can access the target element, event type, and other event properties just like with native events. Event handling is often combined with state management - user interactions update component state, which triggers re-renders and updates the UI. Understanding event handling is essential because it\'s how users interact with your application - clicking buttons, typing in inputs, submitting forms, hovering over elements, and more. React\'s event system also supports event delegation, where events are handled at a higher level in the DOM tree for better performance.',
        concepts: [
          'SyntheticEvents provide consistent cross-browser event handling',
          'SyntheticEvents wrap native browser events with a consistent interface',
          'Event handlers are passed as props using camelCase naming (onClick, onChange)',
          'Event handler functions receive SyntheticEvent objects as parameters',
          'preventDefault() stops the default browser behavior for events',
          'stopPropagation() prevents event bubbling to parent elements',
          'Event handlers can access event.target to get the element that triggered the event',
          'React uses event delegation - events are handled at the root level for performance',
          'Event handlers should update state to trigger re-renders and UI updates',
          'Form events (onSubmit, onChange, onInput) are commonly used for user input',
          'Mouse events (onClick, onMouseOver, onMouseOut) handle pointer interactions',
          'Keyboard events (onKeyDown, onKeyUp, onKeyPress) handle keyboard input',
          'Event handlers can be inline functions or references to component methods',
          'Custom event handlers can be passed to child components as props for communication'
        ],
        initialCode: `function Button() {
  return (
    <div>
      <button>Click me</button>
      <input placeholder="Type something..." />
      <form>
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Button;`,
        solution: `import { useState } from 'react';

function InteractiveForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleButtonClick = () => {
    setMessage('Button was clicked!');
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData({ email, timestamp: new Date().toLocaleString() });
    setEmail(''); // Clear form
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      setMessage('Ctrl+Enter was pressed!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Event Handling Demo</h1>
      
      <div className="space-y-4">
        <button 
          onClick={handleButtonClick}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Click me
        </button>
        
        {message && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-800 rounded">
            {message}
          </div>
        )}
        
        <input 
          type="text"
          placeholder="Type something and press Ctrl+Enter..."
          onKeyPress={handleKeyPress}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Submit Email
          </button>
        </form>
        
        {submittedData && (
          <div className="p-3 bg-blue-100 border border-blue-400 text-blue-800 rounded">
            <strong>Submitted:</strong> {submittedData.email}<br />
            <strong>Time:</strong> {submittedData.timestamp}
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveForm;`,
        task: 'Create an interactive form that handles button clicks, input changes, form submission, and keyboard events. Display feedback for each interaction.'
      }
    ]
  },
  {
    id: 'conditional-rendering',
    title: 'Conditional Rendering',
    description: 'Show different content based on conditions',
    icon: '🔀',
    subLessons: [
      {
        id: 'basic-conditionals',
        title: 'Basic Conditional Rendering',
        description: 'Learn to show/hide content conditionally',
        explanation: 'Conditional rendering is a fundamental technique in React that allows you to display different content based on application state, user permissions, data availability, or other conditions. This is what makes React applications dynamic and responsive to changing circumstances. React leverages JavaScript\'s logical operators and conditional statements to achieve this, since JSX is just JavaScript under the hood. The logical AND operator (&&) is perfect for showing or hiding content based on a single condition - if the condition is true, the content renders; if false, nothing renders. The ternary operator (condition ? trueContent : falseContent) is ideal for either/or scenarios where you want to show one thing or another. For more complex conditions, you can use if statements before the return statement or even create separate functions that return different JSX based on conditions. Conditional rendering is essential for creating user interfaces that adapt to different states - showing loading spinners while data loads, displaying different content for logged-in vs logged-out users, showing error messages when something goes wrong, or hiding features based on user permissions. Understanding these patterns is crucial for building real-world applications that need to handle various scenarios gracefully.',
        concepts: [
          'Conditional rendering displays different content based on application state or conditions',
          'Logical AND (&&) operator renders content only when condition is true',
          'Ternary operator (condition ? true : false) provides either/or rendering options',
          'Short-circuit evaluation with && prevents rendering when condition is falsy',
          'If statements can be used before return for complex conditional logic',
          'Separate functions can handle complex conditional rendering scenarios',
          'Conditional CSS classes change styling based on component state',
          'Template literals enable dynamic className construction',
          'Multiple conditions can be chained with && or || operators',
          'Conditional rendering is essential for loading states, error handling, and user permissions',
          'null, undefined, and false values don\'t render anything in JSX',
          'Empty arrays [] render nothing, but [0] would render the number 0',
          'Conditional rendering patterns should handle edge cases gracefully',
          'Performance considerations: avoid creating new objects in conditional expressions'
        ],
        initialCode: `function Welcome() {
  const isLoggedIn = false;

  return (
    <div>
      <h1>Welcome to our app</h1>
      {/* Add conditional content here */}
    </div>
  );
}

export default Welcome;`,
        solution: `import { useState } from 'react';

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: 'John Doe', email: 'john@example.com' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to our app</h1>
      
      {isLoggedIn ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 border border-green-400 rounded">
            <h2 className="text-lg font-semibold text-green-800">Hello, {user.name}!</h2>
            <p className="text-green-600">{user.email}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600">You have access to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Dashboard</li>
              <li>Profile Settings</li>
              <li>Premium Features</li>
            </ul>
          </div>
          
          <button 
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">Please log in to access your account.</p>
          
          <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
            <p className="text-yellow-800">🎉 Sign up today and get 30 days free!</p>
          </div>
          
          <button 
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      )}
      
      {/* Always show status indicator */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className={"w-3 h-3 rounded-full " + (isLoggedIn ? "bg-green-400" : "bg-gray-400")}></div>
          <span className="text-sm text-gray-600">
            Status: {isLoggedIn ? 'Logged In' : 'Not Logged In'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;`,
        task: 'Create a welcome component that shows different content for logged-in vs logged-out users. Include login/logout functionality and conditional styling.'
      }
    ]
  }
  // Other lessons (props, state, etc.) would follow with all `${...}` escaped in same way
];