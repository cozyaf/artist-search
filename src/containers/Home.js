import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../components/home/Search';
import SearchResult from '../components/home/SearchResult';
import List from '../components/List';
import { getArtists } from '../services/MusicBrainzApi';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
  }
  state = {
    text: '',
    entries: []   
  }

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search);
    if(search.get('text')) {
      this.setState({ text: search.get('text') }, () => {
        this.loadArtists();
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleClick = () => {
    this.props.history.push(`/?text=${this.state.text}`);
    this.loadArtists();
  }

  loadArtists() {
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
