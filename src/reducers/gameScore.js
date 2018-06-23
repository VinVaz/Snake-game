
const gameScore = (state = {points: 0, score: 0, lastingScore: 0} , action) => { 
 switch (action.type){
    case 'SCORE_INCREMENT':
	  let newPoint = state.points + 1;
	  let weight = 15;
	  let newScore = weight * newPoint;
      return {
		points: newPoint,
		score: newScore,
		lastingScore: newScore
	  }; 
    case 'SCORE_RESTART':
      return {
		...state,
		points: 0,
		score: 0
	  }; 	  
    default:
      return state;
  }
}

export default gameScore;
