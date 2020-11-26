import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <NavLink to='/' activeClassName='active-link'>
                <h5>Home</h5>
            </NavLink>
            <NavLink to='/about' activeClassName='active-link'>
                <h5>About</h5>
            </NavLink>
            <NavLink to='/contact' activeClassName='active-link'>
                <h5>Contact</h5>
            </NavLink>
        </div>
    );
}

export default Navbar;