export const setDogImage = image => ({
  type: 'SET_DOG_IMAGE',
  image
});

export const setCatImage = image => ({
  type: 'SET_CAT_IMAGE',
  image
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const removeSaved = id => ({
  type: 'REMOVE_SAVED',
  id
});

export const addSaved = savedBoost => ({
  type: 'ADD_SAVED',
  savedBoost
});
