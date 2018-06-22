import { pausePlayGame } from '../actions';


const gameStatus = (state = {isGamePaused: true}, action) => {
  switch (action.type){
    case 'PAUSE_PLAY_GAME':
      return {
		isGamePaused: !state.isGamePaused
	  };
    default:
      return state;
  }
}

export default gameStatus;
