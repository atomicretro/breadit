export const fetchAuthors = (data) => {
  return $.ajax({
    method: 'GET',
    url: `/api/authors/`,
    data: { data }
  });
};

export const fetchAuthor = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/authors/${id}`
  });
};
