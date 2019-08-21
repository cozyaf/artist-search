import React, { Component } from 'react';
import Search from '../components/home/Search';

export default class Home extends Component {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleClick = ({ target }) => {
    // grab text state
    // api call 
    console.log(target);
  }

  render() {
    const { text } = this.state;

    return (
      <Search 
        text={text} 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} />
    );
  }
}
