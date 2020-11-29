import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', background: '#202020', padding: '20px' }}>
            <NavLink exact to='/' activeClassName='active-link'>
                <h5>Home</h5>
            </NavLink>
            <NavLink exact to='/search' activeClassName='active-link'>
                <h5>Search</h5>
            </NavLink>
            <NavLink exact to='/about' activeClassName='active-link'>
                <h5>About</h5>
            </NavLink>
            <NavLink exact to='/contact' activeClassName='active-link'>
                <h5>Contact</h5>
            </NavLink>
        </div>
    );
}

export default Navbar;