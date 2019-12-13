import axios from "axios";

import { GET_TASK, DELETE_TASK, ADD_TASK } from "./types";

// GET TASK
export const getTask = () => dispatch => {
	axios.get("http://localhost:8000/home/")
		.then(res => {
			dispatch({
				type: GET_TASK,
				payload: res.data
			})
		}).catch(err => console.log(err));
}; 


// DELETE TASK
export const deleteTask = (id) => dispatch => {
	console.log('abc'.concat(id.toString()))
	var addr = 'http://localhost:8000/home/'.concat(id.toString(), '/')
	console.log(addr)
	axios.delete(addr)
		.then(res => {
			dispatch({
				type: DELETE_TASK,
				payload: id
			})
		}).catch(err => console.log(err));
}; 

// ADD TASK
export const addTask = (task) => dispatch => {
	axios.post("http://localhost:8000/home/", task)
		.then(res => {
			dispatch({
				type: ADD_TASK,
				payload: res.data
			})
		}).catch(err => console.log(err));
}; 