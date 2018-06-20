import React, {Component} from "react";
import Grid from "./Grid.js";
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
	marginLeft: '2% 0% 2% 0%',
}
const GameBackgroundStyle = {
	margin: '5% 10%',
	width: '60vmin',
	hight: '60vmin',
	padding: '3vmin',
	border: '8px solid #000',
	borderRadius: "8px",
	backgroundColor: '#fefefe'
}


class Layout extends Component{	
    
	render(){
	  const {grid, score, pauseGame, startGame} = this.props;
	  return(
        <div style={ContainerStyle}>
		  <div style={MenuContainerStyle}>
		    <Menu 
			  score={score}
			  pauseGame={pauseGame}
			  startGame={startGame}
			/>
		  </div>
		  <div style={GameContainerStyle}>
		    <div style={GameBackgroundStyle}>
			    <Grid grid={grid}/>		
	        </div>
		  </div>	
	    </div>
	  );	
	}
} 

export default Layout;