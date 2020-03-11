import React, { Fragment, useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
	const githubContext = useContext(GithubContext);
	const { repos } = githubContext;
	return (
		<Fragment>
			<div className="card">
				<h3>Recently used Repos</h3>
				{repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
			</div>
		</Fragment>
	);
};

export default Repos;
