import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

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
		const res = await axios.get('https://api.github.com/users');

		this.setState({
			users: res.data,
			loading: false
		});
		console.log(this.state.users);
	}

	render() {
		return (
			<div className="App">
				<Navbar title="Github Finder" icon="fab fa-github" />
				<div className="container">
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
