import React from 'react';
import MainContent from './components/desktopmain/MainContent';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import './Desktop.css';

function Desktop() {

    return(
        <div className="desktop">
            <Topbar />
            <Navbar />
            <MainContent />
            {/* <Footer /> */}
        </div>
    );

}

export default Desktop;