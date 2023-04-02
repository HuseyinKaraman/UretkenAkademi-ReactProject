import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const coin_limit = 50;

export const fetchCoins = createAsyncThunk(
  "coins/getCoins",
  async (page) => {
    const res = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coin_limit}&page=${page}&sparkline=false`
    );
    return res.data;
  }
);

export const coinSlice = createSlice({
  name: "coins",
  initialState: {
    items: [],
    page: 1,
    hasNextPage:true,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCoins.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCoins.fulfilled]: (state, action) => {
      state.items = [...state.items ,...action.payload];
      state.page += 1; 
      state.status = 'succeeded';
      if (action.payload.length < 50) {
        state.hasNextPage = false;
      }
    },
    [fetchCoins.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default coinSlice.reducer;
