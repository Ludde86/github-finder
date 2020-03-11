// here we place our initial state, also all our actions (ex -> call an action to fetch data, search users)
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS, SET_ALERT } from '../types';
import githubContext from './githubContext';

// our initial state
const GithubState = (props) => {
	// global state for anything that has to do with github
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: false
	};

	// in order to dispatch to our reducer (-> calla request to github)
	// call an action -> make a request to github -> get a response -> dispatch a type back to the reducer

	// we pull state and dispatch from useReducer
	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	// Search Users
	const searchUsers = async (text) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// setUsers(res.data.items);
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items
		});
	};

	// Get User
	const getUser = async (username) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
			type: GET_USER,
			payload: res.data
		});
	};

	// Get Repos
	const getUserRepos = async (username) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=20&sort=created:asc&client_id=$
			{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
			{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({
			type: GET_REPOS,
			payload: res.data
		});
	};

	// Clear Users
	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS
		});
		// setUsers([]);
	};

	// sets the alert state with the arguments from Search component when the search is empty
	const showAlert = (msg, type) => {
		setAlert(msg, type);
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	// Set Loading
	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	// Set Alert
	const setAlert = (msg, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type }
		});
	};

	// what we want to return is the Provider
	// -> with the value of what we want available in our application
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				alert: state.alert,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
				showAlert,
				setAlert
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
