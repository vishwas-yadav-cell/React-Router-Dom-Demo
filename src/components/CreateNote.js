import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import './css/CreateNote.css';

const CreateNote = ({ onSbt }) => {
    const [note, setNote] = useState({
        id: '',
        title: '',
        noteContent: ''
    });

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setNote((prev) => {
            return {
                ...prev,
                id: Date.now(),
                [name]: value,
            }
        });
    }

    const sbt = (e) => {
        e.preventDefault();

        if (note.title !== '' && note.noteContent !== '') {
            onSbt(note);
            setNote({
                id: '',
                title: '',
                noteContent: ''
            });
        } else {
            alert('Input All The Fields!');
        }
    }

    return (
        <div className='createNote'>
            <form onSubmit={sbt}>
                <input type="text" name='title' placeholder='Title' onChange={inputEvent} value={note.title} autoComplete='off' />
                <textarea name='noteContent' cols="25" rows="6" onChange={inputEvent} placeholder='Take a note...' value={note.noteContent}></textarea>
                <Tooltip title="Add">
                    <IconButton type="submit" style={{ color: '#FBBC04' }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Tooltip>
            </form>
        </div>
    );
}

export default CreateNote;