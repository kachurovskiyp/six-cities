import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './data-process/data-process';
import { dataProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
