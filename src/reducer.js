import { combineReducers } from 'redux'
import filterReducer from './IndividualView/Filter/filterReducer'
import activityReducer from './IndividualView/ActivityView/activityReducer'

const rootReducer = combineReducers({
    filters: filterReducer,
    activities: activityReducer
})

export default rootReducer