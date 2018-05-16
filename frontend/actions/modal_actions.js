export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_POEM_MODAL = 'OPEN_POEM_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openPoemModal = (data) => {
  return {
    type: OPEN_POEM_MODAL,
    data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
