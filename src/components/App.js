import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import Home from '../containers/Home';
import ArtistInfo from '../containers/ArtistInfo';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/artist/:id" component={ArtistInfo}/>
    </Router>
  );
}
