import React from 'react';
import '../videoCard.css';
import TextTruncate from 'react-text-truncate';
import Star from '@material-ui/icons/Star';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
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
            <p className="videoCard__stats"><Star /> ({movie.vote_count})</p>
        </div>
    )
}

export default VideoCard;