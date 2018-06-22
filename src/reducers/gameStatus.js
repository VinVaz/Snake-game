
const gameStatus = (state = {isGamePaused: false, isGameOver: true}, action) => {
  switch (action.type){
    case 'TOGGLE_PAUSE_GAME':
      return {
		...state,
		isGamePaused: !state.isGamePaused
	  };
    case 'START_GAME':
      return {
		  ...state,
		isGameOver: false
	  };
	case 'END_GAME':
      return {
		...state,
		isGameOver: true
	  };
    default:
      return state;
  }
}

export default gameStatus;
