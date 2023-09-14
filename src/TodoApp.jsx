import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/actions';


export default function TodoApp() {
  const dispatch = useDispatch()
  const todos = useSelector( (state) => state.todos)
  const [newTodo, setNewTodo] = useState('')


const handleAddTodo = () =>{
  if ( newTodo.trim() === "") return
  dispatch( addTodo(newTodo))
  setNewTodo('')
}

const handleRemoveTodo = ( index) => {
  dispatch(removeTodo(index))
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