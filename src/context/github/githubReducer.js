// a function that basically decides what's going to happen to our state, based in an action
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USERS, GET_REPOS } from '../types';

// reducer takes in state and anction
export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};