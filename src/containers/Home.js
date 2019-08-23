import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../components/home/Search';
import SearchResult from '../components/home/SearchResult';
import List from '../components/List';
import { getArtists } from '../services/MusicBrainzApi';
import styles from './Home.css';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }
  state = {
    text: '',
    entries: [],
    page: 1,
    totalPages: 0   
  }

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search);
    if(search.get('text')) {
      this.setState({ text: search.get('text') }, () => {
        this.loadArtists();
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.loadArtists();
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleClick = () => {
    this.props.history.push(`/?text=${this.state.text}`);
    this.setState({ page: 1 }, () => {
      this.loadArtists();
    });
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

  loadArtists() {
    getArtists(this.state.text, this.state.page)
      .then(res => {
        this.setState({
          entries: res.artists,
          totalPages: res.totalPages
        });
      });
  }


  render() {
    const { text, entries } = this.state;

    return (
      <>
      <section className={styles.Home}>
        <Search 
          text={text} 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} />
        <div>
          <button className={styles.navButtons} onClick={this.handleClickPrev}>⇠</button>
          <button className={styles.navButtons} onClick={this.handleClickNext}>⇢</button>
        </div>
        <List 
          ListItem={SearchResult} 
          list={entries} 
          keyName="searchResult" />
      </section>
      </>
    );
  }
}
