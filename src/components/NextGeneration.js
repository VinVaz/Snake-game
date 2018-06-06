import React, {Component} from "react";
import Handler from "./Handler.js";

class NextGeneration extends Component{
	state={
		lastGeneration: this.props.grid,
		nextGeneration: []
	}
	showNextGeneration = () => {
		const {getNextGrid} = this.props;
		const {nextGeneration, lastGeneration} = this.state;
		this.setState({
		  lastGeneration: nextGeneration,
		  nextGeneration: []
		});
		getNextGrid(nextGeneration);
	}
	updateGrid = (val, i, j) => {
		const {nextGeneration} = this.state;
			nextGeneration[i][j] = val;
	}
	
	componentDidMount(){
		let myVar = setInterval(this.showNextGeneration.bind(this), 300)
	}
	
	calculateEach = () => {
		const {nextGeneration, lastGeneration} = this.state;
		return lastGeneration.map((row, i) => {
		  nextGeneration[i] = []
		  return row.map((val, j) => {
			return <Handler 
			  key={("r"+i+"c"+j)}
			  cellValue={val} 
			  jIndex={j} 
			  iIndex={i} 
			  updateGrid={this.updateGrid}
              grid={lastGeneration}
			/>
		  });	
		});
	}
	
	render(){
	  return(
        <div>
		  {this.calculateEach()}		  
	    </div>
	  );	
	}
} 

export default NextGeneration;