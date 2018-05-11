export const fetchAuthor = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/authors/${id}`
  });
};
