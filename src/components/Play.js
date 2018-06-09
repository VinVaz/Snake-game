import React, {Component} from "react";
import Generation from "./Generation.js";

const ApplicationStyle = {
	margin: "0.1px",
}

class Application extends Component{
	
	render(){
	  return(
        <div style={ApplicationStyle}>
          <Generation />		
	    </div>
	  );	
	}
} 

export default Application;