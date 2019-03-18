import React, { Component } from 'react';


class States extends Component {
	render(){
  const stateInfo = this.props.states;
  	return(
    	<div>
State: <select>
 <option>{stateInfo[0]}</option>
  <option>{stateInfo[1]}</option>
  
</select>
    	</div>
    );
  }
}

export default States;