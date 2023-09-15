import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "./types";

const initialState = {
  todos: JSON.parse( localStorage.getItem('todos')) || []
}

const todoReducer = ( state = initialState, action ) => {
  switch( action.type) {
    case ADD_TODO :
      const newTodos = [...state.todos, action.payload]
      localStorage.setItem('todos', JSON.stringify(newTodos))

      return {
        ...state,
        todos: newTodos
      }
    case REMOVE_TODO :
      const updatedTodos =  state.todos.filter(( _, index) => index !== action.payload)
      localStorage.setItem('todos', JSON.stringify(updatedTodos))

      return {
        ...state,
        todos: updatedTodos
      }

      default:
        return state
  }
}

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer