import React, {Component} from "react";
import Layout from "./Layout.js";
import GridFrame from "./GridFrame.js"
import Bite from "../sound/bite.mp3"


/*
 The grid is separated into three numeric values, each representing a 
 different concept.
 The snake is represented by the number 1, the food by the number 2 and 
 the empty cells of the grid each have a value equivalent to 0.
*/

const gridFrame = new GridFrame(20, 20);
let count = 0;

var newItemSound = new Audio(Bite);
class Grid extends Component{
	state ={
	  grid: gridFrame.create(),
	  snakePosition: [],
	  foodPosition: [],
	  isGameFinished: true,
	  startButtonPressed: false,
	  snake: [],
	  snakeSize: 1,
	  valueBeforeSnake: 0,
	  points: 0,
	  gameIsPaused: true
	}
	resetState = () => {
		this.setState({
		  grid: gridFrame.create(),
		  snakePosition: [],
		  foodPosition: [],
		  isGameFinished: true,
		  startButtonPressed: false,
		  snake: [],
		  snakeSize: 1,
		  valueBeforeSnake: 0,
		  points: 0,
	   });
	}
	createNewFood = () => {
		const {grid, foodPosition} = this.state;
		const newGrid = [...grid];
		let newFood = gridFrame.randomCoordinates;
		while(newGrid[newFood[0]][newFood[1]]==1){
			newFood = gridFrame.randomCoordinates;
		}
		if(foodPosition.length > 0){
			newGrid[foodPosition[0]][foodPosition[1]] = 0;
		}
		newGrid[newFood[0]][newFood[1]] = 2;
		this.setState({
			grid: newGrid,
            foodPosition: newFood			
		});
	}
	createSnake = () => {
		let snake = gridFrame.randomCoordinates;
		this.setState({
            snakePosition: snake
		});
	}
	startGame = () => {
		this.createNewFood();
		this.createSnake();
		const {startButtonPressed} = this.state;
		if(startButtonPressed == false){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		}
		this.setState({
			isGameFinished: false,
			startButtonPressed: true
		});
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
		if(count>this.state.snakeSize){
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
		const {snakeSize, valueBeforeSnake, points, grid, createNewFood} = this.state;
		let gridCopy = [...grid];
		  if(valueBeforeSnake == 2){
			this.createNewFood();
			newItemSound.play();
			this.setState({
			  snakeSize: snakeSize + 1,
			  points: points + 1
		    });
		  }	
	}
	checkIfGameIsOver = () => {
		const {valueBeforeSnake} = this.state;
	    if(valueBeforeSnake == 1 ){
		   this.resetState();
		   count = 0;
		   clearInterval(this.intervalVar)
	    } 
	}
	pause = () => {
		const {gameIsPaused} = this.state;
		this.setState({
				gameIsPaused: !gameIsPaused
			});
		if(gameIsPaused == false){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		} else{
			clearInterval(this.intervalVar);
		}
	}

	giveDirection =()=>{
		const {grid, snakePosition} = this.state;
		const {snakeDirection} = this.props;
		const height = grid.length;
		const width = grid[0].length;
		let coord = [...snakePosition];
		if(coord.length>0 && this.state.isGameFinished==false){
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
	  this.setState({
			snakePosition: coord
		});
	}
	
	componentWillUnmount(){
	   clearInterval(this.intervalVar)	
	}

	render(){
	const {grid, points} = this.state;
	  return( 
	    <div>
		  <Layout 
		    grid = {grid} 
			score = {15 * points}
			startGame = {this.startGame}
			pauseGame = {this.pause}
		  />
		</div>
	  );
	}
} 

export default Grid;