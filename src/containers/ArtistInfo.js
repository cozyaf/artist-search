import React, { Component } from 'react';
import { getArtist, getReleases } from '../services/MusicBrainzApi';
import List from '../components/List';
import PropTypes from 'prop-types';
import AlbumArt from '../components/artist-info/AlbumArt';
import styles from './ArtistInfo.css';

export default class ArtistInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    releases: [],
    artist: {
      'life-span': {}
    },
    page: 1,
    totalPages: 0
  }

  shortenTitle = (title) => {
    let shortTitle = title;
    if(title.length > 30) {
      shortTitle = title.substring(0, 30) + '...';
    }
    return shortTitle;
  }

  fetchReleases = () => {
    const match = this.props.match;
    const artistId = match.params.id;
    getReleases(artistId, this.state.page)
      .then(res => {
        const withArtistId = res.releases.map(release => {
          return { ...release, artistId, title: this.shortenTitle(release.title) };
        });
        this.setState({ 
          releases: withArtistId,
          totalPages: res.totalPages
        });
      });
  }

  componentDidMount() {
    const match = this.props.match;
    const artistId = match.params.id;
    getArtist(artistId)
      .then(res => {
        this.setState({ artist: res });
      })
      .then(() => {
        this.fetchReleases();
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.fetchReleases();
    }
  }

  handleClickPrev = () => {
    this.setState(state => {
      return {
        page: state.page - 1
      };
    });
  }

  handleClickNext = () => {
    this.setState(state => {
      return {
        page: state.page + 1
      };
    });
  }

  render() {
    const { releases, artist, page, totalPages } = this.state;

    return (
      <section className={styles.ArtistInfo}>
        <h2>{artist.name}</h2>
        <p>{artist.disambiguation}</p>
        <p>Born: {artist['life-span'].begin}</p>
        <p>Died: {artist['life-span'].end}</p>
        <div>
          <button disabled={page === 1} className={styles.navButtons} onClick={this.handleClickPrev}>⇠</button>
          <span> {page} / {totalPages} </span>
          <button disabled={page === totalPages} className={styles.navButtons} onClick={this.handleClickNext}>⇢</button>
        </div>
        <List list={releases} ListItem={AlbumArt} keyName="release"/>
      </section>
    );
  }
}
