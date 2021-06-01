import React, { useState, useEffect } from 'react';
import '../header.css';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Popup from './Popup';
import { useHistory } from "react-router-dom";

function Header() {

    const history = useHistory();
    const [show, handleShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 125) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", {});
        };
    }, [])

    return (
        <div className={`header ${show && "header__black"}`}>
            <div className="header__icons">
                <div
                    onClick={() => history.push('/')}
                    className="header__icon">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div
                    onClick={() => setButtonPopup(true)} className="header__icon">
                    <LiveTvIcon />
                    <p>Live TV</p>
                </div>
                <div
                    onClick={() => setButtonPopup(true)}
                    className="header__icon">
                    <VideoLibraryIcon />
                    <p>My Stuff</p>
                </div>
                <div
                    onClick={() => setButtonPopup(true)}
                    className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div
                onClick={() => setButtonPopup(true)} 
                className="header__icon">
                    <PersonOutlineIcon />
                    <p>Profile</p>
                </div>
                <Popup
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}>
                    <h3>This feature is coming soon :)</h3>
                    <p>At this time, the <strong>Home Icon</strong> is the only functional button <i>in the header</i></p>
                </Popup>
            </div>
            <div>
                <img onClick={() => history.push('/')} className="header__logo" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="Hulu Logo" />
            </div>
        </div>
    )
}

export default Header;