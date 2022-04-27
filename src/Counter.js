import React, { Component } from "react";

// In order to make the site reactive and change, we need to use State. Every time you change state, you re-render the component. 

export default class Counter extends Component {
    // In order to use state, you want to over-ride the constructor. Constructor always takes in the props that are being passed to the component.
    // super(props) makes sure that the props are getting set correctly for the component.
    // this.setState is taking care of the re-rendering for us. 
    constructor(props) {
        super(props)

        this.state = {
            // here we are setting up a variable of "count" and we are passing in the "initialCount" from props, which comes from "App.js"
            count: props.initialCount
        }
    }

    render() {
        // console.log("Render Counter")
        return (
            <div>
                {/* Here we have replaced a normal eventlistener with "onClick" and we are setting up a changeCount variable inside the function and assigning a value */}
                <button onClick={() => this.changeCount(-1)}>-</button>
                {/* below we are passing the "count" from the state. The value of count is being passed from App.js via initialCount */}
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(+1)}>+</button>
            </div>
        )
    }

    // Since we are inside a normal javascript class we can write the function inside the class.

    changeCount(amount) {
        // every single class component has "this.setState" which can take an object and it uses object.assign
        // The code below is asycronis and results in the count being passed in and not truly updating. The Count is set to 0 and then it is adding the amount. So we need to change it so that it doesn't have a bug of count never being set.
        // this.setState({ count: this.state.count + amount})

        // Instead we change it to prevState and then it sets to the previous state and updates based on accurate count.
        this.setState(prevState => {
            return { count: prevState.count + amount}
        })
        // So now if we were to copy this again, we will actually update the count by 2 because we are getting the previous state and adding it to the new function.
        // this.setState(prevState => {
        //     return { count: prevState.count + amount}
        // })
    }
}