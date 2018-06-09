import React, {Component} from "react";
import Grid from "./Grid.js";
import Graphics from "./Graphics.js";
import GridFrame from "./GridFrame.js"


function getRandomDirection(){
	const directions = ['UP', 'DOWN', 'RIGHT', 'LEFT'];
	const index = Math.floor(Math.random()* 4);
	return directions[index];
}

const gridFrame = new GridFrame(20, 20);

class Generation extends Component{
    state = {
		grid: gridFrame.create(),
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
	closeGame = () => {
		this.setState({
		grid: gridFrame.create(),
		snakeDirection: this.props.snakeDirection,
		snakePosition: [],
		foodPosition: [],
		snake: [],
		points: 0
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
		let food = gridFrame.randomCoordinates;
		let foodIsInTheSnake = snake.includes(food);
		while(foodIsInTheSnake){
			food = gridFrame.randomCoordinates;
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
		let snake = gridFrame.randomCoordinates;
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
	
	render(){
	  const {grid, originalGrid, snakePosition, foodPosition, points} = this.state;
	   const {snakeDirection} = this.props;
	  return(
        <div>
		  <Grid 
		    getNextGrid={this.getNextGrid} 
			grid={grid}
			originalGrid={originalGrid}
			snakeDirection={snakeDirection}
			snakePosition={snakePosition}
			foodPosition={foodPosition}
            getNewCoord ={this.getNewCoord}
			getSnake={this.getSnake}
			createFood={this.createFood}
			getHowManyPoints={this.getHowManyPoints}
			totalPoints={points}
			closeGame={this.closeGame}
		  />	
          <Graphics grid={grid}/>
          <button onClick={this.setOriginalState}>start</button>
	    </div>
	  );	
	}
} 

export default Generation;