import { combineReducers } from 'redux';
import task from "./task";
import auth from "./auth";
import errors from './errors';
import messages from './messages';

export default combineReducers({
	task,
	auth,
	errors,
	messages
});
