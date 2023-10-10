import { useState } from "react";
import './TodoList.css';
import TodoTable from "./TodoTable";

function TodoList() {
    const [task, setTask] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const handleForm = (event) => {
        event.preventDefault();
        setTodos([...todos, task]);
        setTask({ desc: '', date: '' });
        document.getElementById("ip1").focus();
    }

    const deleteTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index)); //kun parametria ei aiota käyttää, sen voi mielellään merkitä "_"
    }

    return (
        <div id="todolistApp">
            <div className="header">
                Simple Todolist
            </div>
            <fieldset>
                <legend>Add todo</legend>
                <form onSubmit={handleForm}>
                    Date <input id="ip1" type="text" onChange={event => setTask({ ...task, date: event.target.value })} value={task.date} />
                    Description <input type="text" onChange={event => setTask({ ...task, desc: event.target.value })} value={task.desc} />
                    <input type="submit" value="Add task" />
                </form>
            </fieldset>
            <TodoTable todos={todos} deleteTask={deleteTask} />
        </div>
    )

}
export default TodoList;
