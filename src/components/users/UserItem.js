import React from 'react';

const UserItem = (props) => {
	const { avatar_url, login, html_url } = props.user; // pulling data out of this object
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					{html_url}
				</a>
			</div>
		</div>
	);
};

export default UserItem;
