// the ROOT Reducer
import { combineReducers } from 'redux'

// import all your reducers
import people from './people'

const rootReducer = combineReducers({people})

export default rootReducer
