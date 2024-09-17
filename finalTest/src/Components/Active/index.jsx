import { useState } from "react"
import './style.css'

const Active = () => {
    const listTodos = JSON.parse(localStorage.getItem('listTodos') || '[]')
    const activeTodos = listTodos.filter((item) => !(item.completed))
    const [newTodo, setNewTodo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTodo) return
        listTodos.push({
            id: listTodos.length + 1,
            title: newTodo,
            completed: false
        })
        setNewTodo('')
        localStorage.setItem('listTodos', JSON.stringify(listTodos))
    }

    return (
        <div className="active">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add details"
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            <div className='list'>
                {activeTodos.map((item) => {
                    return <div className='item'>
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

export default Active