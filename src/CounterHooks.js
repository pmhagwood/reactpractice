
// State is not something that is native to a function, so we can add it to the import via { useState }, so we add a comma after react and then add { useState } and then we can call useState from the function.
import React, { useState } from "react";


// We need to be able to pass in the props so we can do that via props inside the function
// When you have very simple props, you can use "Object deconstruction" to pass the props directly so you change "props" to the variable like, in this case, "initialCount". So instead of CounterHooks(props) we use CounterHooks({ initialCount })
export default function CounterHooks({ initialCount }) {
    console.log('Render Counter Hooks')
    // How do we use state? useState returns the state as an array. We want to deconstruct the array and we can do that with a function.
    // We can call the two variables anything we want, but the first value returns the state and second is a function that allows us to set the state. So here we are using state because it's returning the state, and the second is setState because it is a function that is setting the state. 
    // With hooks we can make the state whatever we want, so instead of returning a full object, we can just return the initial count.
    // const [state, setState] = useState({ count: initialCount })
    // so we are making the state just a single number, the initialCount.
    // instead of a full object called "state", we can just return the count
    // and instead of setting a full state, we can just set the count setCount
    // this is useful because we can break our state up into multiple variables.
    const [count, setCount] = useState(initialCount)

    // useState is the same as setting state = to something as we did in the class.
    return (
        <div>
            {/* Again, setState has the same problem where if you call it multiple times, you get asycronis so we need to use prevState */}
            {/* because we changed the state to a single number, we can remove all the function code and just call setCount */}
                {/* <button onClick={() => setState(prevState => { 
                    return {count: prevState.count - 1}
                })}>-</button> */}
                {/* setCount calls the previous Count, but we can call the variable anything we want. */}
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                {/* Now you can remove the props from props.initialCount and just have initialCount */}
                
                {/* Now, because we changed the state to a single number variable, we can remove state.count because we only need count. */}
                {/* <span>{state.count}</span> */}
                <span>{count}</span>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </div>
    )
}