function TodoTable({ todos, deleteTask }) {

    return (
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
                        <td><button onClick={() => deleteTask(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable;
