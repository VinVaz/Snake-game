import React from "react";

const buttonStyle = {
	width: '80%',
	height: '5vmin',
	margin: '1vmin auto',
	border: '0.8vmin solid #000',
	borderRadius: '15px',
	color: '#000',
	backgroundColor: '#fff',
	cursor: 'pointer',
	fontSize: '2.2vmin'
}

const Button = (props) => {
    const {startGame} = props;
	return(
	<div>
      <button style={buttonStyle} onClick={()=>( startGame() )}>START</button>
	</div>
    )
}
	

export default Button;