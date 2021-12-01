import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Index(){

    return (
        <div className="navbar">
            <div className="logo"><Link to="/">LOGO</Link></div>
            <ul>
                <li>LOGIN</li>
                <li><Link to="signup">SIGN UP</Link></li>
            </ul>
        </div>
    );
}

export default Index;