import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../requests';
import '../results.css';
import VideoCard from './VideoCard';
import FlipMove from 'react-flip-move';

function Results({ genre }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(genre);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [genre])

    return (
        <div className="results">
            <FlipMove>
            {movies.map( movie => (<VideoCard key={movie.id} movie={movie} />) )}
            </FlipMove>
        </div>
    )
}

export default Results;