import React from 'react';
import {useUser} from './index';

const UserProfile = ()=>{
    const {user} = useUser();
    return(
        <>
        {user ? (
            <div>
                <h2>User Name: {user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        ):(
            <h2>Please log in to see your profile</h2>
        )}
        </>
    )
}

export default UserProfile;