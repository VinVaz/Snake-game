

export default class GridArray{
	constructor(width, height){
	  this.width = width;
      this.height = height;	  
	}
	
	create(){
      let myArray = [];
      for(let i=0; i<this.height; i++){
	    myArray[i] = [];
	    for(let j=0; j<this.width; j++){
	      myArray[i][j] = 0;
        }
      }
      return myArray;  
    }
	
	calculateRandomCoordinates(){
	  const i = Math.floor(Math.random()* this.height);
	  const j = Math.floor(Math.random()* this.width);
	  return [i, j];
    }
	
	get randomCoordinates(){
		return this.calculateRandomCoordinates();
	}	
}
