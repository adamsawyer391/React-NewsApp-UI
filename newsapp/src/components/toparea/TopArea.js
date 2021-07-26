import React from 'react'
import './TopArea.css';

const idol = "https://upload.wikimedia.org/wikipedia/commons/9/92/Mounted_Soldier_System_%28MSS%29.jpg";
const space = "https://image.shutterstock.com/image-photo/spaceman-on-rock-edge-mixed-260nw-748030648.jpg";
const surface = "https://moon.nasa.gov/system/news_items/main_images/155_WaterOnTheMoonFull.jpg";
const mars = "https://static.seattletimes.com/wp-content/uploads/2021/02/mars-7eaa4c4e-7061-11eb-93be-c10813e358a2-780x439.jpg";
const lead = "Space tourism is human space travel for recreational purposes. There are several different types of space tourism, including orbital, suborbital and lunar space tourism. To date, orbital space tourism has been performed only by Roscosmos. Work also continues towards developing suborbital space tourism vehicles. This is being done by aerospace companies like Blue Origin and Virgin Galactic. In addition, SpaceX (an aerospace manufacturer) announced in 2018 that they are planning on sending space tourists, including Yusaku Maezawa, on a free-return trajectory around the Moon on the Starship.";

function TopArea() {
    return (
        <div className="carousel-wrapper">
            <img className="top-area-image" src={space} alt="" />
            <h1 className="headline">LUNAR SKYDIVING SHOOTS TO NUMBER ONE SPOT IN SPACE TOURISM</h1>
            <p>Walter White  |  20 July 2021</p>
            <p className="lead">{lead}</p>
        </div>
    )
}

export default TopArea

