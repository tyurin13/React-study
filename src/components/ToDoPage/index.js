import AddToDo from "../AddToDo";
import ToDoList from "../ToDoList";
import VisibilityFilters from "../VisibilityFilters";
import "./styles.css";

const ToDoPage = () => {
  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <AddToDo />
      <ToDoList />
      <VisibilityFilters />
    </div>
  );
}

export default ToDoPage