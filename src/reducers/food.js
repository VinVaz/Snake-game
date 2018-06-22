import {setDirection, Directions} from '../actions';

const food = (state = {position: []} , action) => { 
 switch (action.type){
    case 'FOOD_RESTART':
      return {
		...state,
		position: []
	  }; 
	case 'SET_FOOD_POSITION':
      return {
		...state,
		position: action.position
	  }; 
    default:
      return state;
  }
}

export default food;
