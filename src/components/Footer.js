import React,{useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const timeGiver = () => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    };

    timeGiver();

    return (
        <div className='footer'>
            <p>Open-source licences {year}</p>
            <Tooltip title='Current Time'>
            <p className='timeDisp'>{time}</p>
            </Tooltip>
        </div>
    );
}

export default Footer;
