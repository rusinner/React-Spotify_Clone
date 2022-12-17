import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "2db4e1eb6emsh40766a5abe17b10p18a780jsne7f8e982187e",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// the above code generated from api extension and i used everything below in redux toolkiit functions and objects

export const shazamCoreApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2db4e1eb6emsh40766a5abe17b10p18a780jsne7f8e982187e"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
