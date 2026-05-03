import React, { Component } from 'react'

export class ComponentWillUnMountTwo extends Component {

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>Child Component</div>
        )
    }
}

export default ComponentWillUnMountTwo