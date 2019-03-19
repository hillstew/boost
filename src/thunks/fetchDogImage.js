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
      let dogImages = await res.json();
      dogImages = dogImages.filter(image => {
        return image.includes('jpg');
      });
      const randomImage = dogImages[randomIndex(dogImages.length - 1)];
      dispatch(setDogImage(randomImage));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
