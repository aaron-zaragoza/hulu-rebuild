import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './views/Results';
import Nav from './components/Nav';
import Home from './views/Home';
import requests from './requests';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieBanner from './components/MovieBanner';

function App() {

  const [genre, setGenre] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/watch">
            <Header />
            <MovieBanner />
            <Nav setGenre={setGenre} />
            <Results genre={genre}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;