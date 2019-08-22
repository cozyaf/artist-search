import React, { Component } from 'react';
import { getArtist, getReleases } from '../services/MusicBrainzApi';
import List from '../components/List';
import PropTypes from 'prop-types';
import AlbumArt from '../components/artist-info/AlbumArt';

export default class ArtistInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    releases: [],
    artist: {
      'life-span': {}
    }
  }

  componentDidMount() {
    const match = this.props.match;
    const artistId = match.params.id;
    getArtist(artistId)
      .then(res => {
        this.setState({ artist: res });
      })
      .then(() => {
        getReleases(artistId)
          .then(res => {
            const withArtistId = res.releases.map(release => {
              return { ...release, artistId };
            });
            this.setState({ releases: withArtistId });
          });
      });
  }

  render() {
    const { releases, artist } = this.state;

    return (
      <>
      <h2>{artist.name}</h2>
      <p>{artist.disambiguation}</p>
      <p>Born:{artist['life-span'].begin}</p>
      <p>Died:{artist['life-span'].end}</p>
      <List list={releases} ListItem={AlbumArt} keyName="release"/>
      </>
    );
  }
}
