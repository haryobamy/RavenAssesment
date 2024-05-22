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
          console.log({ res });
          const result = res?.data.data;
          dispatch(setCoins(result));
        } catch (error) {
          console.log(error, '::erroor');
        }
      },
    }),
  }),
});

export const { useGetCoinsQuery, useLazyGetCoinsQuery } = coinApi;
