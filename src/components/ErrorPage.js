import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const before = useHistory();
    console.log(before);

    return (
        <div>
            <h1>this is 404 Page...</h1>
            <h5 onClick={()=>before.goBack()}>CLICK ME TO GO BACK</h5>
        </div>
    );
}

export default ErrorPage;