import React, { Component } from 'react';

class ReviewInput extends Component {
    state = {
        text: ""
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addReview({restaurantId: this.props.restaurantId, text: this.state.text});
        this.setState({
            text: ''
        });
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Review: </label>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
};

export default ReviewInput;
