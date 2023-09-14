import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TODO, ADD_TODO_ASYNC, REMOVE_TODO, REMOVE_TODO_ASYNC } from './types'

function* addTodoAsync (action) {
  yield put({ type: ADD_TODO, payload: action.payload})
}

function* removeTodoAsync (action) {
  yield put({type: REMOVE_TODO, payload: action.payload})
}

export function* watchAddTodo () {
  yield takeEvery(ADD_TODO_ASYNC, addTodoAsync)
}

export function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO_ASYNC, removeTodoAsync)
}