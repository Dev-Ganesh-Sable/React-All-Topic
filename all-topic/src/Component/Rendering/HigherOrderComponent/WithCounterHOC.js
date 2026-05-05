import React, { Component } from 'react'

const updatedComponent = (OrignalComponent) => {

    class NewComponet extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return <OrignalComponent count={this.state.count} incrementCount={this.state.incrementCount} />
        }
    }
    return NewComponet
}

export default updatedComponent