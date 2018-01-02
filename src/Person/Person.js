import React from 'react';

var person = (props)=>{
  return (
    <div>
    <p> I am the person - {props.name} </p>
    <p> What I say is - {props.children} </p>
    </div>
  );
}

export default person;