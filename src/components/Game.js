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
	handleClick = (event) => {
		let direction = '';
		switch(event.keyCode){
			case 39:
			  direction = 'RIGHT';
			  break;
			case 37:
			  direction = 'LEFT';
			  break;
			case 38:
			  direction = 'UP';
			  break;
			case 40:
			  direction = 'DOWN';
			  break;
			default: direction = '';  			
		}
		event.preventDefault();
		this.setState({
			   snakeDirection: direction 
			});
	}

	render(){
	  const {snakeDirection} = this.state;
	  return(
        <div style={GameBackgroundStyle} onKeyDown={this.handleClick} tabIndex="0">
          <Generation snakeDirection={snakeDirection}/>		
	    </div>
	  );	
	}
} 

export default Game;