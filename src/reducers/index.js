import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { dogReducer } from './dogReducer';
import { catReducer } from './catReducer';
import { savedReducer } from './savedReducer';

export const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasError: errorReducer,
  dogImgSrc: dogReducer,
  catImgSrc: catReducer,
  savedBoosts: savedReducer
});
