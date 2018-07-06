export const createVote = ({ type, type_id, direction }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${type}/${type_id}/${direction}s`,
    data: { direction }
  });
};

export const deleteVote = ({ type, type_id, direction, vote_id }) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${type}/${type_id}/${direction}s/${vote_id}`
  });
};
