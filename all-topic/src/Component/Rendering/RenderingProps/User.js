import React, { Component } from 'react'

class User extends Component {

    render() {

        return (

            // defaut value is false
            <div>{this.props.render(true)}</div>
        )
    }
}

export default User