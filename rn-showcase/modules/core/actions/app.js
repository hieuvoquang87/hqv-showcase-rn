import * as ActionTypes from '../action-types'

export const setUserLoggedIn = () => {
  return {
    action: ActionTypes.SET_USER_LOGGED_IN,
    data: true
  }
}