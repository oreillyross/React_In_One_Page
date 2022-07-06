// CURRENT PROGRESS: https://beta-reactjs-org-git-tef-fbopensource.vercel.app/learn/thinking-in-react

// you can directly import css classes, or add the link tag to html file in public dir
// usually the entry point to your app
import { useState } from "react";
import "./styles.css";
// export this piece of UI which can be imported later without the {}
// only one default export allowed in a file
export default function App() {
  // HOOKS let you hook into a components render cycle
  const [count, setCount] = useState(0);
  // Responding to events can be done by declaring
  // event handler functions inside your component
  const handleClick = () => {
    // here you call setCount to update the count, note the inline
    // arrow function
    setCount((count) => count + 1);
  };

  return (
    // the class is replaced by className not to have a clash
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* The component can be nested into another component */}
      {/* Note also the count prop and handleClick prop take
      the passed in state being stored in parent component and 
      the event handler passes the call up to handleClick in parent component */}
      <MyButton count={count} handleClick={handleClick} />
      <Display />
    </div>
  );
}
// A component is a piece of UI. Functions that return markup
// The capital letter is important, distinguishes a React component from
// regular HTML markup.
// The count state value and handleClick event handler destructured
// from props object implicit in React components
function MyButton({ count, handleClick }) {
  const title = "A great Button below";
  const myclass = "cool";
  const mycolor = "green";
  // Adding state is done with useState, this is local to the component

  return (
    <>
      {/* curly braces let you escape back into javascript to embed some 
      variable or carry out some logic.
      One can also pass javascript vars as html attributes by 
      escaping with {} */}
      <div className={myclass}>{title}</div>
      {/* Note the syntax, an object inside the escaped {} of JSX */}
      {/* Also note you can pass JS variables into style attrs. */}
      {/* Note for the onCLick handler there is no need to invoke the
      event handler, React does this for you, simply pass it along */}
      <button
        onClick={handleClick}
        style={{ color: mycolor, margin: "12px", padding: "6px" }}
      >
        Click me
      </button>
      <div>I have been clicked: {count} times</div>
    </>
  );
}

const products = [
  { id: 1, title: "Cabbage" },
  { id: 2, title: "Garlic" },
  { id: 1, title: "Tomato" }
];

const Display = () => {
  // lists in JS can be transformed using map to spit out JSX
  // The key attr is important for React to know later what happened
  // if you insert, delete, re-order items
  const productList = products.map((p) => <li key={p.id}>{p.title}</li>);

  let isLoggedIn = true;
  let content;
  // normal conditional JS logic can be used to decide what to render
  // alternatively the conditional ? : works inside JSX
  if (isLoggedIn) {
    content = <div>Logged In</div>;
  } else {
    content = <div>Logged Out</div>;
  }
  return (
    <div>
      {content}
      {/* Or the shorter && syntax. */}
      {isLoggedIn && <div>Secret stuff showing</div>}
      {/* And here the list transformed above is rendered */}
      <ul>{productList}</ul>
    </div>
  );
};

//  To implement UI in React usually follow the following 5 steps:
// ----------------------------------------------------------------
// 1. Break the UI into a component hierarchy, and include the child hierarchy
// 2. Build a static version in React, so no thinking about state yet
// 3. Find the minimal but complete representation of UI state
//    * any derived state that can be computed should not be stored
//    * think of each piece of data, and identify state
//    * Does it remain UNCHANGED over time, not state
//    * Passed in from parent, not state
//    * Can you compute it from existing state, not state
//    * The rest is probably state
// 4. Identify where your state should live
// 5. Add inverse data flow, pass the useState functions which can
//    update the state, down into the components where they can be invoked
//    passed down through props, then invoke them on the html inputs /
//    or elements and pass along any data, such as e.target.value
