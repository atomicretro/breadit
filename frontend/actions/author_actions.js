import * as AuthorApiUtils from '../util/author_api_utils';
import { fetchPoem } from '../util/poem_api_utils';

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

export const receiveAuthorErrors = (errors) => {
  return ({
    type: RECEIVE_AUTHOR_ERRORS,
    errors
  });
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

// export const fetchAuthorFromPoem = (poemId) => (dispatch) => {
//   return fetchPoem(poemId).then(
//     (payload) => {
//       return fetchAuthor(payload.poem.author_id).then(
//         (payload) => {
//           return dispatch(receiveAuthor(payload));
//         },
//         (errors) => {
//           return dispatch(receiveAuthorErrors(errors.responseJSON));
//         }
//       )
//     }
//   );
// };
// export function fetchAuthorFromPoem(poemId) {
//   return (dispatch, getState) => {
//     return dispatch(fetchPoem(poemId)).then(() => {
//       const fetchedPoem = getState().entities.poems.poemId;
//       const authorId = fetchedPoem.author_id;
//       return dispatch(AuthorApiUtils.fetchAuthor(authorId))
//     })
//   }
// }
