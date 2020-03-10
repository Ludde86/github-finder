import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import './App.css';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
	state = {
		users: [],
		user: {},
		repos: [],
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
		// console.log(res.data.items);
		this.setState({
			users: res.data.items,
			loading: false
		});
	};

	getUser = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ user: res.data, loading: false });
	};

	getUserRepos = async (username) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({
			repos: res.data,
			loading: false
		});
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// sets the alert state with the arguments from Search component when the search is empty
	setAlert = (msg, type) => {
		this.setState({
			alert: { msg, type }
		});
		setTimeout(() => {
			this.setState({ alert: null });
		}, 3000);
	};

	render() {
		const { users, user, loading, alert } = this.state;
		return (
			<Router>
				<div className="App">
					<Navbar title="Github Finder" icon="fab fa-github" />

					<div className="container">
						<Alert
							alert={alert} // we pass the message state, and type state
						/>
						<Switch //put multiply component in a sigle route
						>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={!!users.length && true}
											setAlert={this.setAlert}
										/>
										<Users users={users} loading={loading} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:login" // use :login to know which user to display, as a part of the url
								render={(props) => (
									<User
										{...props} // we add (display) the props passed in
										getUser={this.getUser} // pass this function to User.js
										user={user} // pass the user state
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
