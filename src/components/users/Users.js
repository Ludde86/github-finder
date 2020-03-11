import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;
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
