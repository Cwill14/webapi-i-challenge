import React from 'react';

import User from './User';

const List = props => {
    return (
        <div>
            {props.list.map(user => {
                return <User
                    user={user}
                    key={user.id}
                    deleteUser={props.deleteUser}
                />
            })}
        </div>
    );
};

export default List;