import { GET_TASK, DELETE_TASK, ADD_TASK } from "../actions/types.js"

const initialState = {
	task: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TASK:
		return {
			...state,
			task: action.payload
		}
		case DELETE_TASK:
		return {
			...state,
			task: state.task.filter(task => task.id !== action.payload)
		}
		case ADD_TASK:
		return {
			...state,
			leads: [...state.task, action.payload]
		}
		default:
			return state;
	}
}