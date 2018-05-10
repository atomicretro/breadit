import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PoemsReducer from './poems_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  poems: PoemsReducer
});

export default EntitiesReducer;
