import React, { Component } from 'react';
import RepoItem from './RepoItem';

class Repos extends Component {
	componentDidMount() {
		this.props.getUserRepos(this.props.match.params.login);
	}
	render() {
		const { repos } = this.props;
		return <div>{repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}</div>;
	}
}

export default Repos;
