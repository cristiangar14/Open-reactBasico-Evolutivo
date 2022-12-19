import React from 'react';
import {useHistory} from 'react-router-dom'
const ProfilePage = ({ user }) => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }
    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
