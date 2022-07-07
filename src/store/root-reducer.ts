import { combineReducers } from '@reduxjs/toolkit';
import { taskSlice } from './task-slice/task-slice';
import { NameSpace } from '../utils/const';

export const rootReducer = combineReducers({
  [NameSpace.Task]: taskSlice.reducer,
});
