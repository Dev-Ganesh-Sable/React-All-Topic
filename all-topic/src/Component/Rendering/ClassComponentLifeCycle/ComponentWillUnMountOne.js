import React, { Component } from 'react'
import ComponentWillUnMountTwo from './ComponentWillUnMountTwo'

export class ComponentWillUnMountOne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.show ? <ComponentWillUnMountTwo /> : <h1>Child Component Removed</h1>
                }
                <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Component</button>
            </div>
        )
    }
}

export default ComponentWillUnMountOne