import React from 'react';

const User = props => {
    return (
        <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.bio}</p>
        </div>
    );
};

export default User;