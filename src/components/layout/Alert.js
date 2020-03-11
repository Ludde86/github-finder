import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Alert = () => {
	const githubContext = useContext(GithubContext);
	const { alert } = githubContext;
	return (
		alert !== null && (
			// here we display the props sent from the alert state
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" /> {alert.msg}
			</div>
		)
	);
};

export default Alert;
