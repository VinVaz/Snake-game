import { combineReducers } from 'redux';
import snake from './snake.js';
import food from './food.js';

export default combineReducers({
	snake,
	food
});
