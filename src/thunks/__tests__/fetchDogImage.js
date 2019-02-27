import { fetchDogImage } from '../fetchDogImage';
import { setLoading, setError, setDogImage } from '../../actions';
import { randomIndex } from '../../utils/helper';

describe('fetchDogImage', () => {
  it('should call dispatch with the setLoading action', () => {
    let mockUrl = 'www.website.com';
    let mockDispatch = jest.fn();
    const thunk = fetchDogImage(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should dispatch setError if res.ok', async () => {
    let mockUrl = 'www.website.com';
    let mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'There was an error, please refresh'
      })
    );
    const thunk = fetchDogImage(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('There was an error, please refresh'));
  });

  it('should dispatch isLoading(false) if res.ok', async () => {
    let mockUrl = 'www.website.com';
    let mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: true
      })
    );
    const thunk = fetchDogImage(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setDogImage if res.ok', async () => {
    let mockUrl = 'www.website.com';
    let mockDispatch = jest.fn();
    let mockImages = ['dhfdjs-454'];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            mockImages
          })
      })
    );

    const randomIndex = jest.fn().mockReturnValueOnce(0);
    const image = mockImages[randomIndex];
    const thunk = fetchDogImage(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setDogImage(image));
  });
});
