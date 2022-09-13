import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true
        }
    }

    render() {
        if (this.state.isLogged) {
            return (
                <div>raheeb</div>
            )
        }
        else {
            return (
                <div>
                    Guest
                </div>
            )
        }
        return (
            <div>Usergreeting</div>
        )
    }
}

export default Usergreeting