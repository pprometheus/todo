import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="item">New Item</label>

            <input type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                id=" item" />

            <button type="submit">Add</button>
        </form >

    )
}