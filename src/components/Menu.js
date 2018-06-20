import React, {Component} from "react";
import Generation from "./Generation.js";
import Button from "./Button.js"
import StartButton from "./StartButton.js"

const MenuContainerStyle = {
	backgroundColor: 'black',
	height: '60vmin',
	width: '80%',
	margin: '10% auto',
	padding: '10px',
	border: '8px solid #000',
	borderRadius: '8px',
	textAlign: 'center',
	backgroundColor: '#fff'
}

class Menu extends Component{
	render(){
	  const {score, handleStart} = this.props;
	  return(
        <div style={MenuContainerStyle}>
		 <h3>SNAKE</h3>
         <p>Score:{ " " + score}</p>
		 <Button label={'SOUND'}/>
		 <StartButton handleStart={handleStart}/>
		 <Button label={'PAUSE'}/>
	    </div>
	  );	
	}
} 

export default Menu;