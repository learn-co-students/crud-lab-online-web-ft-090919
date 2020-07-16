import React, { Component } from 'react';

class RestaurantInput extends Component {
    state = {
        text: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addRestaurant(this.state);
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
              <label>Restaurant Name: </label>
              <input type='text' id="text" name="text" value={this.state.text} onChange={this.handleChange}/>
              <input type='submit'/>
          </form>
        );
    }
};

export default RestaurantInput;
