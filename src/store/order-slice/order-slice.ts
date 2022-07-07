import { createAsyncThunk, createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import { CURRENT_PAGE, FetchStatus, NameSpace, NUMBER_OF_ENTRIES } from '../../utils/const';
import { adaptToClient } from '../../utils/utils';

import { AdaptedOrderToClient, Order } from '../../types/order';
import { AppDispatch, State } from '../../types/state';

interface InitialState {
  orders: AdaptedOrderToClient[];
  ordersStatus: FetchStatus;

  currentPage: number;
  numberOfEntries: number;
}

const initialState: InitialState = {
  orders: [],
  ordersStatus: FetchStatus.Idle,

  currentPage: CURRENT_PAGE,
  numberOfEntries: NUMBER_OF_ENTRIES,
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
  reducers: {
    setDecCurrentPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setIncCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    setFirstCurrentPage: (state) => {
      state.currentPage = CURRENT_PAGE;
    },
    setLastCurrentPage: (state) => {
      state.currentPage = state.orders.length / state.numberOfEntries;
    },
    changeNumberOfEntries: (state, action: PayloadAction<number>) => {
      state.numberOfEntries = action.payload;
    },
  },
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

export const { setDecCurrentPage, setIncCurrentPage, setFirstCurrentPage, setLastCurrentPage, changeNumberOfEntries } =
  orderSlice.actions;

const selectOrderState = (state: State) => state[NameSpace.Order];

export const selectOrders = (state: State) => selectOrderState(state).orders;
export const selectCurrentPage = (state: State) => selectOrderState(state).currentPage;
export const selectNumberOfEntries = (state: State) => selectOrderState(state).numberOfEntries;

export const selectCurrentOrders = createSelector(
  selectOrders,
  selectCurrentPage,
  selectNumberOfEntries,
  (orders, currentPage, numberOfEntries) => {
    const endLimit = currentPage * numberOfEntries;
    const startLimit = endLimit - numberOfEntries;

    return orders.slice(startLimit, endLimit);
  },
);
