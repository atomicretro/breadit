import * as VoteApiUtils from '../util/vote_api_utils';

// vote action types
export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';

// synchronous vote action creators
const receiveVote = (vote) => {
    return ({
    type: RECEIVE_VOTE,
    vote
  });
};

const removeVote = (vote) => {
  return ({
    type: REMOVE_VOTE,
    vote
  });
};

export const receiveVoteErrors = (errors) => {
  return ({
    type: RECEIVE_VOTE_ERRORS,
    errors
  });
};

// thunk vote action creators
export const createVote = (data) => (dispatch) => {
  return VoteApiUtils.createVote(data).then(
    (vote) => {
      return dispatch(receiveVote(vote));
    },
    (errors) => {
      return dispatch(receiveVoteErrors(errors.responseJSON));
    }
  );
};

export const deleteVote = (data) => dispatch => {
  return VoteApiUtils.deleteVote(data).then(
    (vote) => {
      return dispatch(removeVote(vote));
    },
    (errors) => {
      return dispatch(receiveVoteErrors(errors.responseJSON));
    }
  );
};
