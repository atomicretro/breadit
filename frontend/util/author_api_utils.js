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

export const createAuthor = (author) => {
  return $.ajax({
    method: 'POST',
    url: '/api/authors',
    data: { author }
  });
};
