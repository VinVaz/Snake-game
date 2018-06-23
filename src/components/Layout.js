import React, {Component} from "react";
import Grid from "./Grid.js";
import GameOver from "./GameOver.js";
import Menu from "./Menu.js";
import PropTypes from 'prop-types';

const ContainerStyle = {
	position: 'relative'
}
const MenuContainerStyle = {
	width: '20%',
	float: 'left',
} 
const GameContainerStyle = {
	float: 'right',
	width: '80%',
}
const GameBackgroundStyle = {
	margin: '5% 10%',
	width: '66vmin',
	hight: '66vmin',
	border: '1.4vmin solid #000',
	borderRadius: "1.4vmin",
	backgroundColor: '#fefefe',
	position: 'relative'
}

class Layout extends Component{	
    
	render(){
	  const {grid, score, pauseGame, startGame, gameOverSign, lastingScore, isGamePaused} = this.props;
	  return(
        <div style={ContainerStyle}>
		  <div style={MenuContainerStyle}>
		    <Menu 
			  score={score}
			  pauseGame={pauseGame}
			  startGame={startGame}
			  isGamePaused={isGamePaused}
			/>
		  </div>
		  <div style={GameContainerStyle}>
		    <div style={GameBackgroundStyle}>
			  <Grid grid={grid}/>
			  {gameOverSign && <GameOver lastingScore={lastingScore}/>}	
			</div>
		  </div>	
	    </div>
	  );	
	}
}
 
Layout.propTypes = {
  score: PropTypes.number,
  pauseGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  isGamePaused: PropTypes.bool.isRequired,
  gameOverSign: PropTypes.bool,
  lastingScore: PropTypes.number,
}

export default Layout;