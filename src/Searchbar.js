import React from 'react'
class Searchbar extends React.Component {
    state = {
        term: ''
    }
    formsubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui Segment">
                <form className="ui form" onSubmit={this.formsubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={event => this.setState({ term: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }

}
export default Searchbar;