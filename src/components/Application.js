import React, {Component} from "react";
import Generation from "./Generation.js";

class Application extends Component{
	
	handleDirections = (event) => {
		const {setSnakeDirection, snakeDirection} = this.props;
		const oldDirection = snakeDirection;
		let direction = oldDirection;
		switch(event.keyCode){
			case 39:
			  if(oldDirection === 'LEFT') break;
			  direction = 'RIGHT';
			  break;
			case 37:
			  if(oldDirection === 'RIGHT') break;
			  direction = 'LEFT';
			  break;
			case 38:
			  if(oldDirection === 'DOWN') break;
			  direction = 'UP';
			  break;
			case 40:
			  if(oldDirection === 'UP') break;
			  direction = 'DOWN';
			  break;
			default: 
			  break;  			
		}
		setSnakeDirection(direction)
		event.preventDefault();
	}
	componentDidMount(){
		document.querySelector('body').style.backgroundColor = '#9ab4b3';
	}
	render(){
	  const {snakeDirection} = this.props;
	  return(
	    <div onKeyDown={this.handleDirections} tabIndex="0">
          <Generation 
		    snakeDirection={snakeDirection}
		  />
	    </div>
	  );	
	}
} 

export default Application;