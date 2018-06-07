import React, {Component} from "react";
import Grid from "./Grid.js";
import Graphics from "./Graphics.js";


function gridGenerator(){
  const width = 10, height = 10;
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

class Generation extends Component{
	//here lies a state that must be adapated to redux system
    state = {
		originalGrid: gridGenerator(),
		grid: gridGenerator(),
		snakeDirection: "",
		snakeHeadPosition: [],
		snakePosition: [],
		foodPosition: []
	}
	getNextGrid = (nextGrid) => {
		this.setState({
			grid: nextGrid
		});
	}
	setOriginalState = () => {
		const myGrid = this.state.grid;
		let food = getRandomCoordinateInArray(10, 10);
		let snake = getRandomCoordinateInArray(10, 10);
		myGrid[food[0]][food[1]] = 2;
		myGrid[snake[0]][snake[1]] = 1;
		this.setState({
			grid: myGrid,
			snakeHeadPosition: [snake[0]][snake[1]],
            snakePosition: snake,
            foodPosition: food			
		});
	}
	getSnakeDirection = (direction) => {
		this.setState({
		  snakeDirection: direction
		});
	}
	render(){
	  const {grid, snakeDirection, snakeHeadPosition, originalGrid, snakePosition, foodPosition} = this.state;
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