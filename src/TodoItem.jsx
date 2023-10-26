export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return < li >
        <label>
            <input className="check" type="checkbox" checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} />
            {title}
        </label>
        <button onClick={() => deleteTodo(id)} type="button">Delete  </button>
    </ li >
}