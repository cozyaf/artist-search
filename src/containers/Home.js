import React, { Component } from 'react';
import Search from '../components/home/Search';
import SearchResult from '../components/home/SearchResult';
import List from '../components/List';
import { getArtists } from '../services/MusicBrainzApi';

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

  handleClick = () => {
    getArtists(this.state.text)
      .then(res => {
        this.setState({
          entries: res.artists,
        });
      });
  }

  render() {
    const { text, entries } = this.state;

    return (
      <>
      <Search 
        text={text} 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} />
      <List 
        ListItem={SearchResult} 
        list={entries} 
        keyName="searchResult" />
      </>
    );
  }
}
