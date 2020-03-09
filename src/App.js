import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	};
	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	// Get-request to the github api
	// 	// axios deals with promises (then -> response or reject) -> gets a response, as data

	// 	// axios.get('https://api.github.com/users').then((res) => console.log(res.data));
	// 	// refactored -> await a response or reject
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=$
	// 		{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
	// 		{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);

	// 	this.setState({
	// 		users: res.data,
	// 		loading: false
	// 	});
	// }

	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(res.data.items);
		this.setState({
			users: res.data.items,
			loading: false
		});
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({
			alert: { msg, type }
		});
	};

	render() {
		const { users, loading, alert } = this.state;
		return (
			<div className="App">
				<Navbar title="Github Finder" icon="fab fa-github" />

				<div className="container">
					<Alert alert={alert} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={!!users.length && true}
						setAlert={this.setAlert}
					/>

					<Users users={users} loading={loading} />
				</div>
			</div>
		);
	}
}

export default App;
