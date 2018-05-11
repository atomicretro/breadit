import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PoemsReducer from './poems_reducer';
import AuthorsReducer from './authors_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  poems: PoemsReducer,
  authors: AuthorsReducer
});

export default EntitiesReducer;
