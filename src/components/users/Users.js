import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<div style={userStyle}>{users.map((user) => <UserItem key={user.id} user={user} />)}</div>
			)}
		</Fragment>
	);
};

const userStyle = {
	display: 'grid', // this element is using grid
	gridTemplateColumns: 'repeat(3, 1fr)', // places elements in three columns, all with the same size
	gridGap: '1rem' // sets a gap between all elements
};

export default Users;
