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

const App = () => {
	// const [ users, setUsers ] = useState([]);
	// const [ user, setUser ] = useState({});
	// const [ repos, setRepos ] = useState([]);
	// const [ loading, setLoading ] = useState(false);
	// const [ alert, setAlert ] = useState(null);

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

	// all functions is handled by context

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
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
