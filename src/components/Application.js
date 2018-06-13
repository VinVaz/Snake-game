import React, {Component} from "react";
import Game from "./Game.js";
import Menu from "./Menu.js";

const ContainerStyle = {
	width: '100%',
	position: 'relative',
	height: '90vh',
}
const MenuContainerStyle = {
	display: "inline-block",
	width: '20%',
	float: 'left',
	height: '100%'
} 
const GameContainerStyle = {
	display: "inline-block",
	float: 'right',
	width: '76%',
	height: '100%',
	marginLeft: '2% 0% 2% 0%'
}

class Application extends Component{
	state = {
		score: 0
	}
	getScore = (val) =>{
		this.setState({
			score: val
		});
	}
	render(){
	  const {score} = this.state;
	  const {setSnakeDirection, snakeDirection} = this.props;
	  return(
        <div style={ContainerStyle}>
		  <div style={MenuContainerStyle}>
		    <Menu score={score}/>
		  </div>
		  <div style={GameContainerStyle}>
		    <Game 
			  getScore={this.getScore}
			  setSnakeDirection={setSnakeDirection}
			  snakeDirection={snakeDirection}
			/>
		  </div>		
	    </div>
	  );	
	}
} 

export default Application;