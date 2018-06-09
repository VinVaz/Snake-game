import React, {Component} from "react";
import Snake from "./Snake.js";
import Food from "./Food.js";

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
let count = 0;

class Grid extends Component{
	state ={
		grid: this.props.grid,
		snake: [],
		snakeSize: 0
	}
	cutSnakeTail = () => {
		const {getSnake} = this.props;
		const {snake} = this.state;
		let snakeCopy = [...snake];
        snakeCopy.shift();
		this.setState({
			snake: snakeCopy
		});
		getSnake(snake);
	}
	cutSnakeTailOffTheGrid = () => {
		const {grid, snake} = this.state;
		let myGrid = [...grid];
		let snakeCopy = [...snake];
		//cleans the snake's tail
		let snakeTail = snakeCopy[0]
		myGrid[snakeTail[0]][snakeTail[1]] = 0;
		this.setState({
			grid: myGrid
		});
	}
	snakeAtesTheFood = () =>{
		const {snake} = this.state;
		const {createFood, foodPosition, totalPoints, getHowManyPoints} = this.props;
		const snakeHead = snake[snake.length - 1];
		this.setState({
			snakeSize: totalPoints + 2
		});
		  if(snakeHead && (snakeHead.toString() == foodPosition.toString())){
			createFood();
			let newPoint = totalPoints + 1;
		    getHowManyPoints(newPoint)
		  }	
	}
	isGameOver = (newCoord) => {
	  const {closeGame, grid} = this.props;
	  if(grid[newCoord[0]][newCoord[1]] == 1){
		   this.setState({
			  grid: gridGenerator(),
		      snake: []
		  });
		  closeGame();
	  }
	}
	manageSnake = (coord) => {
		this.createSnakeBody(coord);
		this.putSnakeOnGrid(coord);
		console.log(this.state.snake)
		count++;
		if(count>this.state.snakeSize){
			this.cutSnakeTail();
			this.cutSnakeTailOffTheGrid();
			count--;
		}
	}
    putSnakeOnGrid(coord){
		const {getNextGrid} = this.props;
		const {grid} = this.state;
		let myGrid = [...grid];
		myGrid[coord[0]][coord[1]] = 1;
		getNextGrid(myGrid);
	}
	createSnakeBody = (coord) => {
		  this.setState({
			  snake: [...this.state.snake, coord]
		  });
	}
	giveDirection =()=>{
		const {snakeDirection, grid, snakePosition, getNewCoord} = this.props;
		const height = grid.length;
		const width = grid[0].length;
		let coord = [...snakePosition];
		if(snakePosition.length>0){
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
		  this.snakeAtesTheFood();
		  this.manageSnake(coord);
		  getNewCoord(coord);
		}		  
	}

    componentDidMount(){
		let myVar = setInterval(this.giveDirection.bind(this), 400)
	}
	render(){
	  return( 
	    <div />
	  );
	}
} 

export default Grid;