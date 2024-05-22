import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
  baseCurrency: 'usd',
  selectedCoin: {},
};
const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins: (state, { payload }) => {
      state.coins = payload;
    },
    changeBasecurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
    setSelectedCoin: (state, { payload }) => {
      state.selectedCoin = payload;
    },
  },
});

export const { setCoins, changeBasecurrency, setSelectedCoin } =
  coinSlice.actions;

export default coinSlice.reducer;
