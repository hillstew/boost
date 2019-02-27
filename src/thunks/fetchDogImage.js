import { setLoading, setError, setDogImage } from '../actions';
import { randomIndex } from '../utils/helper';

export const fetchDogImage = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const url = 'https://random.dog/doggos';
      const res = await fetch(url);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      dispatch(setLoading(false));
      const dogImages = await res.json();
      let randomImage = dogImages[randomIndex(dogImages.length - 1)];
      if (randomImage.includes('jpg')) {
        dispatch(setDogImage(randomImage));
      } else {
        randomImage = dogImages[randomIndex(dogImages.length - 1)];
      }
    } catch (error) {
      dispatch(setError('There was an error, please refresh'));
    }
  };
};
