import { combineReducers } from 'redux'
import rootIdReducer from './auth/idreducer';
import rootReducer from './auth/reducer';

const createReducer = () =>
  combineReducers({
    rootIdReducer,
    rootReducer
  });

export default createReducer;
