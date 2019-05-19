import { combineReducers } from 'redux'

import {
  loginReducer,
  slidesReducer
} from './reducers'

const rootReducer = combineReducers({
  loginDetails: loginReducer,
  slideSelectionDetails:slidesReducer
})

export default rootReducer;