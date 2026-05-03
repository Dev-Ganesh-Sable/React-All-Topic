import React, { Component } from 'react'

export class ComponentDidMount extends Component {

    // constructor
    constructor() {

        super();

        // state
        this.state = {
            name: "Ganesh"
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("render");
        // { this.setState({ name: "Siddhi" }) }

        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={() => { this.setState({ name: "Siddhi" }) }}>Update Name</button>
            </div>

        )
    }
}

export default ComponentDidMount