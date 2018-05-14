export const createComment = (comment, poemId) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/poems/${poemId}/comments`,
    data: { comment }
  }).then((response) => {
    console.log(response);
    debugger;
  });
};
