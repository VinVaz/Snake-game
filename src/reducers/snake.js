import {setDirection, Directions} from '../actions';

const snake = (state = {direction: Directions.RANDOM, position: [], size: 1} , action) => { 
 switch (action.type){
    case 'SET_DIRECTION':
      return {
		...state,
		direction: action.direction
	  };
	case 'SNAKE_SIZE_INCREMENT':
	  let newSize = state.size + 1;
      return {
		...state,
		size: newSize
	  };
	case 'RESTART_SNAKE_ATTRIBUTES':
      return {
	    ...state,
		position: [],
		size: 1
	  };
	case 'SET_SNAKE_POSITION':
      return {
		...state,
		position: action.position
	  };  
    default:
      return state;
  }
}

export default snake;
