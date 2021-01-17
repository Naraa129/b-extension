import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { compose } from 'redux'

const composedEnhancer = compose(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer, composedEnhancer)

export default store
