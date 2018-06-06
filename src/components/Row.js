import React, {Component} from "react";
import Cell from "./Cell.js";


class Row extends Component{ 
	getStyle = () => {
	  const {numberOfRows} = this.props; 
	  const myHeight = (100 / numberOfRows) + "%";
	  const rowStyle = {
	    height: myHeight,
	    width: "100%",
	    display: "block",
		position: "relative",
		left: "0px",
      }
	  return rowStyle;
	}
	generateCells = () => {
	    const {rowOfCells} = this.props;
		return rowOfCells.map((cell, j) => {
			return <Cell 
			  key={j}
			  state={cell}
			  numberOfColumns={rowOfCells.length}
			/>
		});
	}
	render(){
	  return(
        <div style={this.getStyle()}>
			{this.generateCells()}
		</div>
	  );	
	}
} 
export default Row;