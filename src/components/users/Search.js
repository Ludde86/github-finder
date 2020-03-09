import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		const { clearUsers, showClear } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={(e) => this.setState({ text: e.target.value })}
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
	}
}

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired
};

export default Search;
