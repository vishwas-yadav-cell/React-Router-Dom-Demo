import React, { useState } from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);

    const onSbt = (d) => {
        setData((prev) => {
            const arr = [...prev, d];
            return arr;
        });
    }

    const delItem = (id) => {
        const cnfm = window.confirm("Press a button!");

        if (cnfm) {
            setData((prev) => {
                const arr = prev.filter(d => d.id !== id);
                console.log(arr);
                return arr;
            });

            alert('Deleted🚧');
        }

    }

    return (
        <>
            <Header />
            
            <CreateNote onSbt={onSbt} />

            <div className="app_content">
                {data ? data.map((d, i) => <Note key={i} listItem={d} delItem={delItem} />) : ''}
            </div>

            <Footer />
        </>
    );
}

export default App;