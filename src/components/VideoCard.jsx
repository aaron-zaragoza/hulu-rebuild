import React, { forwardRef } from 'react';
import '../videoCard.css';
import TextTruncate from 'react-text-truncate';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img
            src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            alt="Movie Poster" />
            <TextTruncate 
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">&#9734;({movie.vote_count})</p>
        </div>
    )
});

export default VideoCard;