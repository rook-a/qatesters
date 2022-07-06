import { combineReducers } from '@reduxjs/toolkit';
import { orderSlice } from './order-slice/order-slice';
import { NameSpace } from '../utils/const';

export const rootReducer = combineReducers({
  [NameSpace.Order]: orderSlice.reducer,
});
