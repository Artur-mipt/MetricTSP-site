import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://localhost:8000/accounts/user/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err)
    });
};


// login
export const login = (username, password) => dispatch => {
	// headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// request body
	const body = JSON.stringify({ username, password })
	
	axios.post('http://localhost:8000/accounts/login/', body, config)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		}).catch(err => console.log(err))
}


// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("http://localhost:8000/accounts/register/", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err)
    });
};


// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/accounts/logout/", null, tokenConfig(getState))
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
};


export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};