import { Directions } from '../actions';
import { setDirection } from '../actions';


const direction = (state = Directions.RANDOM, action) => {
  switch (action.type){
    case 'SET_DIRECTION':
      return action.direction;
    default:
      return state;
  }
}

export default direction;
