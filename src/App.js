import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInputComponent from './UserInput/UserInput';
import UserOutputComponent from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName:['spiderman','wonder woman','hulk'],
    showComponents:false
  };

  
  changeName = (event) => {
    this.setState({
      userName: [event.target.value, event.target.value]
    });

  };

  toggleComponents = ()=>{
    this.setState({ showComponents: !this.state.showComponents});
  }

  deleteComponent = (compIndex)=>{
  const tempUserName = [...this.state.userName];
  tempUserName.splice(compIndex,1);
  this.setState({ userName: tempUserName });

  //let person = tempUserName[compIndex];
  


  console.log('Delete component' + compIndex);
  }

  render() {
    const divStyle = {
      color: 'blue',
      border: '1px solid pink',
      margin: 'auto',
      width: '60 %',
      padding: '16px'
    };

   var mycomponents = null;
   if(this.state.showComponents){
     mycomponents =(
       <div>
       <UserInputComponent name={this.state.userName[0]} changename={this.changeName} />
      {this.state.userName.map((oneUsername, index)=>{
           return <UserOutputComponent key={oneUsername.userName} 
           click={()=>{this.deleteComponent(index)}}
           name={oneUsername.userName}> Component {index}</UserOutputComponent>;
      })}
      
       </div>
     );
   }

      
    return (
      <div style={divStyle} className="App">
        <p >
          React app Begins!!
          
        </p>
        <button onClick={this.toggleComponents}>Toggle components</button>
        {mycomponents}
      </div>
    );
  }
}

export default App;
