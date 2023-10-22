import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      }
      ]
    })


    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>

        <input type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          id=" item" />

        <button type="submit">Add</button>
      </form >

      <h1>Todo List</h1>
      <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} type="button">Delete  </button>
          </li>
        })}

      </ul >
    </>
  )
}