import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../../redux/selectors";
import { VISIBILITY_FILTERS } from "../../constants/constants";
import ToDo from "../ToDo";

const ToDoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <ToDo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);


const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
}
  
export default connect(mapStateToProps)(ToDoList);
