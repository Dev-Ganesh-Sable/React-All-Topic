import React, { Component } from 'react'

export class CounterTwo extends Component {

  
    render() {

        const { count,incrementCount } = this.props

        return (
            <div>
                <button onClick={incrementCount}>Count {count} time</button>
            </div>
        )
    }
}

export default CounterTwo