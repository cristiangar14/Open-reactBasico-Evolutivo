import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation();;
    console.log('W are in route', location.pathname);
    const history = useHistory();
    const navigate = (path) => {
        history.push(path);
    }
    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>About - FAQs Page</h1>
            <button onClick={()=> navigate('/')}>Go to Home</button>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goForward}>Go Forward</button>
        </div>
    );
}

export default AboutPage;
