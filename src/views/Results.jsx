import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../results.css';
import VideoCard from '../components/VideoCard';
import FlipMove from 'react-flip-move';
import Popup from '../components/Popup';

function Results({ genre }) {

    const [movies, setMovies] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);

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
                {movies.map( movie => (<VideoCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => setButtonPopup(true)} />) )}
            </FlipMove>
            <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}>
                <h3>You'll be watching trailers in no time ;)</h3>
                <p>The ability to watch trailers will be coming soon!</p>
            </Popup>
        </div>
    )
}

export default Results;