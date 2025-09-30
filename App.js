import React from "react" ;
import ReactDOM from "react-dom/client" ;

// React.createElement => React Element - JS Object => HTMLElement(render); 
// const heading = React.createElement(
//   "h1" , 
//   {id: "heading"} , 
//   "Hello World from React!" 
// ) ;

//JSX (transpiled before it reaches the JS engine) - parcel - Babel
//JSX => React.createElement => React Element - JS Object => HTMLElement(render);

//react element
const jsxHeading = (
  <h1 id = "heading">
     Hello World from JSX 
  </h1> 
);



//React Functional component
const HeadingComponent = () => {
  return <h1> Hello World from Functional Component </h1> ;
} 
//Both are same headingComponent and HeadingComponent2
const HeadingComponent2 = () => (
  <h1> Hello World from Functional Component 2 </h1>
) ;



const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<HeadingComponent2 />) ;
// /*<div id = "parent">
//     <div id = "child">
//         <h1>This is h1 tag</h1>
//         <h2>This is h2 tag</h2>
//     </div>
// </div>
// 


// const parent = React.createElement(
//   "div",
//   {id:"parent"},
//   React.createElement(
//     "div",
//     {id:"child"},
//     [
//       React.createElement("h1",{},"This is h1 tag"),
//       React.createElement("h2",{},"This is h2 tag")
//     ]
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root")) ;
// root.render(parent) ;






//  for hello world 
// const heading = React.createElement("h1" , {id: "heading"} , "Hello World from React!" ) ;
// const root = ReactDOM.createRoot(document.getElementById("root")) ;
// root.render(heading) ;
// 