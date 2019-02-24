export const dogReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DOG_IMAGE':
      return action.image;
    default:
      return state;
  }
};
