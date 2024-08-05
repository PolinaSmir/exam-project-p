import { createSlice } from '@reduxjs/toolkit';

const EVENT_SLICE_NAME = 'events';

const initialState = {
  isFetching: true,
  error: null,
  timers: [],
  isEdit: false,
};

const reducers = {
  changeIsEdit: (state) => {
    state.isEdit = !state.isEdit;
  },
};

const eventSlice = createSlice({
  name: EVENT_SLICE_NAME,
  initialState,
  reducers,
});

const { actions, reducer } = eventSlice;

export const { changeIsEdit } = actions;

export default reducer;

//Test data in timers {
//   name: 'Timer',
//   date: '2024-08-09',
//   time: '21:40',
//   alarmTime: '12',
// },
