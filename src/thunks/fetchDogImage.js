import { setLoading, setError, setDogImage } from '../actions';
import { randomIndex } from '../utils/helper';

export const fetchDogImage = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const url = 'https://random.dog/doggos';
      const res = await fetch(url);
      const dogImages = await res.json();
      const randomImage = dogImages[randomIndex(dogImages.length - 1)];
      dispatch(setDogImage(randomImage));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };
};
