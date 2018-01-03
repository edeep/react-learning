import React from 'react';
import './UserOutput.css';

var userOutputComponent = (props)=>{
  return(
    <div onClick ={props.click} className="UserOutputBox">
      <p> User Output component of {props.name}</p>
      <p> {props.children}</p>
    </div>
  );

}

export default userOutputComponent;