import React, { Component, createRef } from 'react'

export class Ref extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
    buttonHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {

        return (
            <><div>
                <label>Topic</label><br />
                <input type="text" ref={this.inputRef} />
                <button onClick={this.buttonHandler}>Click</button>
            </div>
            </>
        )
    }
}

export default Ref