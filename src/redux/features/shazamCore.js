import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '2cdb13ac11msh55aa4718edd6c7dp130468jsnc81b21798e6c');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
