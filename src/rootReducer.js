import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "./types";



const todoReducer = ( state = [], action ) => {
  switch( action.type) {
    case ADD_TODO :
      return [...state, action.payload]
    case REMOVE_TODO :
      return state.filter(( _, index) => index !== action.payload)
      default:
        return state
  }
}

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer