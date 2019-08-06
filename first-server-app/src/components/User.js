import React from 'react';

const User = props => {
    return (
        <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.bio}</p>
            <button onClick={() => props.deleteUser(props.user.id)}>Delete</button>
        </div>
    );
};

export default User;