import React, {Component} from "react";
import Grid from "./Grid.js";
import Graphics from "./Graphics.js";
import GridFrame from "./GridFrame.js"


const gridFrame = new GridFrame(20, 20);

class Generation extends Component{
    state = {
		grid: gridFrame.create(),
		snakePosition: [],
		foodPosition: [],
		isGameOver: true
	}
	getNextGrid = (nextGrid) => {
		this.setState({
			grid: nextGrid
		});
	}
	resetState = () => {
		this.setState({
			grid: gridFrame.create(),
			snakePosition: [],
			foodPosition: [],
			isGameOver: true
	   });
	}
	getNewSnakePosition = (coord) => {
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
			myGrid[foodPosition[0]][foodPosition[1]] = 0;
		}
		myGrid[newFood[0]][newFood[1]] = 2;
		this.setState({
			grid: myGrid,
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
		this.setState({
			isGameOver: false
		});
	}
	render(){
	  const {grid, originalGrid, snakePosition, foodPosition, points, isGameOver} = this.state;
	  const {snakeDirection, getScore} = this.props;
	  return(
        <div>
		  <Grid 
		    getNextGrid={this.getNextGrid} 
			grid={grid}
			originalGrid={originalGrid}
			snakeDirection={snakeDirection}
			snakePosition={snakePosition}
			foodPosition={foodPosition}
            getNewSnakePosition ={this.getNewSnakePosition}
			getSnake={this.getSnake}
			createNewFood={this.createNewFood}
			totalPoints={points}
			resetGenerationState={this.resetState}
			getScore={getScore}
			isGameOver={isGameOver}
		  />	
          <Graphics grid={grid}/>
		  	  <button onClick={this.startGame}>start</button>
	    </div>
	  );	
	}
} 

export default Generation;