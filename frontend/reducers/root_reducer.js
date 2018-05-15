import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducers/entities_reducer';
import SessionReducer from './session_reducers/session_reducer';
import UIReducer from './ui_reducers/ui_reducer';
import ErrorsReducer from './error_reducers/errors_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  ui: UIReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
