import { togglePauseGame } from '../actions';


const gameStatus = (state = {isGamePaused: false}, action) => {
  switch (action.type){
    case 'TOGGLE_PAUSE_GAME':
      return {
		isGamePaused: !state.isGamePaused
	  };
    default:
      return state;
  }
}

export default gameStatus;
