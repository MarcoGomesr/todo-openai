import { createContext, useContext, useEffect, useReducer } from "react";

const TodoContext = createContext(null)

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

const todoReducer = (state, action) => {
  switch(action.type) {

    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload]}
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(( _, index) => index !== action.payload)
      }  
    default:
      return
  }
}

export const TodoProvider = ({ children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <TodoContext.Provider value={{ state, dispatch}} >
      { children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => {
  return useContext(TodoContext)
}