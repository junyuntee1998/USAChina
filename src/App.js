import React, { Component } from 'react';
import './App.css';
import TextBox from './Textbox';
import States from './States';

class App extends Component {
  constructor(){
  super();
    this.state = {
      country: ''
    }
    
      this.handleChange = this.handleChange.bind(this);
  
  }
    handleChange(event) {
      this.setState({
        country: event.target.value
      });
    }
    render() {
    let usaStates = ["new york", "new jersey"];
    let chinaStates = ["shanghai", "beijing"];
      return (
      <form>
      First Name: <TextBox maxLength="100"/><br/>
     Last Name: <TextBox maxLength="50"/><br/>
      Email: <TextBox maxLength="30"/><br/>
      Country: <select  onChange={this.handleChange.bind(this)} value={this.state.country}>
      <option value="select" >Select</option>
   <option value="usa" >USA</option>
    <option value="china">China</option>
    
  </select><br/>
  
       {
                this.state.country === "usa" && 
                <States states={usaStates}/>
           }
    <h2>{this.state.country}</h2>
      <input type="submit" value="Submit" />
      </form>
      );
    }
  }

export default App;
