import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
	return <div style={userStyle}>{users.map((user) => <UserItem key={user.id} user={user} />)}</div>;
};

const userStyle = {
	display: 'grid', // this element is using grid
	gridTemplateColumns: 'repeat(3, 1fr)', // places elements in three columns, all with the same size
	gridGap: '1rem' // sets a gap between all elements
};

export default Users;
