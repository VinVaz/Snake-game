import React, {Component} from "react";
import Snake from "./Snake.js";
import Food from "./Food.js";

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
let count = 0;
class Grid extends Component{
	state ={
		grid: this.props.grid,
		snakeHead: [],
		snake: []
	}
	cutSnakeTail = () => {
		const {originalGrid, foodPosition, clearSnake} = this.props;
		const {snake, grid} = this.state;
		let myGrid = [...grid];
		let snakeCopy = [...snake];
        snakeCopy.shift();
		//cleans the snake's tail
		let snakeTail = snakeCopy[0]
		myGrid[snakeTail[0]][snakeTail[1]] = 0;
		this.setState({
			grid: myGrid,
			snake: snakeCopy
		});
	}
	manageSnake = (coord) => {
		this.createSnakeBody(coord);
		this.putSnakeOnGrid(coord);
		count++;
		if(count>3){
			this.cutSnakeTail();
			count--;
		}
		console.log(this.state.snake)
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
		  getNewCoord(coord)
		  this.manageSnake(coord)
		}		  
	}

    componentDidMount(){
		let myVar = setInterval(this.giveDirection.bind(this), 300)
	}
	render(){
	  const {getNextGrid, grid, snakeDirection, snakeHeadPosition} = this.props;
	  return( 
	    <div>
	  	  <Food grid={grid}/>
		  <Snake 
		    grid={grid} 
		    snakeDirection={snakeDirection} 
			getNextGrid={getNextGrid}
			snakeHeadPosition={snakeHeadPosition}
			putSnakeOnGrid={this.putSnakeOnGrid.bind(this)}
		  />
	    </div>
	  );
	}
} 

export default Grid;