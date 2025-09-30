import React from "react" ;
import ReactDOM from "react-dom/client" ;


const jsxHeading = (
  <h1 id = "heading">
     Hello World from JSX 
  </h1> 
);

const HeadingComponent = () => (
   <h1> Hello World from Functional Component </h1> 
);

const number = 1000 ;

const HeadingComponent2 = () => (
  <div>
    <HeadingComponent />  
    {number}      {/* JavaScript inside JSX */}
    {jsxHeading}    {   /*JSX inside JSX */}
    <h1> Hello World from Functional Component 2 </h1>
  </div>
) ;



const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<HeadingComponent2 />) ;
