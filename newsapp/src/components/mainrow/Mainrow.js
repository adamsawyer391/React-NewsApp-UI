import React from 'react'
import ArticleItem from '../mainarticle/ArticleItem'
import './Mainrow.css'
import Image from '../../images/1_350x200.jpg';
import Advertisement from '../advertisement/Advertisement';

const idol = "https://upload.wikimedia.org/wikipedia/commons/9/92/Mounted_Soldier_System_%28MSS%29.jpg";
const surface = "https://moon.nasa.gov/system/news_items/main_images/155_WaterOnTheMoonFull.jpg";
const mars = "https://static.seattletimes.com/wp-content/uploads/2021/02/mars-7eaa4c4e-7061-11eb-93be-c10813e358a2-780x439.jpg";
const moonbase = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Entering_a_Lunar_Outpost.jpg";
const dodmission = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-680804387-1562856431.jpg";
const pluto = "https://cdn.uanews.arizona.edu/s3fs-public/images/uanow/Pluto_UANow%20thmb.jpg";
const alienworld = "https://i.pinimg.com/originals/f8/ab/2d/f8ab2df73d3e91fa9871565c4dc07d1f.jpg";

function Mainrow() {
    return (
        <div>
            <div className="article-row">
                <ArticleItem url={moonbase} headline="Bigelow Aerospace Unveils New Inflatable Habitat" />
                <ArticleItem url={dodmission} headline="Pentagon Declassifies 1950s Moon Base Plans" />
            </div>
            <div className="article-row">
                <ArticleItem url={idol} headline="New Rover Borrows Tank Tech" />
                <ArticleItem url={Image} headline="New Director Takes Aim at Outer Solar System" />
            </div>
            <Advertisement />
            <div className="article-row">
                <ArticleItem url={surface} headline="NASA Releases Lunar Anomaly Report" />
                <ArticleItem url={mars} headline="Mars Rover Scores Touchdown" />
            </div>
            <div className="article-row">
                <ArticleItem url={pluto} headline="Thin Atmosphere of Pluto Probed by Probing Space Probe" />
                <ArticleItem url={alienworld} headline="NASA Scientists Speculates on ET Life on Ammonia Worlds" />
            </div>
        </div>
    )
}

export default Mainrow
