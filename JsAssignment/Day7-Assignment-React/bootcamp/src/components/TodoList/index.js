import { useState } from "react";

const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = ()=>{
        if (newTodo.trim()==='') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }
    return(
        <div>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add ToDo</button>
            {todos.length === 0 ? (''):(<ul>
                {todos.map((todos, index)=>(
                    <li key={index}>{todos}</li>
                ))}
            </ul>)}
        </div>
    );
}

export default TodoList;