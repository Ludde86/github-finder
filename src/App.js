import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';

import './App.css';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar title="Github Finder" icon="fab fa-github" />

						<div className="container">
							<Alert />
							<Switch //put multiply component in a sigle route
							>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route
									exact
									path="/user/:login" // use :login to know which user to display, as a part of the url
									component={User}
								/>
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
