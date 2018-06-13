import React, {Component} from "react";
import Bite from "../sound/bite.mp3"


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

var newItemSound = new Audio(Bite);
class Grid extends Component{
	constructor(props){
		super(props)
		this.state ={
		snake: [],
		snakeSize: 1,
		valueBeforeSnake: 0,
		points: 0,
		gameIsPaused: false
	    }
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
		const {snake, snakeSize, valueBeforeSnake, points} = this.state;
		const {createNewFood, foodPosition, getScore, grid} = this.props;
		let gridCopy = [...grid];
		  if(valueBeforeSnake == 2){
			createNewFood();
			newItemSound.play();
			this.setState({
			  snakeSize: snakeSize + 1,
			  points: points + 1
		    });
		  }	
		getScore(points * 15);
	}
	gameOver = () => {
	  const {resetGenerationState, grid} = this.props;
	  let gridCopy = [...grid]
	  if(this.state.valueBeforeSnake == 1){
		  clearInterval(this.intervalVar);
		   this.setState({
		      snake: [],
			  snakeSize: 1,
			  valueBeforeSnake: 0
		  });
		  resetGenerationState();
	  }
	}
	pause = () => {
		const {gameIsPaused} = this.state;
		this.setState({
				gameIsPaused: !gameIsPaused
			});
		if(gameIsPaused==false){
			clearInterval(this.intervalVar);
		}
		else{
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		}
	}
	manageSnake = (coord) => {
		this.createSnakeBody(coord);
		this.putSnakeOnGrid(coord);
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
		getNextGrid(myGrid);
	}
	createSnakeBody = (coord) => {
		  this.setState({
			  snake: [...this.state.snake, coord]
		  });
	}
	giveDirection =()=>{
		const {snakeDirection, grid, snakePosition, getNewSnakePosition} = this.props;
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
		  this.setState({
			  valueBeforeSnake: grid[coord[0]][coord[1]]
		  })
		  this.gameOver();
		  this.snakeAtesTheFood();
		  this.manageSnake(coord);
		  getNewSnakePosition(coord);
		}		  
	}
	componentDidMount(){
		  this.intervalVar = setInterval(this.giveDirection.bind(this), 300);
	}
	componentWillUnmount(){
	   clearInterval(this.intervalVar)	
	}

	render(){
	  return( 
	    <div>
		  <button onClick={this.pause}>pause</button>
		</div>
	  );
	}
} 

export default Grid;