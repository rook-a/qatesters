import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FetchStatus, NameSpace } from '../../utils/const';
import { adaptToClient } from '../../utils/utils';

import { AdaptedOrderToClient, Order } from '../../types/order';
import { AppDispatch, State } from '../../types/state';

interface InitialState {
  orders: AdaptedOrderToClient[];
  ordersStatus: FetchStatus;
}

const initialState: InitialState = {
  orders: [],
  ordersStatus: FetchStatus.Idle,
};

export const fetchOrders = createAsyncThunk<
  Order[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
  }
>('data/fetchOrders', async (_args, { dispatch }): Promise<AdaptedOrderToClient[]> => {
  try {
    const data = await fetch('db.json')
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.log(error);
      });

    return adaptToClient(data);
  } catch (error) {
    throw error;
  }
});

export const orderSlice = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.ordersStatus = FetchStatus.Pending;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.orders = action.payload;
        state.ordersStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.ordersStatus = FetchStatus.Rejected;
      });
  },
});

const selectOrderState = (state: State) => state[NameSpace.Order];

export const selectOrders = (state: State) => selectOrderState(state).orders;
