import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

const NotFoundPage = () => {

    const history = useHistory();
    const navigate = (path) => {
        history.push(path);
    }
    return (
        <div>
            <h1>404 - Page Not Fount</h1>
            <button onClick={()=> navigate('/')}>Go to Home</button>
        </div>
    );
}

export default NotFoundPage;
