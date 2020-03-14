import thunk from 'redux-thunk'
import buildings from './buildings'
import { applyMiddleware, createStore, combineReducers } from 'redux'

const root = combineReducers({ buildings })

const middleware = [thunk]

if (process.env.REACT_APP_ENV === 'dev') {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

const store = createStore(
  root,
  applyMiddleware(...middleware)
)

export default store