import React, { Component } from 'react'

export class ShouldComponentUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.count);
        return true
    }

    render() {

        return (
            <div>
                <h2>Count : {this.state.count}</h2>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Count</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate