export const savedReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SAVED':
      return [...state, action.savedBoost];
    case 'REMOVE_SAVED':
      return state.filter(boost => boost.id !== action.id);
    default:
      return state;
  }
};
