import { useState } from "react";

const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = ()=>{
        if (newTodo.trim()==='') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }
    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
      };
    return(
        <div>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add ToDo</button>
            {todos.length === 0 ? (''):(<ul>
                {todos.map((todo, index)=>(
                    <li key={index}>{todo} <button className="remove" onClick={()=>handleRemoveTodo(index)}>Remove</button></li>
                ))}
            </ul>)}
        </div>
    );
}

export default TodoList;