import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'
import Split from './Split';
function Nav(){

    return(
        <div className="sticky" >
    <nav>
        <Link to="/">
        <img src="logo.png" alt="logo" width="400px"></img>
        </Link>

        <ul className="nav-links">
        <Link className="navLinks" to='/news'>
            <li>NEWS</li>
        </Link>
        <Split/>
        <Link className="navLinks" to='/blog'>
            <li>BLOGS</li>
        </Link>
        <Split/>
        <Link className="navLinks" to='/projects'>
            <li>PROJECTS</li>
        </Link>
        </ul>
    </nav>
    </div>
    );
}

export default Nav;