import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import ReplayIcon from '@material-ui/icons/Replay';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import './css/Header.css';

const Header = () => {
    
    return (
        <>
            <div className='header'>
                <div className='header_left'>
                    <Tooltip title='Menu'>
                    <MenuIcon />
                    </Tooltip>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
                    <h2>Google Keep</h2>
                </div>

                <div className='header_right'>
                <Tooltip className='header_right_icons' title='reload'>
                <ReplayIcon />
                </Tooltip>
                <Tooltip className='header_right_icons' title='List View'>
                <ViewStreamIcon/>
                </Tooltip>
                <Tooltip className='header_right_icons' title='Settings'>
                <SettingsIcon/>
                </Tooltip>
                <Tooltip className='header_right_icons' title='Google Apps'>
                    <AppsIcon />
                </Tooltip>
                <Tooltip className='header_right_icons' title='Google Account'>
                <Avatar alt="" src="https://avatars2.githubusercontent.com/u/62975291?s=460&v=4" />
                </Tooltip>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Header;