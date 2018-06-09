import React, {Component} from "react";
import Generation from "./Generation.js";

const MenuContainerStyle = {
	margin: "0.1px",
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
	  return(
        <div style={MenuContainerStyle}>
         MENU:
		 level
	    </div>
	  );	
	}
} 

export default Menu;