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

class Grid extends Component{
	state ={
		grid: this.props.grid,
	}
	clearGrid = () => {
		const {originalGrid, foodPosition} = this.props;
		let myGrid = gridGenerator();
		console.log(foodPosition);
		const i = foodPosition[0], j = foodPosition[1];
		myGrid[i][j] = 2;
		this.setState({
			grid: myGrid
		});
	}
    putSnakeOnGrid(coord){
		const {getNextGrid} = this.props;
		const {grid} = this.state;
		this.clearGrid();
		let myGrid = [...grid];
		myGrid[coord[0]][coord[1]] = 1;
		getNextGrid(myGrid);
	}
	giveDirection =()=>{
		const {snakeDirection, grid, snakePosition} = this.props;
		const height = grid.length;
		const width = grid[0].length;
		if(snakePosition.length>0){
          switch(snakeDirection){
		    case 'RIGHT':
		      if(snakePosition[1]<width-1){
				snakePosition[1]++;
			  }
		    else snakePosition[1] = 0;
		    break;
	      case 'LEFT':
		    if(snakePosition[1]>0){
				snakePosition[1]--;
			}
		    else snakePosition[1] = width-1;
		    break;
		  case 'UP':
		    if(snakePosition[0]>0){
		      snakePosition[0]--;
			}
			else snakePosition[0] = height-1;
		    break;
		  case 'DOWN':
		    if(snakePosition[0]<height-1){
		      snakePosition[0]++;
		    }
			else snakePosition[0] = 0;
			break;
		  default:
		    break;
          }
		  this.putSnakeOnGrid(snakePosition);
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