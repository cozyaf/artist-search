import React, { Component } from 'react';
import { getArtist, getReleases, getArtwork } from '../services/MusicBrainzApi';
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
    getArtist(match.params.id)
      .then(res => {
        this.setState({ artist: res });
      })
      .then(() => {
        getReleases(match.params.id)
          .then(res => {
            // res.releases.map(release => {
            //   const imageUrl = getArtwork(release.id);
            // })
            // .then()
            this.setState({ releases: res.releases });
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
      {console.log(artist['life-span'])}
      <List entries={releases} Comp={AlbumArt}/>
      </>
    );
  }
}
