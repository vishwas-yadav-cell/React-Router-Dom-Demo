import React, { useState } from 'react';
import './css/Search.css';

const Search = () => {
    const [img, setImg] = useState('');

    return (
        <>
            <div className='searchDiv'>
                <input type="text" placeholder="Search anything..." value={img} onChange={(e) => setImg(e.target.value)} />

                {img === '' ? null : <img src={`https://source.unsplash.com/400x300/?${img}`} alt="img" />}
            </div>
        </>
    );
}

export default Search;