import React, { useEffect, useState } from 'react';
import {getRandomUsers} from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUser();
    // }, []);
    
    const obtainUser = () => {
        getRandomUsers().then((response) => {
            if(response.status === 200){
                setUser(response.data.results[0])
            }
        }).catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <h1>Axios example</h1>
            {
                user ?
                (<div>
                    <img src={user.picture.large} alt={user.name.first} />
                    <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>Email: {user.email}</h3>
                </div>)
                :
                (
                    <div className="">
                        <p>Generate a new user</p>
                    </div>
                )
            }
            <button onClick={obtainUser} >Random User</button>
        </div>
    );
}

export default AxiosExample;
