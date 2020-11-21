import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './css/Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2><span>e</span>Voting</h2>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcL-EIhyAl_ypxJ_33Lj5E2k6xA0zp_Vxyg&usqp=CAU' alt='' />
        </div>
    );
}

export default Header;