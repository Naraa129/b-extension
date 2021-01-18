import { combineReducers } from 'redux'
import filterReducer from './Filter/filterReducer'
import activityReducer from './ActivityView/activityReducer'

const rootReducer = combineReducers({
    filters: filterReducer,
    activities: activityReducer
})

export default rootReducer