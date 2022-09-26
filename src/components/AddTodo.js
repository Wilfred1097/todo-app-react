import React from "react";

const AddTodo = ({onAdd}) => {
  return <div>
    <input type="text" style={{width:'100%',height:'30px'}}/>
    <button className="btn" style={{backgroundColor:'green'}} onClick={() => onAdd('Add Another')}>Save</button>
  </div>;
};

export default AddTodo;
