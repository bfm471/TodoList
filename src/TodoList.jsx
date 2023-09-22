import { useState } from "react";
import './TodoList.css';

function TodoList() {
    const [task, setTask] = useState({desc:'', date:''});
    const [todos, setTodos] = useState([]);

    const handleForm = (event) => {
        event.preventDefault();
        setTodos([...todos, task]);
        setTask({desc:'', date:''});
        document.getElementById("ip1").focus();
    }

    return (
        <div id="todolistApp">
            <div className="header">
                Simple Todolist
            </div>
            <fieldset>
                <legend>Add todo</legend>
                <form id="taskForm" onSubmit={handleForm}>
                    Date <input id="ip1" type="text" onChange={event => setTask({...task, date: event.target.value})} value={task.date} />
                    Descption <input type="text" onChange={event => setTask({...task, desc: event.target.value})} value={task.desc}></input>
                <input type="submit" value="Add task" />
                </form>
            </fieldset>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default TodoList;
