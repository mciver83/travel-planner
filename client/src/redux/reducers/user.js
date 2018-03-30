import axios from 'axios'

const initialState = {
  id: null,
  email: null,
  name: null
}

const GET_USER_INFO = 'GET_USER_INFO'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO + '_FULFILLED':
      return { ...state, ...action.payload.data }
    default:
      return state
  }
}

export function getUserInfo() {
  return {
    type: GET_USER_INFO,
    payload: axios.get('/auth/me')
  }
}

