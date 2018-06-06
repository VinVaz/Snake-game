import React, {Component} from "react";
import Row from "./Row.js";

const GridStyle = {
	height: "400px",
	width: "400px",
	position: "relative"
}


class Grid extends Component{	
	generateRows = (grid) => {
		return grid.map((row, i) => {
			return <Row
              key={i}			
			  rowOfCells={row}
			  numberOfRows={grid.length}
			/>
		});
	}
	render(){
	  const {grid} = this.props;
	  return(
        <div style={GridStyle}>
			{this.generateRows(grid)}		
	    </div>
	  );	
	}
} 

export default Grid;