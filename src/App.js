import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
	state = {
		users: [],
		loading: false
	};
	async componentDidMount() {
		this.setState({ loading: true });
		// Get-request to the github api
		// axios deals with promises (then -> response or reject) -> gets a response, as data

		// axios.get('https://api.github.com/users').then((res) => console.log(res.data));
		// refactored -> await a response or reject
		const res = await axios.get(
			`https://api.github.com/users?client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({
			users: res.data,
			loading: false
		});
	}

	render() {
		return (
			<div className="App">
				<Navbar title="Github Finder" icon="fab fa-github" />
				<Search />
				<div className="container">
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
