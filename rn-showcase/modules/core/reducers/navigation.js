import * as ActionTypes from '../action-types'

const navigation = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_NAVIGATION_SCREEN:
      return {
        ...state,
        currentScreen: action.currentScreen,
        prevScreen: action.prevScreen
      }
    default:
      return state
  }
}

export default navigation
