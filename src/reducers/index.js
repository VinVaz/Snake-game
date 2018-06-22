import { combineReducers } from 'redux';
import elements from './elements';
import gameStatus from './gameStatus';
import gameScore from './gameScore';

export default combineReducers({
	elements,
	gameStatus,
	gameScore
});
