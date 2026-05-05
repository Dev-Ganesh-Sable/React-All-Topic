import React, { Component } from 'react'
import updatedComponent from './WithCounterHOC'

export class ClickCounterHOC extends Component {

    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}> ClickCounter {count} Time</button>
        )

    }
}

export default updatedComponent(ClickCounterHOC)