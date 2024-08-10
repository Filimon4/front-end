import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: `http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/auth`}),
  endpoints: (builder) => ({
    setLogin: builder.mutation({
      query: (user: {username: string, password: string}) => ({
        url: '/signin',
        method: "POST",
        body: {
          username: user.username,
          password: user.password
        }
      })
    }),
    setRegistration: builder.mutation({
      query: (user) => ({
        url: '/signup',
        method: "POST",
        body: {
          username: user.username,
          password: user.password,
        },
      })
    }),
    getRefresh: builder.query({
      query: (token: string) => ({
        url: '/refresh',
        methos: "GET",
        body: {
          accesstoken: token
        }
      })
    }),
    getProfile: builder.query({
      query: (token: string) => ({
        url: '/profile',
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    })
  })
})

export default {
  useSetLoginMutation: authApi.useSetLoginMutation,
  useSetRegistrationMutation: authApi.useSetRegistrationMutation,
  useGetRefreshQuery: authApi.useGetRefreshQuery,
  useGetProfileQuery: authApi.useGetProfileQuery,
} = authApi