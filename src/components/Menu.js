import React, {Component} from "react";
import Generation from "./Generation.js";
import SoundButton from "./SoundButton.js"
import StartButton from "./StartButton.js"
import PauseButton from "./PauseButton.js"

const MenuContainerStyle = {
	backgroundColor: 'black',
	height: '60vmin',
	margin: '14% auto',
	padding: '4%',
	border: '1.4vmin solid #000',
	borderRadius: '1.4vmin',
	textAlign: 'center',
	position: 'relative',
	backgroundColor: '#fefefe'
}
const h1Style = {
	fontSize: '5.5vmin'
}
const pStyle = {
	fontSize: '2.7vmin'
}

class Menu extends Component{
	render(){
	  const {score, pauseGame, startGame, gameIsPaused} = this.props;
	  return(
        <div style={MenuContainerStyle}>
		  <h1 style={h1Style}>SNAKE</h1>
          <p style={pStyle}>SCORE:{ " " + score}</p>
		  <SoundButton label={'SOUND'}/>
		  <StartButton startGame={startGame}/>
		  <PauseButton pauseGame={pauseGame} gameIsPaused={gameIsPaused}/>
	    </div>
	  );	
	}
} 

export default Menu;