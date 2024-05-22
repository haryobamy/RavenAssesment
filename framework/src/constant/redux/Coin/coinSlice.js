import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
};
const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoins: (state, { payload }) => {
      state.coins = payload;
    },
  },
});

export const { setCoins } = coinSlice.actions;

export default coinSlice.reducer;
