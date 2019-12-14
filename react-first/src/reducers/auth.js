import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
}

export default function(state = initialState, action) {
	switch(action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token',
								 action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			}
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			}

		default: 
			return state;
	}
}