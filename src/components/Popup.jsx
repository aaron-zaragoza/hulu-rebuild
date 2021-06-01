import React from 'react';
import Close from '@material-ui/icons/Close';
import '../popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <Close
                    className="close__button"
                    onClick={() => props.setTrigger(false)} />
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;