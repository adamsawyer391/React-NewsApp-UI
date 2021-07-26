import React from 'react';
import Links from '../links/Links';
import Sidebar from '../sidebar/Sidebar';
import Splash from '../splash/Splash';
import './MainContent.css'

function MainContent(){
    return(
        <div className="main-content">
            <div className="left">
                <Links />
            </div>
            <div className="center">
                <Splash />
            </div>
            {/* <div className="right">
                {/* <Sidebar /> */}
            {/* </div>  */} 
        </div>
    )
}
export default MainContent;