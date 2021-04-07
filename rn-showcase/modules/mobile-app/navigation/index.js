const UPDATE_NAVIGATION_SCREEN = 'UPDATE_NAVIGATION_SCREEN'

export const updateNavigation = (store, state) => {
  const { dispatch, getState } = store
  const { navigation } = getState()
  const { currentScreen } = navigation
  const { routes } = state
  const currentStack = routes[routes.length - 1]

  dispatch({
    type: UPDATE_NAVIGATION_SCREEN,
    currentScreen: currentStack.name || '',
    prevScreen: currentScreen || ''
  })
}
