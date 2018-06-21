import { combineReducers } from 'redux'
import direction from './direction';
import gameStatus from './gameStatus';

export default combineReducers({
	direction,
	gameStatus
});
