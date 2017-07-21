import React from 'react';

export default (props) => {
  return <div onClick={props.onClick}>
    {props.child}
    
    {props.list.map(i=>{
      return <h3>Repo: {i.name}</h3>
    })}

  </div>;
}
