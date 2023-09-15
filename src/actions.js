import { ADD_TODO_ASYNC, REMOVE_TODO_ASYNC } from "./types";

export const addTodo = (text) =>({
  type: ADD_TODO_ASYNC,
  payload: text
})

export const removeTodo = (index) => ({
  type: REMOVE_TODO_ASYNC,
  payload: index
})