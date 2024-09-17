import { useState } from "react"
import IconTrash from '/public/IconTrash'
import './style.css'

const Completed = () => {
    const listTodos = JSON.parse(localStorage.getItem('listTodos') || '[]')
    const completedTodos = listTodos.filter((item) => (item.completed))
    const [todos, setTodos] = useState(listTodos)

    const handleDelete = (id) => {
        const updated = todos.filter((item) => item.id !== id)
        setTodos(updated)
        localStorage.setItem('listTodos', JSON.stringify(updated))
    }

    const handleDeleteAll = () => {
        const updatedAll = todos.filter((item) => !(item.completed))
        setTodos(updatedAll)
        localStorage.setItem('listTodos', JSON.stringify(updatedAll))
    }

    return (
        <div className="completed">
            <div className='list'>
                {completedTodos.map((item) => {
                    return <div className='item' key={item.id}>
                        <input type="checkbox" checked={item.completed}/>
                        <del>{item.title}</del>
                        <div className='icon' onClick={() => handleDelete(item.id)}><IconTrash/></div>
                    </div>
                })}
            </div>
            <button onClick={() => handleDeleteAll()}>
                <IconTrash />
                <p>delete all</p>
            </button>
        </div>
    )
}

export default Completed