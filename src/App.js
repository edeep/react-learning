import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [{ name: "pradeep", power: "12" }, { name: "esha", power: "100" }]
  };

  showPower = (newName)=>{
   this.setState({
     person: [{ name: newName, power: "12" }, { name: "eshaUpdated", power: "100" }]
   });

  };

  changeName = (event) => {
    this.setState({
      person: [{ name: event.target.value, power: "12" }, { name: "eshaUpdated", power: "100" }]
    });

  };

  render() {
    return (
      <div className="App">
        <p >
          React app Begins!!
        </p>
         <button onClick={()=>this.showPower('Batman')}> Show Power</button>
        <Person changename={this.changeName} name={this.state.person[0].name}> Eat well </Person>
        <Person click={this.showPower.bind(this, 'Superman')}  name={this.state.person[1].name}> 
        play well </Person>
        <Person 
        name={this.state.person[0].name}> Sleep well </Person>
      </div>
    );
  }
}

export default App;
