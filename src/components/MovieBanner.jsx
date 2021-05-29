import React from 'react'
import { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../movieBanner.css';
import Header from './Header';
import zIndex from '@material-ui/core/styles/zIndex';

function MovieBanner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    }, [])

    return (

            <header className="movieBanner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center"
            }}
            >
                <div className="movieBanner__contents">
                    <h1 className="movieBanner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <p className="movieBanner__description">{movie?.overview}</p>
                </div>
                <div className="movieBanner--fadeBottom">
                </div>
            </header>

    )
}

export default MovieBanner;