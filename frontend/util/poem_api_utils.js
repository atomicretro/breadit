export const fetchPoems = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/poems',
    data: { data }
  });
};

export const fetchNewestPoems = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/poems/newest',
    data: { data }
  });
};

export const fetchRandomPoems = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/poems/random',
    data: { data }
  });
};

export const fetchPoem = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/poems/${id}`
  });
};

export const createPoem = (poem) => {
  return $.ajax({
    method: 'POST',
    url: '/api/poems',
    data: { poem }
  });
};

export const updatePoem = (poem) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/poems/${poem.id}`,
    data: { poem }
  });
};

export const deletePoem = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/poems/${id}`,
  });
};
