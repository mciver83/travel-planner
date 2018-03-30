import axios from 'axios'

const initialState = {
  data: []
}

const GET_CATEGORIES = 'GET_CATEGORIES'
const CREATE_CATEGORY = 'CREATE_CATEGORY'
const DELETE_CATEGORY = 'DELETE_CATEGORY'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES + '_FULFILLED':
      return { data: action.payload.data }
    case CREATE_CATEGORY + '_FULFILLED':
      return { data: action.payload.data }
    case DELETE_CATEGORY + '_FULFILLED':
      return { data: action.payload.data }
    default:
      return state;
  }
}

export function getCategories(locationId) {
  return {
    type: GET_CATEGORIES,
    payload: axios.get(`/api/locations/${locationId}/categories`)
  }
}

export function createCategory(newCategory, locationId) {
  return {
    type: CREATE_CATEGORY,
    payload: axios.post(`/api/locations/${locationId}/categories`, newCategory)
  }
}

export function deleteCategory(locationId, category_id) {
  return {
    type: DELETE_CATEGORY,
    payload: axios.delete(`/api/locations/${locationId}/categories/${category_id}`)
  }
}