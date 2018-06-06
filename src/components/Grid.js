import React, {Component} from "react";
import Snake from "./Snake.js";
import Food from "./Food.js";

class Grid extends Component{
    
	render(){
	  const {getNextGrid, grid} = this.props;
	  return( 
	    <div>
	  	  <Food grid={grid}/>
		  <Snake grid={grid}/>
	    </div>
	  );
	}
} 

export default Grid;