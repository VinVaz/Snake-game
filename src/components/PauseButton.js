import React from "react";

const buttonStyle = {
	width: '80%',
	height: '30px',
	margin: '5px auto 5px auto',
	border: '5px solid #000',
	borderRadius: '15px',
	color: '#000',
	backgroundColor: '#fff',
	cursor: 'pointer'
}

const Button = (props) => {
    const {pauseGame} = props;
	return(
	<div>
      <button style={buttonStyle} onClick={()=>( pauseGame() )}>PAUSE</button>
	</div>
    )
}
	

export default Button;