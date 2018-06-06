import React, {Component} from "react";

const SnakeCellStyle = {
	backgroundColor: "#f00",
	height: "100%",
	width: "100%",
	border: "1px solid #200"
}
const FoodCellStyle = {
	backgroundColor: "#0f0",
	height: "100%",
	width: "100%",
	border: "1px solid #200"
}
const BackgroundCellStyle = {
	backgroundColor: "#440304",
	height: "100%",
	width: "100%",
	border: "1px solid #200"
}

class Cell extends Component{
	
	getCellContainerStyle = () => {
	  const {numberOfColumns} = this.props;
      const myWidth = (100 / numberOfColumns) + "%";	  
	  const containerStyle = {
	    height: "100%",
	    width: myWidth,
	    display: "inline-block"
	  }
		return containerStyle 
	}
	
    setCellState = () => {
		const {state} = this.props;
		switch(state){
			case 1:
			  return <div style={SnakeCellStyle}></div>;
			case 2:
			  return <div style={FoodCellStyle}></div>;
			default:
			  return <div style={BackgroundCellStyle}></div>
		}
	}
	
	render(){
	  return(
        <div style={this.getCellContainerStyle()}>
			{this.setCellState()}
		</div>
	  );	
	}
} 
export default Cell;