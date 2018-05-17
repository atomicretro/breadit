export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_ANNOTATION_MODAL = 'OPEN_ANNOTATION_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openAnnotationModal = (data) => {
  return {
    type: OPEN_ANNOTATION_MODAL,
    data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
