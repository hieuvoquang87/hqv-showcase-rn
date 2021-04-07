import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import baseState from './baseState'

const configureStore = (initialData) => {
  const preloadedState = {
    ...baseState,
    ...initialData
  }
  const middlewares = [thunk]
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
}

const store = configureStore()

export default store