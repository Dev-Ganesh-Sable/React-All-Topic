import React, { Component, createRef } from 'react'

export class RefWithClassComponent extends Component {

    constructor(props) {
        super(props)

        this.inputRef = createRef();
    }

    componentDidMount() {
        // console.log(this.inputRef);
        // console.log(this.inputRef.current.value = "10");
    }

    getValue() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color = "red";
        this.inputRef.current.style.backgroundColor = "black";

    }


    render() {
        return (
            <div>
                <h3>Ref With Class Component</h3>
                <input type='text' ref={this.inputRef} />
                <button onClick={() => this.getValue()}>Chceck Ref</button>
            </div>
        )
    }
}

export default RefWithClassComponent