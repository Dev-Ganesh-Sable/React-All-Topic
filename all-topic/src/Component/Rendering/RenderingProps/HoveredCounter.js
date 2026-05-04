import React, { Component } from 'react'

export class HoveredCounter extends Component {


    render() {

        const { count, incrementCount } = this.props

        return (
            <div>
                <button onClick={incrementCount}>Click {count} Counter</button>
            </div>
        )
    }
}

export default HoveredCounter