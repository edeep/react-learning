import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [{ name: "pradeep", power: "12" }, { name: "esha", power: "100" }]
  };

  render() {
    return (
      <div className="App">
        <p >
          React app Begins!!
        </p>
        <Person name={this.state.person[0].name}> Eat well </Person>
        <Person name={this.state.person[1].name}> play well </Person>
      </div>
    );
  }
}

export default App;
