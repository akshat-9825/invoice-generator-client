import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDataType } from "../utils/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
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
