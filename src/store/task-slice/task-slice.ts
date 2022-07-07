import { createAsyncThunk, createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import { CURRENT_PAGE, FetchStatus, NameSpace, NUMBER_OF_ENTRIES } from '../../utils/const';
import { adaptToClient } from '../../utils/utils';

import { AdaptedTaskToClient, Task } from '../../types/task';
import { AppDispatch, State } from '../../types/state';

interface InitialState {
  tasks: AdaptedTaskToClient[];
  tasksStatus: FetchStatus;

  currentPage: number;
  numberOfEntries: number;
}

const initialState: InitialState = {
  tasks: [],
  tasksStatus: FetchStatus.Idle,

  currentPage: CURRENT_PAGE,
  numberOfEntries: NUMBER_OF_ENTRIES,
};

export const fetchTasks = createAsyncThunk<
  Task[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
  }
>('data/fetchTasks', async (_args, { dispatch }): Promise<AdaptedTaskToClient[]> => {
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

export const taskSlice = createSlice({
  name: NameSpace.Task,
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
      state.currentPage = state.tasks.length / state.numberOfEntries;
    },
    changeNumberOfEntries: (state, action: PayloadAction<number>) => {
      state.numberOfEntries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.tasksStatus = FetchStatus.Pending;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        state.tasksStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.tasksStatus = FetchStatus.Rejected;
      });
  },
});

export const { setDecCurrentPage, setIncCurrentPage, setFirstCurrentPage, setLastCurrentPage, changeNumberOfEntries } =
  taskSlice.actions;

const selectTaskState = (state: State) => state[NameSpace.Task];

export const selectTasks = (state: State) => selectTaskState(state).tasks;
export const selectCurrentPage = (state: State) => selectTaskState(state).currentPage;
export const selectNumberOfEntries = (state: State) => selectTaskState(state).numberOfEntries;

export const selectCurrentTasks = createSelector(
  selectTasks,
  selectCurrentPage,
  selectNumberOfEntries,
  (tasks, currentPage, numberOfEntries) => {
    const endLimit = currentPage * numberOfEntries;
    const startLimit = endLimit - numberOfEntries;

    return tasks.slice(startLimit, endLimit);
  },
);
