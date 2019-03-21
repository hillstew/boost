import { setLoading, setError, setCatImage } from '../actions';

export const fetchCatImage = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const url = 'https://api.thecatapi.com/v1/images/search';
      const res = await fetch(url);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      dispatch(setLoading(false));
      let catImages = await res.json();
      let image = catImages[0].url;
      image = image.split('/').pop();
      dispatch(setCatImage(image));
    }
    catch (error) {
      dispatch(setError(error.message));
    }
  };
};