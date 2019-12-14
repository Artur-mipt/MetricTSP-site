import axios from "axios";

import { GET_TASK, DELETE_TASK, ADD_TASK } from "./types";
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

// GET TASK
export const getTask = () => (dispatch, getState) => {
	axios.get("http://localhost:8000/home/", tokenConfig(getState))
		.then(res => {
			dispatch({
				type: GET_TASK,
				payload: res.data
			})
		}).catch(err =>
			dispatch(returnErrors(err.response.data, err.response.status)) 
		);
}; 


// DELETE TASK
export const deleteTask = id => (dispatch, getState) => {
	var addr = 'http://localhost:8000/home/'.concat(id.toString(), '/')
	axios.delete(addr, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: DELETE_TASK,
				payload: id
			})
		}).catch(err => 
			console.log(err)
		);
}; 

// ADD TASK
export const addTask = (task) => (dispatch, getState) => {
	axios.post("http://localhost:8000/home/", task, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: ADD_TASK,
				payload: res.data
			})
		}).catch(err => 
			dispatch(returnErrors(err.response.data, err.response.status))
		);
}; 