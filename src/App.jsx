import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO_ASYNC, REMOVE_TODO_ASYNC } from './types';


export default function App() {
  const dispatch = useDispatch()
  const todos = useSelector( (state) => state.todos)
  const [newTodo, setNewTodo] = useState('')
  


const handleAddTodo = () =>{
  if ( newTodo.trim() === "") return
  dispatch({type: ADD_TODO_ASYNC, payload: newTodo})
  setNewTodo('')
}

const handleRemoveTodo = ( index) => {
  dispatch({type: REMOVE_TODO_ASYNC, payload: index})
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder='New Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map( (todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)} >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}