import React, {Component} from "react";
import Grid from "./Grid.js";
import Graphics from "./Graphics.js";


function gridGenerator(){
  const width = 20, height = 20;
  let myArray = [];
  for(let i=0; i<height; i++){
	myArray[i] = [];
	for(let j=0; j<width; j++){
	  myArray[i][j] = 0;
    }
  }
  return myArray;  
}

function getRandomCoordinateInArray(collumns, rows){
	const i = Math.floor(Math.random()* rows);
	const j = Math.floor(Math.random()* collumns);
	return [i, j];
}
function getRandomDirection(){
	const directions = ['UP', 'DOWN', 'RIGHT', 'LEFT'];
	const index = Math.floor(Math.random()* 4);
	return directions[index];
}

class Generation extends Component{
    state = {
		originalGrid: gridGenerator(),
		grid: gridGenerator(),
		snakeDirection: "",
		snakeHeadPosition: [],
		snakePosition: [],
		foodPosition: [],
		snake: [],
		points: 0
	}
	getNextGrid = (nextGrid) => {
		this.setState({
			grid: nextGrid
		});
	}
	getHowManyPoints = (val) => {
		this.setState({
			points: val
		});
	}
	getNewCoord = (coord) => {
		this.setState({
			snakePosition: coord
		});
	}
	createFood = () => {
		const {grid, snake} = this.state;
		const myGrid = [...grid];
		let food = getRandomCoordinateInArray(10, 10);
		let foodIsInTheSnake = snake.includes(food);
		while(foodIsInTheSnake){
			food = getRandomCoordinateInArray(10, 10);
			foodIsInTheSnake = snake.includes(food);
		}
		myGrid[food[0]][food[1]] = 2;
		this.setState({
			grid: myGrid,
            foodPosition: food			
		});
	}
	createSnake = () => {
		const {grid} = this.state;
		const myGrid = [...grid];
		let snake = getRandomCoordinateInArray(10, 10);
		myGrid[snake[0]][snake[1]] = 1;
		this.setState({
			grid: myGrid,
            snakePosition: snake,
            snakeDirection: getRandomDirection()
		});
	}
	getSnake = (arr) => {
		this.setState({
		  snake: arr
		});
	}
	setOriginalState = () => {
		this.createFood()
		this.createSnake()
	}
	getSnakeDirection = (direction) => {
		const {snakeDirection, points} = this.state;
		  if(
		    (
			  (direction == 'UP' && snakeDirection == 'DOWN') ||
		      (direction == 'DOWN' && snakeDirection == 'UP') ||
		      (direction == 'LEFT' && snakeDirection == 'RIGHT') ||
		      (direction == 'RIGHT' && snakeDirection == 'LEFT')
			)&& points != 0
		){
		  this.setState({
		    snakeDirection: snakeDirection
		  });	
		}else {
		  this.setState({
		    snakeDirection: direction
		  });
		}
		
	}
	render(){
	  const {grid, snakeDirection, snakeHeadPosition, originalGrid, snakePosition, foodPosition, points} = this.state;
	  return(
        <div>
		  <Grid 
		    getNextGrid={this.getNextGrid} 
			grid={grid}
			originalGrid={originalGrid}
			snakeDirection={snakeDirection}
			snakeHeadPosition={snakeHeadPosition}
			snakePosition={snakePosition}
			foodPosition={foodPosition}
            getNewCoord ={this.getNewCoord}
			getSnake={this.getSnake}
			createFood={this.createFood}
			getHowManyPoints={this.getHowManyPoints}
			totalPoints={points}
		  />	
          <Graphics grid={grid}/>
          <button onClick={this.setOriginalState}>start</button>
		  <button onClick={()=> {this.getSnakeDirection('UP')}}>UP</button>
		  <button onClick={()=> {this.getSnakeDirection('DOWN')}}>DOWN</button>
		  <button onClick={()=> {this.getSnakeDirection('RIGHT')}}>RIGHT</button>
		  <button onClick={()=> {this.getSnakeDirection('LEFT')}}>LEFT</button>
	    </div>
	  );	
	}
} 

export default Generation;