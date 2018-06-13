import React, {Component} from "react";
import Generation from "./Generation.js";
import Button from "./Button.js"

const MenuContainerStyle = {
	backgroundColor: 'black',
	height: '60vmin',
	width: '80%',
	margin: '10% auto',
	padding: '10px',
	border: '8px solid #000',
	borderRadius: '8px',
	backgroundColor: '#fff'
}

class Menu extends Component{
	
	render(){
	  const {score} = this.props;
	  return(
        <div style={MenuContainerStyle}>
		 <h3>SNAKE</h3>
         <p>Score:{ " " + score}</p>
		 <Button />
		 <Button />
		 <Button />
	    </div>
	  );	
	}
} 

export default Menu;