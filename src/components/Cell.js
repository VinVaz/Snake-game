import React, {Component} from "react";

const AliveCellStyle = {
	backgroundColor: "#f00",
	height: "100%",
	width: "100%",
	border: "1px solid #200"
}
const DeadCellStyle = {
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
		if(state){
		  return(
		    <div style={AliveCellStyle}></div>
		  );
		} else { 
		  return(
		    <div style={DeadCellStyle}></div>
		  );
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