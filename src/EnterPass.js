import React, { Component } from 'react'

export class EnterPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }
    render() {
        return (
            <form>
                <div><label>Enter Password</label>
                    <input type="password" />

                </div>
                {this.state.password.length < 4 ? 'Password must be greater' : ''}
            </form>
        )
    }
}

export default EnterPass