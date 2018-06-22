import React, {Component} from "react";
import Layout from "./Layout.js";
import GridFrame from "./GridFrame.js"
import Bite from "../sound/bite.mp3"
import Crash from "../sound/crash.mp3"


/*
 The grid is separated into three numeric values, each representing a 
 different concept.
 The snake is represented by the number 1, the food by the number 2 and 
 the empty cells of the grid each have a value equivalent to 0.
*/
//The coordinates of any given positional reference are represented by arrays


const gridFrame = new GridFrame(20, 20);
let count = 0;

var newItemSound = new Audio(Bite);
var crashSound = new Audio(Crash);

class GameLogic extends Component{
	state ={
	  grid: gridFrame.create(),
	  gameOverSign: false,
	  startButtonPressed: false,
	  snake: [],
	  valueBeforeSnake: 0,
	}
	resetState = () => {
		const {endGame, restartSnakeAttributes, scoreRestart, foodRestart} = this.props;
		count = 0;
		scoreRestart();
		foodRestart();
		restartSnakeAttributes();
		endGame();
		this.setState({
		  grid: gridFrame.create(),
		  startButtonPressed: false,
		  snake: [],
		  valueBeforeSnake: 0,
	   });
	}
	createNewFood = () => {
		const {grid} = this.state;
		const {foodPosition, setFoodPosition} = this.props;
		const newGrid = [...grid];
		let newFood = gridFrame.randomCoordinates;
		while(newGrid[newFood[0]][newFood[1]]==1){
			newFood = gridFrame.randomCoordinates;
		}
		if(foodPosition.length > 0){
			newGrid[foodPosition[0]][foodPosition[1]] = 0;
		}
		newGrid[newFood[0]][newFood[1]] = 2;
		setFoodPosition(newFood)
		this.setState({
			grid: newGrid,		
		});
	}
	createSnake = () => {
		const {setSnakePosition} = this.props;
		let position = gridFrame.randomCoordinates;
		setSnakePosition(position);
	}
	startGame = () => {
		const {startButtonPressed} = this.state;
		const {isGameOver, startGame} = this.props;
		if(isGameOver){
		  startGame();
		  this.createNewFood();
		  this.createSnake();
		  if(startButtonPressed == false){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		  }
		  this.setState({
			startButtonPressed: true,
			gameOverSign: false
		  });
		}
	}
	removeLastPositionFromSnake = () => {
		const {snake} = this.state;
		let snakeCopy = [...snake];
        snakeCopy.shift();
		this.setState({
			snake: snakeCopy
		});
	}
	removeSnakeTailFromTheGrid = () => {
		const {snake, grid} = this.state;
		let nextGrid = [...grid];
		let snakeTail = snake[0]
		nextGrid[snakeTail[0]][snakeTail[1]] = 0;
		this.setState({
			grid: nextGrid
		});
	}
	manageSnake = (coord) => {
		this.checkIfSnakeAteTheFood();
		this.addPositionToSnake(coord);
		this.putSnakeOnGrid(coord);
		count++;
		if(count>this.props.snakeSize){
			this.removeSnakeTailFromTheGrid();
			this.removeLastPositionFromSnake();
			count--;
		}
	}
    putSnakeOnGrid(coord){
		const {grid} = this.state;
		let nextGrid = [...grid];
		nextGrid[coord[0]][coord[1]] = 1;
		this.setState({
			grid: nextGrid
		});
	}
	addPositionToSnake = (coord) => {
		  this.setState({
			  snake: [...this.state.snake, coord]
		  });
	}
	checkIfSnakeAteTheFood = () =>{
		const {valueBeforeSnake, grid, createNewFood} = this.state;
		const {snakeSizeIncrement, scoreIncrement} = this.props;
		let gridCopy = [...grid];
		  if(valueBeforeSnake == 2){
			this.createNewFood();
			newItemSound.play();
			snakeSizeIncrement();
			scoreIncrement();
		  }	
	}
	checkIfGameIsOver = () => {
		const {valueBeforeSnake} = this.state;
	    if(valueBeforeSnake == 1 ){
		   crashSound.play();
		   clearInterval(this.intervalVar)
		   this.resetState();
		   this.setState({
			  gameOverSign: true,
		   });
	    } 
	}
	pause = () => {
		const  {togglePauseGame, isGamePaused, isGameOver} = this.props;
		if(isGameOver == false){
		  if(isGamePaused == true){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		  } else{
			clearInterval(this.intervalVar);
		  }
          togglePauseGame();			  
		}
	}
	giveDirection =()=>{
		const {grid} = this.state;
		const {snakeDirection, isGameOver, setSnakePosition, snakePosition} = this.props;
		const height = grid.length;
		const width = grid[0].length;
		let coord = [...snakePosition];
		if(coord.length>0 && isGameOver==false){
          switch(snakeDirection){
		    case 'RIGHT':
		      if(coord[1]<width-1){
				coord[1]++;
			  }
		    else coord[1] = 0;
		    break;
	      case 'LEFT':
		    if(coord[1]>0){
				coord[1]--;
			}
		    else coord[1] = width-1;
		    break;
		  case 'UP':
		    if(coord[0]>0){
		      coord[0]--;
			}
			else coord[0] = height-1;
		    break;
		  case 'DOWN':
		    if(coord[0]<height-1){
		      coord[0]++;
		    }
			else coord[0] = 0;
			break;
		  default:
		    break;
          }
		  this.setState({
			  valueBeforeSnake: grid[coord[0]][coord[1]]
		  })
		  this.manageSnake(coord);
		  this.checkIfGameIsOver();
		} else {
			coord = [];
		}
	    setSnakePosition(coord);
	}
	
	componentWillUnmount(){
	   clearInterval(this.intervalVar)	
	}

	render(){
	const {grid, gameOverSign} = this.state;
	const {isGamePaused, score, lastingScore} = this.props;
	  return( 
	    <div>
		  <Layout 
		    grid = {grid} 
			score = {score}
			startGame = {this.startGame}
			pauseGame = {this.pause}
			isGamePaused = {isGamePaused}
			gameOverSign={gameOverSign}
			lastingScore = {lastingScore}
		  />
		</div>
	  );
	}
} 

export default GameLogic;