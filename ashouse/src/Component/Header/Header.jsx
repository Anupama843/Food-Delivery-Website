import React from 'react';
import './Header.css';
import { useAuthContext } from "../../contexts/AuthContext";

function Header({ handelNavigation }) {


    const { auth } = useAuthContext();

    function nabBarTitleClick(e, path) {
        if (path === '/signup' || path === '/signin') {
            e.preventDefault();
            handelNavigation(path)
        }
    }

    return (
        <div className='header-container'>
            <ul className='header-menu'>
                    <a href='/' onClick={(e) => nabBarTitleClick(e, '/')}>
                        <span><i className="fas fa-home"></i>{' Home'}</span>
                    </a>
                    <a href='/products' onClick={(e) => nabBarTitleClick(e, '/products')}>
                        <span><i className="fas fa-shopping-cart"></i>{' Restaurants'}</span>
                    </a>
                    <a href='/review' onClick={(e) => nabBarTitleClick(e, '/review')}>
                        <span><i className="far fa-file"></i>{' Review'}</span>
                    </a>
                    {!auth.isLoggedIn
                        ? <a href='/signin' onClick={(e) => nabBarTitleClick(e, '/signin')}>
                            <span><i className="fas fa-sign-in-alt"></i>{' SignIn'}</span>
                        </a>
                        : null}
                    {!auth.isLoggedIn
                        ? <a href='/signup' onClick={(e) => nabBarTitleClick(e, '/signup')}>
                            <span><i className="fas fa-user-plus"></i>{' SignUp'}</span>
                        </a>
                        : null}
            </ul>
        </div>
    );
}

export default Header;