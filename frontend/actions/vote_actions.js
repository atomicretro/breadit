import * as VoteApiUtils from '../util/vote_api_utils';

// vote action types
export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const REMOVE_VOTE = 'REMOVE_VOTE';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';

// synchronous vote action creators
const receiveVote = (vote) => {
    return ({
    type: RECEIVE_VOTES,
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

export const deleteVote = (type, type_id, id) => dispatch => {
  return VoteApiUtils.deleteVote(type, type_id, id).then(
    (data) => {
      return dispatch(removeVote(data));
    },
    (errors) => {
      return dispatch(receiveVoteErrors(errors.responseJSON));
    }
  );
};
