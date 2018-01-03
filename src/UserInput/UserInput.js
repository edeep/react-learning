import React from 'react';

var userinputcomponent = (props)=>{
  return (
    <div>
    Input Name here : <input type="text" value={props.name}  onChange={props.changename}/>
    </div>
    );
}

export default userinputcomponent;