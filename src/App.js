// since we are in a function component, we need to use "{ useState }"
import React, { useState } from "react";
// Here we are calling the component Counter from the Counter.js
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

// We are going to use Context API and we are going to pass it down through our app, and it kinda works like a global variable. So this is useful for a "Theme" and we can use it anywhere we need it to be. We use const because it's actually a variable.
// we have a provider and a consumer. 
export const ThemeContext = React.createContext()

function App() {
  // console.log("Render App")
  const [theme, setTheme] = useState( 'red' )
  return (
    // Inside the app we want to render the component "Counter" from the Counter.js
    // We can pass info into Counter using "props" 
    // To use JS we need to wrap it in {} in order for react to know it is JS code and now we want to move over to counter and use {} to render the js
    // We wrap our components inside the ThemeContext.Provider because we are passing a value to the apps. The value in this case is a background color and it is initially set to "red"
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
    <Counter initialCount={0} />
    Counter Hooks
    <CounterHooks initialCount={0} />
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
    
  )
}

export default App;
