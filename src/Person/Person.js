import React from 'react';
import './Person.css';

var person = (props)=>{
  return (
    <div className="Person">
    <p onClick={props.click}> I am the person - {props.name} </p>
    <p> What I say is - {props.children} </p>
    <input type="text" onChange={props.changename}/>
    </div>
  );
}

export default person;