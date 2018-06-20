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
    
	handleDirections = (event) => {
		const {setSnakeDirection, snakeDirection} = this.props;
		const oldDirection = snakeDirection;
		let direction = oldDirection;
		switch(event.keyCode){
			case 39:
			  if(oldDirection == 'LEFT') break;
			  direction = 'RIGHT';
			  break;
			case 37:
			  if(oldDirection == 'RIGHT') break;
			  direction = 'LEFT';
			  break;
			case 38:
			  if(oldDirection == 'DOWN') break;
			  direction = 'UP';
			  break;
			case 40:
			  if(oldDirection == 'UP') break;
			  direction = 'DOWN';
			  break;
			default: 
			  break;  			
		}
		setSnakeDirection(direction)
		event.preventDefault();
	}
	
	render(){
	  const {getScore, snakeDirection} = this.props;
	  return(
        <div style={GameBackgroundStyle} onKeyDown={this.handleDirections} tabIndex="0">
          <Generation
		    snakeDirection={snakeDirection} 
			getScore={getScore}
		  />		
	    </div>
	  );	
	}
} 

export default Game;