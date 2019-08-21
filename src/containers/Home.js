import React, { Component } from 'react';
import Search from '../components/home/Search';
import List from '../components/List';

export default class Home extends Component {
  state = {
    text: '',
    entries: []
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
    const { text, entries } = this.state;

    return (
      <>
      <Search 
        text={text} 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} />
      <List entries={entries} />
      </>
    );
  }
}
