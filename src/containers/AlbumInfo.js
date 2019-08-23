import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import { getArtist, getSongs, getReleases } from '../services/MusicBrainzApi';
import Song from '../components/album-info/Song';
import AlbumArt from '../components/artist-info/AlbumArt';

export default class AlbumInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    artist: {},
    songs: [],
    release: {
      'cover-art-archive': {}
    }
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
          })
          .then(() => {
            getReleases(match.params.artistId)
              .then(res => {
                const release = res.releases.filter(release => {
                  return release.id === match.params.albumId;
                });
                this.setState({ release: release[0] });
              });
          });
      });
  }

  render() {
    const { artist, songs, release } = this.state;
    return (
    <>
      <h2>{artist.name}</h2>
      <AlbumArt release={release}/>
      <p>Songs:</p>
      <List ListItem={Song} list={songs} keyName="song"/>
    </>
    );
  }

}

