export const createComment = (comment, poemId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/poems/${poemId}/comments`,
    data: { comment }
  });
};
