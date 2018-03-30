import { combineReducers } from 'redux'

import user from './user'
import locations from './locations'
import categories from './categories'

export default combineReducers({ user, locations, categories })