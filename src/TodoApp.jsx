import { useState } from 'react';
import { useTodoContext } from './context/Todo';


export default function TodoApp() {
  const { state, dispatch } = useTodoContext()
  const [newTodo, setNewTodo] = useState('')

const handleAddTodo = () =>{
  if ( newTodo.trim() === "") return
  // setTodos([...todos, newTodo])
  dispatch({type: "ADD_TODO", payload: newTodo})
  setNewTodo('')
}

const handleRemoveTodo = ( index) => {
  dispatch({type: "REMOVE_TODO", payload: index})
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder='New Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {state.todos.map( (todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)} >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}