import { Directions } from '../actions';
import { setDirection } from '../actions';


const direction = (state = setDirection(Directions.RANDOM), action) => {
  switch (action.type){
    case 'SET_DIRECTION':
      return action.direction;
    default:
      return state.direction;
  }
}

export default direction;
