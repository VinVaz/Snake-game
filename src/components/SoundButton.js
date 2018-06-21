import React from "react";

const buttonStyle = {
	width: '80%',
	height: '5vmin',
	margin: '1vmin auto',
	border: 'none',
	borderRadius: '15px',
	color: '#fff',
	backgroundColor: '#444303',
	cursor: 'pointer',
	fontSize: '2.2vmin'
}

const SoundButton = (props) => {
  const {label} = props;
	return(
	<div>
      <button style={buttonStyle}>SOUND</button>
	</div>
    )
}
	

export default SoundButton;