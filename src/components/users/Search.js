import React, { Component } from 'react';

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
			</div>
		);
	}
}

export default Search;
