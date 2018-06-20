import React, {Component} from "react";
import Generation from "./Generation.js";
import Button from "./Button.js"
import StartButton from "./StartButton.js"
import PauseButton from "./PauseButton.js"

const MenuContainerStyle = {
	backgroundColor: 'black',
	height: '60vmin',
	width: '80%',
	margin: '10% auto',
	padding: '10px',
	border: '8px solid #000',
	borderRadius: '8px',
	textAlign: 'center',
	backgroundColor: '#fefefe'
}

class Menu extends Component{
	render(){
	  const {score, pauseGame, startGame} = this.props;
	  return(
        <div style={MenuContainerStyle}>
		  <h3>SNAKE</h3>
          <p>Score:{ " " + score}</p>
		  <Button label={'SOUND'}/>
		  <StartButton startGame={startGame}/>
		  <PauseButton pauseGame={pauseGame}/>
	    </div>
	  );	
	}
} 

export default Menu;