// a function that basically decides what's going to happen to our state, based in an action
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS, SET_ALERT } from '../types';

// reducer takes in state and anction
export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case CLEAR_USERS:
			return {
				...state,
				users: []
			};
		case GET_USER:
			return {
				...state,
				user: action.payload
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case SET_ALERT:
			return {
				...state,
				alert: true
			};
		default:
			return state;
	}
};
