import { useState } from "react"
import './style.css'

const All = () => {
    const listTodos = JSON.parse(localStorage.getItem('listTodos') || '[]')
    const [newTodo, setNewTodo] = useState('')

    const [todos, setTodos] = useState(listTodos)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTodo) return
        todos.push({
            id: todos.length + 1,
            title: newTodo,
            completed: false
        })
        setNewTodo('')
        localStorage.setItem('listTodos', JSON.stringify(listTodos))
    }

    const handleToggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !(todo.completed) } : todo))
        console.log(todos);
        localStorage.setItem('listTodos', JSON.stringify(todos))
    }
    
    return (
        <div className="all">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add details"
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <div className='list'>
                {todos.map((item) => {
                    return <div className='item' key={item.id}>
                        <input type="checkbox" checked={item.completed} onChange={() => handleToggleComplete(item.id)}/>
                        {item.completed
                        ? <del>{item.title}</del>
                        : <p>{item.title}</p>}
                    </div>
                })}
            </div>
        </div>
    )
}

export default All