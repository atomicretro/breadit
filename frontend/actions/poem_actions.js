import * as PoemApiUtils from '../util/poem_api_utils';

// poem action types
export const RECEIVE_ALL_POEMS = 'RECEIVE_ALL_POEMS';
export const RECEIVE_POEM = 'RECEIVE_POEM';
export const REMOVE_POEM = 'REMOVE_POEM';
export const RECEIVE_POEM_ERRORS = 'RECEIVE_POEM_ERRORS';

// synchronous poem action creators
export const receiveAllPoems = (poems) => {
  return ({
      type: RECEIVE_ALL_POEMS,
      poems
    });
};

export const receivePoem = ({ poem, author, comments }) => {
  return {
    type: RECEIVE_POEM,
    poem,
    author,
    comments
  };
};

export const removePoem = (poemId) => {
  return ({
    type: REMOVE_POEM,
    poemId
  });
};

export const receivePoemErrors = (errors) => {
  return ({
    type: RECEIVE_POEM_ERRORS,
    errors
  });
};

// thunk poem action creators
export const fetchPoems = (data) => (dispatch) => {
  return PoemApiUtils.fetchPoems(data).then(
    (poems) => {
      return dispatch(receiveAllPoems(poems));
    },
    (errors) => {
      return dispatch(receivePoemErrors(errors.responseJSON));
    }
  );
};

export const fetchPoem = (id) => (dispatch) => {
  return PoemApiUtils.fetchPoem(id).then(
    (payload) => {
      return dispatch(receivePoem(payload));
    },
    (errors) => {
      return dispatch(receivePoemErrors(errors.responseJSON));
    }
  );
};

export const createPoem = (poem) => (dispatch) => {
  return PoemApiUtils.createPoem(poem).then(
    (poem) => {
      return dispatch(receivePoem(poem));
    },
    (errors) => {
      return dispatch(receivePoemErrors(errors.responseJSON));
    }
  );
};

export const updatePoem = (poem) => (dispatch) => {
  return PoemApiUtils.updatePoem(poem).then(
    (poem) => {
      return dispatch(receivePoem(poem));
    },
    (errors) => {
      return dispatch(receivePoemErrors(errors.responseJSON));
    }
  );
};

export const deletePoem = (id) => (dispatch) => {
  return PoemApiUtils.deletePoem(id).then(
    (poem) => {
      return dispatch(removePoem(id));
    },
    (errors) => {
      return dispatch(receivePoemErrors(errors.responseJSON));
    }
  );
};
