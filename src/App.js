import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
	// when we want to make an http request, when the app loads, we do it in this lifecycle method
	componentDidMount() {
		console.log('App.js mounted');
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
