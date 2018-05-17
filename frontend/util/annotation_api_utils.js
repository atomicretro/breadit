export const fetchAnnotation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/annotations/${id}`
  });
};

export const createAnnotation = (annotation) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/annotations/`,
    data: { annotation }
  });
};
