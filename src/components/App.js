import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import Home from '../containers/Home';
import ArtistInfo from '../containers/ArtistInfo';
import AlbumInfo from '../containers/AlbumInfo';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artist/:id" component={ArtistInfo}/>
      <Route path="/artist/:artistId/album/:albumId" component={AlbumInfo}/>
    </Router>
  );
}
