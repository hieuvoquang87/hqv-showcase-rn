import * as ActionTypes from '../action-types'

const app = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: action.data
      }
    default:
      return state
  }
}

export default app
