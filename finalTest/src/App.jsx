import { Routes, Route, NavLink } from "react-router-dom"
import All from './Components/All'
import Active from './Components/Active'
import Completed from './Components/Completed'
import './App.css'

function App() {
    const activeClass = (params) => {
        return params.isActive ? "activeLink link" : "link"
    }
    return (
        <div className="container">
            <h1>#todo</h1>
            <div className="menu">
                <NavLink to="/" className={activeClass}>All</NavLink>
                <NavLink to="/active" className={activeClass}>Active</NavLink>
                <NavLink to="/completed" className={activeClass}>Completed</NavLink>
            </div>
            <Routes>
                <Route path="/" element={<All />}/>
                <Route path="/active" element={<Active />}/>
                <Route path="/completed" element={<Completed />}/>
            </Routes>
        </div>
    )
}

export default App
