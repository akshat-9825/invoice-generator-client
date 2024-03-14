import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDataType } from "../utils/types";
import { BASE_URL } from "../utils";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL(),
    credentials: "include",
    mode: "no-cors",
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
