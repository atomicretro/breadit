export const createPoemUpvote = ({ type, type_id, direction }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${type}/${type_id}/${direction}s`,
    data: { vote_direction }
  });
};

export const deletePoemUpvote = ({ type, type_id, direction, vote_id }) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${type}/${type_id}/${direction}s/${vote_id}`
  });
};
