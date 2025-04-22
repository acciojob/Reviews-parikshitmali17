{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
 */}


 import Review from "./Review";

 import React from 'react'
 
 const App = () => {
   return (
     <div><main><section className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <Review/></section></main></div>
   )
 }
 
 export default App