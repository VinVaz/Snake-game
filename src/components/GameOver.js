import React, {Component} from "react";

const GameOverStyle = {
	height: "100%",
	width: "100%",
	textAlign: 'center',
	margin: 'auto',
	padding: '1px',
	backgroundColor: 'black',
	filter: 'opacity(60%)',
	position: 'absolute',
	top: '0px',
	left: '0px',
	zIndex: '0'
}
const textStyle = {
	color: '#fff',
	margin: 'auto',
	position: 'relative',
	top: '40%'
}
const scoreStyle = {
	color: '#fff',
	margin: 'auto',
	position: 'relative',
	top: '45%'
}

const GameOver = (props) => {	
	  return(
        <div style={GameOverStyle}>
	      <h1 style={textStyle}>{'GAME OVER!'}</h1>
		  <br />
		  <p style={scoreStyle}>{'SCORE: ' + props.lastScore}</p>
	    </div>
	  );	

} 
export default  GameOver;