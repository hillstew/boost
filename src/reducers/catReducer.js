export const catReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CAT_IMAGE':
      return action.image;
    default:
      return state;
  }
};
