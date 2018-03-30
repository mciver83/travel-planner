import { combineReducers } from 'redux'

import user from './user'
import locations from './locations'

export default combineReducers({ user, locations })