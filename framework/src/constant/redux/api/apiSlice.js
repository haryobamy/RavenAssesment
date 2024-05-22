import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = import.meta?.env.VITE_BASE_URL ?? '';
const apiKey = import.meta.env.VITE_AUTH_API_BASE_URL ?? '';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    responseHandler: async (response) => {
      // Check if the response is successful
      if (response.ok) {
        const result = await response.text();
        const res = JSON.parse(result);
        return res;
      }
      // If the response is not successful, throw an error
      throw new Error('Failed to fetch data');
    },

    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json');
      headers.set('x-cg-demo-api-key', apiKey);

      return headers;
    },
  }),

  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
//export const {} = apiSlice;
