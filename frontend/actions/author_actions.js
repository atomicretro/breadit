import * as AuthorApiUtils from '../util/author_api_utils';

// author action types
export const RECEIVE_ALL_AUTHORS = 'RECEIVE_ALL_AUTHORS';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';
export const RECEIVE_AUTHOR_ERRORS = 'RECEIVE_AUTHOR_ERRORS';

// synchronous author action creators
export const receiveAllAuthors = (authors) => {
  return {
    type: RECEIVE_ALL_AUTHORS,
    authors
  };
};

export const receiveAuthor = ({ author, poems }) => {
  return {
    type: RECEIVE_AUTHOR,
    author,
    poems
  };
};

export const receiveAuthorErrors = (errors) => {
  return ({
    type: RECEIVE_AUTHOR_ERRORS,
    errors
  });
};

// thunk author action creators
export const fetchAuthors = (data) => (dispatch) => {
  return AuthorApiUtils.fetchAuthors(data).then(
    (authors) => {
      return dispatch(receiveAllAuthors(authors));
    },
    (errors) => {
      return dispatch(receiveAuthorErrors(errors.responseJSON));
    }
  );
};

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

export const createAuthor = (author) => (dispatch) => {
  return AuthorApiUtils.createAuthor(author).then(
    (author) => {
      return dispatch(receiveAuthor(author));
    },
    (errors) => {
      return dispatch(receiveAuthorErrors(errors.responseJSON));
    }
  );
};
