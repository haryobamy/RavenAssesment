import { apiSlice } from '../api/apiSlice';
import { setCoins } from './coinSlice';

export const coinApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (currency = 'usd') => ({
        url: `coins/markets?vs_currency=${currency}`,
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const result = res?.data;
          dispatch(setCoins(result));
        } catch (error) {
          console.log(error, '::erroor');
        }
      },
    }),

    getCoinChart: builder.query({
      query: ({ id, currency, days = '1' }) => ({
        //url: `coins/${id}/market_chart?vs_currency=${currency}&days=${days}&precision=2`,
        url: `coins/${id}/ohlc?vs_currency=${currency}&days=${days}&precision=2`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useLazyGetCoinsQuery,
  useLazyGetCoinChartQuery,
  useGetCoinChartQuery,
} = coinApi;
