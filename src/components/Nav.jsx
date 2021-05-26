import React from 'react';
import '../nav.css';
import requests from '../requests';

function Nav({ setGenre }) {
    return (
        <div className="nav">
            <h2 onClick={() => setGenre(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setGenre(requests.fetchTopRated)}>Top-Rated</h2>
            <h2 onClick={() => setGenre(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setGenre(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setGenre(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setGenre(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setGenre(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setGenre(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setGenre(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setGenre(requests.fetchWestern)}>Western</h2>
        </div>
    )
}

export default Nav;