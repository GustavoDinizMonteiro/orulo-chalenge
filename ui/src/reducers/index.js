import thunk from 'redux-thunk'
import buildings from './buildings'
import favorites from './favorites'
import { applyMiddleware, createStore, combineReducers } from 'redux'

const root = combineReducers({ buildings, favorites })

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