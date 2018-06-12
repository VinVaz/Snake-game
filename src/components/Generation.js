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
		snakePosition: [],
		foodPosition: [],
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
		snakePosition: [],
		foodPosition: [],
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
	createNewFood = () => {
		const {grid, foodPosition} = this.state;
		const myGrid = [...grid];
		let newFood = gridFrame.randomCoordinates;
		while(myGrid[newFood[0]][newFood[1]]==1){
			newFood = gridFrame.randomCoordinates;
		}
		if(foodPosition.length > 0){
			myGrid[foodPosition[0]][foodPosition[1]] = 1;
		}
		myGrid[newFood[0]][newFood[1]] = 2;
		this.setState({
			grid: myGrid,
            foodPosition: newFood			
		});
	}
	createSnake = () => {
		const {grid} = this.state;
		const {getSnakeDirection} = this.props;
		const myGrid = [...grid];
		let snake = gridFrame.randomCoordinates;
		myGrid[snake[0]][snake[1]] = 1;
		this.setState({
			grid: myGrid,
            snakePosition: snake
		});
		getSnakeDirection(getRandomDirection());
	}
	setOriginalState = () => {
		this.createNewFood()
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
			createNewFood={this.createNewFood}
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