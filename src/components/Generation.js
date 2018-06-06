import React, {Component} from "react";
import Grid from "./Grid.js";
import NextGeneration from "./NextGeneration.js";


function arrayGenerator(){
  const width = 50, height = 50;
  let myArray = [];
  
  for(let i=0; i<height; i++){
	myArray[i] = [];
	for(let j=0; j<width; j++){
	  myArray[i][j] = Math.floor(Math.random()*2);
    }
  }
  return myArray;  
}

class Generation extends Component{
    state = {
		grid: arrayGenerator()
	}
	getNextGrid = (nextGrid) => {
		this.setState({
			grid: nextGrid
		});
	}
	render(){
	  const {grid} = this.state;
	  return(
        <div>
		  <NextGeneration 
		    grid={grid}
			getNextGrid={this.getNextGrid}
		  />
          <Grid grid={grid}/>		
	    </div>
	  );	
	}
} 

export default Generation;