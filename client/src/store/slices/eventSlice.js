import { createSlice } from '@reduxjs/toolkit';

const EVENT_SLICE_NAME = 'events';

const initialState = {
  isFetching: true,
  error: null,
  timers: [
    {
      name: 'Timer',
      date: '2024-08-09',
      time: '21:40',
      alarmTime: '12',
    },
  ],
  isEdit: false,
};

const reducers = {
  changeIsEdit: (state) => {
    state.isEdit = !state.isEdit;
  },
  setTimer: () => {},
};

const eventSlice = createSlice({
  name: EVENT_SLICE_NAME,
  initialState,
  reducers,
});

const { actions, reducer } = eventSlice;

export const { changeIsEdit } = actions;

export default reducer;

// alarmTime
// :
// "12"
// date
// :
// "2024-08-09"
// name
// :
// "Timer"
// time
// :
// "21:40"
