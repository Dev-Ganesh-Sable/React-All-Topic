import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // name: "Ganesh"
            count: 0
        }
        // console.log("constructor");
    }

    // update component
    componentDidUpdate(preProps, preState, snapshot) {

        // console.log("componentDidUpdate");

        console.log("componentDidUpdate", preState.count, this.state.count, snapshot);

        if (preState.count === this.state.count) {
            alert("data is already same");
        }

        // if you have update the state use if else or condition then update the state  
    }

    render() {
        // console.log("render");

        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* <button onClick={() => { this.setState({ name: "Siddhi" }) }}>Update Name</button> */}

                <button onClick={() => { this.setState({ count: 1 }) }}>Update Count</button>
            </div >
        )
    }
}

export default ComponentDidUpdate