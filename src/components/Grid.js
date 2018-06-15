import React, {Component} from "react";
import Bite from "../sound/bite.mp3"



let count = 0;

var newItemSound = new Audio(Bite);
class Grid extends Component{
	state ={
		  snake: [],
		  snakeSize: 1,
		  valueBeforeSnake: 0,
		  points: 0,
		  gameIsPaused: true
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
	  const {resetGenerationState, grid, isGameOver} = this.props;
	  let gridCopy = [...grid]
	  if(this.state.valueBeforeSnake == 1 ){
		   resetGenerationState();
		   this.setState({
		      snake: [],
			  snakeSize: 1,
			  valueBeforeSnake: 0,
			  points: 0
		  });
		  count = 0;
	  }
	}
	pause = () => {
		const {gameIsPaused} = this.state;
		this.setState({
				gameIsPaused: !gameIsPaused
			});
		if(gameIsPaused == false){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		} else{
			clearInterval(this.intervalVar);
		}
	}
	timeController = () => {
		const {isGameOver} = this.props;
        if(isGameOver == false){
			this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
		} else{
			clearInterval(this.intervalVar);
		}		
	}

	
	giveDirection =()=>{
		const {snakeDirection, grid, snakePosition, getNewSnakePosition} = this.props;
		const height = grid.length;
		const width = grid[0].length;
		let coord = [...snakePosition];
		if(coord.length>0 && this.props.isGameOver==false){
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
		} else {
			coord = [];
		}	
	getNewSnakePosition(coord);
	}
    componentDidMount(){
		//this.timeController();
		this.intervalVar = setInterval(this.giveDirection.bind(this), 300)
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