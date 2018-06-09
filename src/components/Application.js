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
	
	render(){
	  return(
        <div style={ContainerStyle}>
		  <div style={MenuContainerStyle}>
		    <Menu />
		  </div>
		  <div style={GameContainerStyle}>
		    <Game />
		  </div>		
	    </div>
	  );	
	}
} 

export default Application;