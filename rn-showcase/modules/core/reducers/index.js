import { combineReducers } from 'redux';

import app from './app';
import navigation from './navigation';
import userProfile from './userProfile';

const rootReducer = combineReducers({
  app,
  navigation,
  userProfile
})

export default rootReducer
