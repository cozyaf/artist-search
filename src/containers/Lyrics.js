import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../services/MusicBrainzApi';

export default class Lyrics extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: ''
  }

  componentDidMount() {
    const match = this.props.match;
    getLyrics(match.params.artistName, match.params.title)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
      });
  }

  render() {
    console.log(this.state.lyrics);
    return (
      <>
        <h3>{this.props.match.params.title}</h3>
        <p>{this.state.lyrics}</p>
      </>
    );
  }
}
