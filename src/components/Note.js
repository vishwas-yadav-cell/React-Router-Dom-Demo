import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import './css/Note.css';

const Note = ({ listItem, delItem }) => {
    return (
        <div className="note">
            <div className="noteText">
            <h4>{listItem.title}</h4>
            <p>{listItem.noteContent}</p>
            </div>
            <hr />
            <Tooltip title="Delete">
            <IconButton onClick={() => { delItem(listItem.id) }} style={{ color: '#DB4437' }}>
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        </div>
    )
}

export default Note;