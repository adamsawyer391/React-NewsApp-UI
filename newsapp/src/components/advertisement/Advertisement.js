import React from 'react'
import './Advertisement.css';

const image = "https://dt-wordpress.azurewebsites.net/wp-content/uploads/2016/05/New-Car.jpg";

function Advertisement() {
    return (
        <div className="ad-box">
            <p className="ad-text">Advertisement</p>
            <img className="ad-image" src={image} alt="" />
        </div>
    )
}

export default Advertisement
