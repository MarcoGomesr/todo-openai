import { createStore } from "redux";
import rootReducer from './redux/reducer';

// Load the initial state from local storage if it exists
const initialState = JSON.parse( localStorage.getItem('reduxState')) || []
const store = createStore(rootReducer, initialState)

//subscribe changes in the redux store an update local storage
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('reduxState', JSON.stringify(state))
})



export default store;