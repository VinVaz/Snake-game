import { combineReducers } from 'redux';
import snake from './snake.js';
import food from './food.js';
import grid from './grid.js';

export default combineReducers({
	snake,
	food,
	grid
});
