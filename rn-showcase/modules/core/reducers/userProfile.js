import * as ActionTypes from '../action-types'

const userProfile = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_PROFILE:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default userProfile
