import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import { getArtist } from '../services/MusicBrainzApi';

export default class AlbumInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    const match = this.props.match;
    console.log(match.params);
  }

  render() {

    return (
    <>
      {/* <h2>{artist.name}</h2>
      <h3>{release.name}</h3> */}
      <p>Songs:</p>
      {/* <List /> */}
    </>
    );
  }

}

