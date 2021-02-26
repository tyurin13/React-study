import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/index";

const AddToDo = (props) => {

  const [input, setInput] = useState('');

  const updateInput = (input) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    props.addTodo(input);
    setInput('');
  };

  return (
    <div>
      <input
        onChange={event => updateInput(event.target.value)}
        value={input}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Task
        </button>
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(AddToDo);