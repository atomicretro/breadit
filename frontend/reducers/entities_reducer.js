import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PoemsReducer from './poems_reducer';
import AuthorsReducer from './authors_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  poems: PoemsReducer,
  authors: AuthorsReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
