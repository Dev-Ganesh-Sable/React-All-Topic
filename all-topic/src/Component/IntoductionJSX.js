
// what is JSX : JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript

// JSX is a syntax extension in React that allows developers to write HTML-like code inside JavaScript, 
// making UI code more readable and easier to write

// ---------------------------------------------------------------------------------------------------------------

// how run JSX iternally

// JSX is transformed into React.createElement()

// const element = React.createElement("h1", null, "Hello World");


// What is React.createElement in React?
// React.createElement is a core function in React that is used to create React elements (virtual DOM nodes).

// syn : React.createElement(type, props, ...children)
// type → HTML tag or component ("div", "h1", etc.)
// props → attributes (like className, id)
// children → content inside the element

// without jsx example

// const element = React.createElement(
//   "h1",
//   { className: "title" },
//   "Hello World"
// );


// with jsx example
{/* <h1 class="title">Hello World</h1> */ }


// Which compiler is used in JSX?
// The main compiler used is Babel


// Why we need Babel?

// Browsers cannot understand:
// JSX
// Modern JavaScript (ES6+)

// 👉 Babel converts it into:

// Plain JavaScript (ES5)
// Browser-compatible code



