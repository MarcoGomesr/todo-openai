import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import { watchAddTodo, watchRemoveTodo } from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore( rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAddTodo)
sagaMiddleware.run(watchRemoveTodo)

export default store