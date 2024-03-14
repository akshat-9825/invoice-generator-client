import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthDataType } from "../utils/types";
import { BASE_URL } from "../utils";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL(),
    credentials: "include",
    mode: "no-cors",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<string, AuthDataType>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation<string, AuthDataType>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation<string, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
