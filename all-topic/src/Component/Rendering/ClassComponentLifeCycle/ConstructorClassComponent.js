import React, { Component } from 'react'

export class ConstructorClassComponent extends Component {

    constructor() {
        super();

        this.state = {
            data: "Ganesh"
        }
        // dont use api in constructor  

    }

    render() {

        return (
            <div>{this.state.data}</div>
        )
    }
}

export default ConstructorClassComponent