import React, { Fragment } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
	return (
		<Fragment>
			<div className="card">
				<h3>Recently used Repos</h3>
				{repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
			</div>
		</Fragment>
	);
};

Repos.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Repos;
