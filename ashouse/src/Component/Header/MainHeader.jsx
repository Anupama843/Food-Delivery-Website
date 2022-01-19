import React from 'react';
import Header from './Header';
import './MainHeader.css';
import { useState } from 'react';
import { useAuthContext } from "../../contexts/AuthContext";

function MainHeader({ handelNavigation }) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const { auth } = useAuthContext();

    return (
        <div className='main-header-container'>
            <div className='main-header'>
                <div className='header-left-menu'>
                    <button aria-label="menu button" className='header-hamburger' onClick={showSidebar} >
                        <i className="fas fa-bars" ></i>
                    </button>
                    <a href='/' className='header-brand-icon'>
                        <span><i className="fab fa-lastfm"></i>{' House'}</span>
                    </a>
                </div>
                <div className={sidebar ? 'sidebar-header-active' : 'sidebar-header'}>
                    <Header handelNavigation={(path) => handelHeaderMenuClick(path)} />
                </div>
            </div>
            {auth.isLoggedIn ? <span className='greeting'>{getGreeting()}  {auth.name}</span> : null}
        </div>
    );

    function handelHeaderMenuClick(path) {
        setSidebar(false)
        handelNavigation(path)
    }

    function getGreeting() {
        var d = new Date();
        var hrs = d.getHours();
        var greet;
        if (hrs < 12)
            greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening';
        return greet;
    }
}

export default MainHeader;