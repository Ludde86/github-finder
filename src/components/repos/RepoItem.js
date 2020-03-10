import React from 'react';

const RepoItem = ({ repo }) => {
	const { name, html_url } = repo;
	return (
		<div className="btn btn-light my-1">
			<p>
				<a href={html_url}>
					<strong>{name}</strong>
				</a>
			</p>
		</div>
	);
};

export default RepoItem;
