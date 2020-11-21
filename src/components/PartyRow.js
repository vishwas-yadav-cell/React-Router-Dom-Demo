import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './css/PartyRow.css';

const PartyRow = () => {
    return (
        <>
            <tr>
                <td><img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png' alt='BJP' /></td>
                <td>BJP</td>
                <td>Narendra Modi</td>
                <td>
                    <Button className='btn' variant="contained" style={{backgroundImage:"linear-gradient(to right, #FF9933,#ffffff,#128807)"}}>
                        Give Vote
                    </Button>
                </td>
            </tr>
        </>
    );
}

export default PartyRow;
