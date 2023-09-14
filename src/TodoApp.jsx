import { useEffect, useState } from 'react';


export default function TodoApp() {
  const [todos, setTodos] = useState( () => {
    return  JSON.parse(localStorage.getItem('todos')) || []
  })
  const [newTodo, setNewTodo] = useState('')

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos) )
  }, [todos])

const handleAddTodo = () =>{
  if ( newTodo.trim() === "") return
  setTodos([...todos, newTodo])
  setNewTodo('')
}

const handleRemoveTodo = ( index) => {
  const updateTodos = todos.filter( (_, i) => i !== index)
  setTodos(updateTodos)
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