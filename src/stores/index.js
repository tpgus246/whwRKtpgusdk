import { combineReducers } from 'redux';
import user from './user';
import conduct from './conduct';

const rootReducers =  combineReducers({
  user,
  conduct
});

export default rootReducers;