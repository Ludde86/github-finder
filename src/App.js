import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import './App.css';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
	const [ users, setUsers ] = useState([]);
	const [ user, setUser ] = useState({});
	const [ repos, setRepos ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ alert, setAlert ] = useState(null);

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

	const searchUsers = async (text) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUsers(res.data.items);
		setLoading(false);
	};

	const getUser = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUser(res.data);
		setLoading(false);
	};

	const getUserRepos = async (username) => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=20&sort=created:asc&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setRepos(res.data);
		setLoading(false);
	};

	const clearUsers = () => {
		setUsers([]);
	};

	// sets the alert state with the arguments from Search component when the search is empty
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return (
		<GithubState>
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
											searchUsers={searchUsers}
											clearUsers={clearUsers}
											showClear={!!users.length && true}
											setAlert={showAlert}
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
									<Fragment>
										<User
											{...props} // we add (display) the props passed in (-> match)
											getUser={getUser} // pass this function to User.js
											user={user} // pass the user state
											repos={repos}
											getUserRepos={getUserRepos}
											loading={loading}
										/>
									</Fragment>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
