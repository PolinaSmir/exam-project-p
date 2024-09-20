import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
import {
  createExtraReducers,
  decorateAsyncThunk,
  pendingReducer,
  rejectedReducer,
} from '../../utils/store';

const OFFER_SLICE_NAME = 'offers';

const initialState = {
  isFetching: true,
  error: null,
  offers: [],
};

export const getOffers = createAsyncThunk(
  `${OFFER_SLICE_NAME}/getOffers`,
  async (replace, { rejectWithValue }) => {
    try {
      console.log(replace, rejectWithValue);
      const { data } = await restController.getOffers();
      // data.forEach((offer) => {
      //   delete offer.Contest;
      // });
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue({
        data: err?.response?.data ?? 'Gateway Timeout',
        status: err?.response?.status ?? 504,
      });
    }
  }
);

const reducers = {
  setOffers: (state, action) => {
    state.offers = [...state.offers, action.payload];
  },
};

const extraReducers = (builder) => {
  builder.addCase(getOffers.pending, pendingReducer);
  builder.addCase(getOffers.fulfilled, (state, { payload }) => {
    // console.log(state);
    // console.log(payload);
    state.isFetching = false;
    state.offers = [...state.offers, ...payload];
  });
  builder.addCase(getOffers.rejected, rejectedReducer);
};

// export const getOffers = decorateAsyncThunk({
//   key: `${OFFER_SLICE_NAME}/getOffers`,
//   thunk: async ({ requestData }) => {
//     console.log(requestData);
//     const { data } = await restController.getOffers(requestData);
//     console.log(data);
//     return data;
//   },
// });

// const getOffersExtraReducers = createExtraReducers({
//   thunk: getOffers,
//   pendingReducer: (state) => {
//     state.isFetching = true;
//     state.error = null;
//     state.offers = [];
//   },
//   fulfilledReducer: (state, { payload: { offers } }) => {
//     state.isFetching = false;
//     state.offers = offers;
//     state.error = null;
//   },
//   rejectedReducer,
// });

// const extraReducers = (builder) => {
//   getOffersExtraReducers(builder);
// };

const offersSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  extraReducers,
});

const { actions, reducer } = offersSlice;

export const { setOffers } = actions;

export default reducer;
