import React from 'react';
import { useParams, useLocation ,useHistory} from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams(); //get the params.
    const location = useLocation(); //get the current url location.
    const history = useHistory(); //get the history.

    return (
        <div>
            <h2>this is user page {`${fname} ${lname}`}</h2>
            <h4>you searched for: {window.location.pathname}</h4>
            <h4>you searched for: {location.pathname}</h4>
            {
                location.pathname === `/user/vishwas/${lname}` ?
                <button onClick={()=>history.goBack()}>Click Me to back</button> : null
            }
        </div>
    );
}

export default User;