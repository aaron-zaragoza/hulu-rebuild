import { Button } from '@material-ui/core';
import React from 'react';
import '../banner.css';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner__info">
                <h5>THIS IS NOT ACTUALLY</h5>
                <img src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png" alt="Hulu Logo" />
                <h2>Watch dozens of movies and shows.</h2>
                <h3>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</h3>
                <Button onClick={() => history.push('/watch')} variant="outlined">BROWSE NOW</Button>
            </div>
        </div>
    )
}

export default Banner;