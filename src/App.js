// you can directly import css classes, or add the link tag to html file in public dir
// usually the entry point to your app
import "./styles.css";
// export this piece of UI which can be imported later without the {}
// only one default export allowed in a file
export default function App() {
  return (
    // the class is replaced by className not to have a clash
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* The component can be nested into another component */}
      <MyButton />
      <Display />
    </div>
  );
}
// A component is a piece of UI. Functions that return markup
// The capital letter is important, distinguishes a React component from
// regular HTML markup.
function MyButton() {
  const title = "A great Button below";
  const myclass = "cool";
  const mycolor = "green";
  return (
    <>
      {/* curly braces let you escape back into javascript to embed some 
      variable or carry out some logic.
      One can also pass javascript vars as html attributes by 
      escaping with {} */}
      <div className={myclass}>{title}</div>
      {/* Note the syntax, an object inside the escaped {} of JSX */}
      {/* Also note you can pass JS variables into style attrs. */}
      <button style={{ color: mycolor, margin: "12px", padding: "6px" }}>
        Click me
      </button>
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
