import * as AuthorApiUtils from '../util/author_api_utils';

// author action types
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';
export const RECEIVE_AUTHOR_ERRORS = 'RECEIVE_AUTHOR_ERRORS';

// synchronous author action creators
export const receiveAuthor = ({ author }) => {
  return {
    type: RECEIVE_AUTHOR,
    author
  };
};

// thunk author action creators
export const fetchAuthor = (id) => (dispatch) => {
  return AuthorApiUtils.fetchAuthor(id).then(
    (payload) => {
      return dispatch(receiveAuthor(payload));
    },
    (errors) => {
      return dispatch(receiveAuthorErrors(errors.responseJSON));
    }
  );
};
