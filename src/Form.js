import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            languagetype: 'React'
        }
    }
    handleUserName = (event) => {
        this.setState({ username: event.target.value }

        )
    }
    handletype = (event) => {

        this.setState({ languagetype: event.targetvalue })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} and ${this.state.languagetype}`)
        event.preventDefault();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                <div><label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserName} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.languagetype} onChange={this.handletype}>
                        <option value="react">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="Submit">Submit</button>
            </form>
        )
    }
}


export default Form