import React from "react";

const buttonStyle = {
	width: '80%',
	height: '30px',
	margin: '5px auto 5px auto',
	border: 'none',
	borderRadius: '15px',
	color: '#fff',
	backgroundColor: '#444303',
	cursor: 'pointer'
}

const Button = (props) => {
  const {label} = props;
	return(
	<div>
      <button style={buttonStyle}>{label}</button>
	</div>
    )
}
	

export default Button;