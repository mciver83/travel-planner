import axios from 'axios'

const initialState = {
  data: [],
  currentLocation: {}
}

const GET_LOCATIONS = 'GET_LOCATIONS'
const CREATE_LOCATION = 'CREATE_LOCATION'
const DELETE_LOCATION = 'DELETE_LOCATION'
const SET_LOCATION = 'SET_LOCATION'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS + '_FULFILLED':
      return { data: action.payload.data }
    case CREATE_LOCATION + '_FULFILLED':
      return { data: action.payload.data }
    case DELETE_LOCATION + '_FULFILLED':
      return { data: action.payload.data }
    
    case SET_LOCATION:
      return { ...state, currentLocation: action.payload }
    default:
      return state;
  }
}

export function getLocations() {
  return {
    type: GET_LOCATIONS,
    payload: axios.get('/api/locations')
  }
}

export function createLocation(newLocation) {
  return {
    type: CREATE_LOCATION,
    payload: axios.post('/api/locations', newLocation)
  }
}

export function deleteLocation(id) {
  return {
    type: DELETE_LOCATION,
    payload: axios.delete(`/api/locations/${id}`)
  }
}

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: location
  }
}