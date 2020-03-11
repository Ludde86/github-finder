import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const { searchUsers, users, clearUsers } = githubContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [ text, setText ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// this triggers the setAlert function -> which then sets the alert state with thiese arguments (msg, type)
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					// onChange={(e) => this.setState({ text: e.target.value })}
					onChange={(e) => setText(e.target.value)}
					autoComplete="off"
				/>

				<input type="submit" value="search" className="btn btn-dark btn-block" />
			</form>
			{!!users.length && (
				<button onClick={clearUsers} className="btn -btn-light btn-block">
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
