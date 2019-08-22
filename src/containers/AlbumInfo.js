import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import { getArtist, getSongs } from '../services/MusicBrainzApi';
import Song from '../components/album-info/Song';

export default class AlbumInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    artist: {},
    songs: []
  }

  componentDidMount() {
    const match = this.props.match;
    getArtist(match.params.artistId)
      .then(res => {
        this.setState({ artist: res });
      })
      .then(() => {
        getSongs(match.params.albumId)
          .then(res => {
            const withArtistName = res.recordings.map(recording => {
              return { ...recording, artistName: this.state.artist.name };
            });
            this.setState({ songs: withArtistName });
          });
      });
  }

  render() {
    const { artist, songs } = this.state;
    return (
    <>
      <h2>{artist.name}</h2>
      <p>Songs:</p>
      <List ListItem={Song} list={songs} keyName="song"/>
    </>
    );
  }

}

