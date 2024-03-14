import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDataType } from "../utils/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: "include",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserDataType, { token: string }>({
      query: ({ token }) => ({
        url: "/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
