export const createPoemUpvote = ({ type, type_id, vote_direction }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${type}/${type_id}/upvotes`,
    data: { vote_direction }
  });
};

export const deletePoemUpvote = (type, type_id, vote_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${type}/${type_id}/upvotes/${vote_id}`
  });
};
