import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert, clearUsers, showClear }) => {
	const githubContext = useContext(GithubContext);
	const [ text, setText ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// this triggers the setAlert function -> which then sets the alert state with thiese arguments (msg, type)
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			githubContext.searchUsers(text);
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
			{showClear && (
				<button onClick={clearUsers} className="btn -btn-light btn-block">
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
