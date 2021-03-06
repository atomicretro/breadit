import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PoemsReducer from './poems_reducer';
import NewestPoemsReducer from './newest_poems_reducer';
import RandomPoemsReducer from './random_poems_reducer';
import AuthorsReducer from './authors_reducer';
import CommentsReducer from './comments_reducer';
import CommentAuthorsReducer from './comment_authors_reducer';
import AnnotationsReducer from './annotations_reducer';
import AnnotatorsReducer from './annotators_reducer';
import NewAnnotationsReducer from './new_annotation_reducer';
import VotesReducer from './votes_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  poems: PoemsReducer,
  newestPoems: NewestPoemsReducer,
  randomPoems: RandomPoemsReducer,
  authors: AuthorsReducer,
  comments: CommentsReducer,
  commentAuthors: CommentAuthorsReducer,
  annotations: AnnotationsReducer,
  annotators: AnnotatorsReducer,
  newAnnotation: NewAnnotationsReducer,
  votes: VotesReducer
});

export default EntitiesReducer;
