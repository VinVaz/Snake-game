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
/*
function limiter(coord){
	if(coord[1] > width-1){
	   coord[1] = 0;
	} else if(coord[1] < 0){
		coord[1] = width-1;
	}else if(coord[0] < 0){
	  coord[0] = height-1;
	} else if(coord[0] > height-1){
	  coord[0] = 0;
	}
	return coord;
}
*/
var newItemSound = new Audio('http://soundbible.com/mp3/Ting-Popup_Pixels-349896185.mp3');
class Grid extends Component{
	state ={
		snake: [],
		snakeSize: 1
	}
	cutSnakeTail = () => {
		const {snake} = this.state;
		let snakeCopy = [...snake];
        snakeCopy.shift();
		this.setState({
			snake: snakeCopy
		});
	}
	cutOffSnakeTailOfTheGrid = () => {
		const {snake} = this.state;
		const {getNextGrid, grid} = this.props;
		let myGrid = [...grid];
		let snakeCopy = [...snake];
		//cleans the snake's tail
		let snakeTail = snakeCopy[0]
		myGrid[snakeTail[0]][snakeTail[1]] = 0;
		getNextGrid(myGrid);
	}
	snakeAtesTheFood = () =>{
		const {snake, snakeSize} = this.state;
		const {createNewFood, foodPosition, totalPoints, getHowManyPoints} = this.props;
		const snakeHead = snake[snake.length - 1];
		  if(snakeHead && (snakeHead.toString() == foodPosition.toString())){
			createNewFood();
			//newItemSound.play();
			this.setState({
			  snakeSize: snakeSize + 1
		    });
			let newPoint = totalPoints + 1;
		    getHowManyPoints(newPoint)
		  }	
	}
	isGameOver = (newCoord) => {
	  const {closeGame, grid} = this.props;
	  let gridCopy = [...grid]
	  if(gridCopy[newCoord[0]][newCoord[1]] == 1){
		   this.setState({
			  grid: gridGenerator(),
		      snake: []
		  });
		  closeGame();
	  }
	}
	manageSnake = (coord) => {
		this.putSnakeOnGrid(coord);
		this.createSnakeBody(coord);
		count++;
		if(count>this.state.snakeSize){
			this.cutOffSnakeTailOfTheGrid();
			this.cutSnakeTail();
			count--;
		}
	}
    putSnakeOnGrid(coord){
		const {getNextGrid, grid} = this.props;
		let myGrid = [...grid];
		myGrid[coord[0]][coord[1]] = 1;
		this.setState({
			grid: myGrid
		});
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
    increase = () => {
		const {snakeSize} = this.state;
		this.setState({
		  snakeSize: snakeSize + 1	
		});
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