import { connect } from 'react-redux';
import Application from '../components/Application';
import { setDirection, 
         togglePauseGame,
		 endGame,
		 startGame,
		 snakeSizeIncrement,
		 restartSnakeAttributes,
		 setSnakePosition,
		 scoreIncrement,
		 scoreRestart,
		 foodRestart,
		 setFoodPosition,
		 setCellValueBeforeSnake,
		 restartCellValueBeforeSnake
	   } from '../actions';

const mapStateToProps = state => ({
  snakeDirection: state.elements.snake.direction,
  snakeSize: state.elements.snake.size,
  snakePosition: state.elements.snake.position,
  foodPosition: state.elements.food.position,
  isGamePaused: state.gameStatus.isGamePaused,
  isGameOver: state.gameStatus.isGameOver,
  score: state.gameScore.score,
  lastingScore: state.gameScore.lastingScore,
  gridCellValueBeforeSnake: state.elements.grid.cellValueBeforeSnake
});

const mapDispatchToProps = dispatch => ({	
  setSnakeDirection: direction => dispatch(setDirection(direction)),
  togglePauseGame: () => dispatch(togglePauseGame()),
  endGame: () => dispatch(endGame()),
  startGame: () => dispatch(startGame()),
  snakeSizeIncrement: () => dispatch(snakeSizeIncrement()),
  restartSnakeAttributes: () => dispatch(restartSnakeAttributes()),
  setSnakePosition: position => dispatch(setSnakePosition(position)),
  scoreIncrement: () => dispatch(scoreIncrement()),
  scoreRestart: () => dispatch(scoreRestart()),
  foodRestart: () => dispatch(foodRestart()),
  setFoodPosition: position => dispatch(setFoodPosition(position)),
  setCellValueBeforeSnake: val => dispatch(setCellValueBeforeSnake(val)),
  restartCellValueBeforeSnake: () => dispatch(restartCellValueBeforeSnake())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
