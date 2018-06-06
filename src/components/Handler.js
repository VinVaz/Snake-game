import React, {Component} from "react";

class Handler extends Component{
    

	sumOfNeighbours = () => {
		const {grid, jIndex, iIndex} = this.props;
		const i = iIndex, j = jIndex;
		  let sum = 0;
		  for(let x = -1; x < 2; x++){
			for(let y = -1; y < 2; y++){
				//it checks if none of the indexes are less than zero 
				//or greater than the array's length 
				if(
				  ((i+x) >= 0 && (i+x) < grid.length )&&
				  ((j+y) >= 0 && (j+y) < grid[i].length)&&
                  (x!=0 || y!=0)				  
				){
				  sum += grid[i+x][j+y];
				}
		    } 
		  }
		return sum;
	}
	
	render(){
        const {cellValue, iIndex, jIndex, updateGrid} = this.props;
		let newCellValue = 0; 
        let sumOfNeighbours = this.sumOfNeighbours();
		
		if(sumOfNeighbours<2){
			newCellValue = 0;
		}
		else if(sumOfNeighbours==3){
			newCellValue = 1;
		}
		else if(sumOfNeighbours>3){
			newCellValue = 0;
		}
		else{
			newCellValue = cellValue;
		}
		updateGrid(newCellValue, iIndex, jIndex);	
	  
	  return <div></div>;
	}
} 

export default Handler;