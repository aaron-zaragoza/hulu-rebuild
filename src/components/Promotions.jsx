import { Button } from '@material-ui/core';
import React from 'react';
import '../promotions.css';

function Promotions() {
    return (
        <div className="promotions">
            <div className="promo__icons">
                <img src="https://www.hulu.com/static/hitch/s3/attachments/ckapuzxob47sd0w7l9l74op5z-d-logo-0-1.png" alt="Hulu, Disney Plus, and ESPN Plus logos" />
            </div>
            <div className="promo__details">
                <h4>BUNDLE WITH ANY PLAN AND SAVE</h4>
                <p>Get Hulu, Disney+, and ESPN+ starting at $13.99/month.</p>
            </div>
            <div>
                <Button variant="outlined">IN-PROGRESS</Button>
            </div>
        </div>
    )
}

export default Promotions
