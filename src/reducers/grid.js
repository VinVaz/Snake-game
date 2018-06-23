
const grid = (state = {cellValueBeforeSnake: 0} , action) => { 
 switch (action.type){
    case 'SET_CELLVALUE_BEFORE_SNAKE':
      return {
		...state,
		cellValueBeforeSnake: action.val
	  };  
	case 'RESTART_GAME_ATTRIBUTES':
      return {
	    ...state,
		cellValueBeforeSnake: 0
	  };
    default:
      return state;
  }
}

export default grid;
