import React from "react" ;
import ReactDOM from "react-dom/client" ;


const jsxHeading = (
  <h1 id = "heading">
     Hello World from JSX 
  </h1> 
);


const number = 1000 ;


const elem = <span> Hello World </span>;

const HeadingComponent = () => (
  <div>
    {number}      {/* JavaScript inside JSX */}
    {jsxHeading}    {   /*JSX inside JSX */}
    <h1> Hello World from Functional Component 2 </h1>
    {Title}    
  </div>
) ;  //infinite loop 

const Title = () => (
  <h1> 
    {elem}
    Hello World from Functional Component 
    <HeadingComponent />
  </h1> 

);




const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<HeadingComponent />) ;
