import React, { Component } from 'react'
import updatedComponent from './WithCounterHOC'


export class HoverComponentHOC extends Component {
    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props

        return (
            <h1 onMouseOver={incrementCount}> Hover {count} Counter</h1>
        )
    }
}

export default updatedComponent(HoverComponentHOC)