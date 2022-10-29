import React from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';

const Nav=()=> {
    return (
        <div className='box-container'>
            <ul className="nav-ul">
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )}
export default Nav;    

