import React, {Component} from "react";
import Generation from "./Generation.js";

const GameBackgroundStyle = {
	margin: '5% 10%',
	width: '60vmin',
	hight: '60vmin',
	padding: '3vmin',
	border: '8px solid #000',
	borderRadius: "8px",
}

class Game extends Component{	
    state = {
		snakeDirection: ""
	}
	handleDirections = (event) => {
		const currentDirection = this.state.snakeDirection;
		let direction = currentDirection;
		switch(event.keyCode){
			case 39:
			  if(currentDirection == 'LEFT') break;
			  direction = 'RIGHT';
			  break;
			case 37:
			  if(currentDirection == 'RIGHT') break;
			  direction = 'LEFT';
			  break;
			case 38:
			  if(currentDirection == 'DOWN') break;
			  direction = 'UP';
			  break;
			case 40:
			  if(currentDirection == 'UP') break;
			  direction = 'DOWN';
			  break;
			default: 
			  break;  			
		}
		event.preventDefault();
	
		this.setState({
			   snakeDirection: direction 
			});
	}
	getSnakeDirection = (direction) => {
		this.setState({
			   snakeDirection: direction 
			});
	}
	render(){
	  const {snakeDirection} = this.state;
	  return(
        <div style={GameBackgroundStyle} onKeyDown={this.handleDirections} tabIndex="0">
          <Generation snakeDirection={snakeDirection} getSnakeDirection={this.getSnakeDirection}/>		
	    </div>
	  );	
	}
} 

export default Game;