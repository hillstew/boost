import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { dogReducer } from './dogReducer';
import { savedReducer } from './savedReducer';

export const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasError: errorReducer,
  dogImgSrc: dogReducer,
  savedBoosts: savedReducer
});
