import React from "react";
// Here we are calling the component Counter from the Counter.js
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  // console.log("Render App")

  return (
    // Inside the app we want to render the component "Counter" from the Counter.js
    // We can pass info into Counter using "props" 
    // To use JS we need to wrap it in {} in order for react to know it is JS code and now we want to move over to counter and use {} to render the js
    <>
    Counter
    <Counter initialCount={0} />
    Counter Hooks
    <CounterHooks initialCount={0} />
    </>
    
  )
}

export default App;
