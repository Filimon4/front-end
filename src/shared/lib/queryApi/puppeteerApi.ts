import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const puppeteerApi = createApi({
  reducerPath: 'puppeterApi',
  baseQuery: fetchBaseQuery({baseUrl: `http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}`}),
  endpoints: (builder) => ({
    takeScreenShot: builder.query({
      query: (screenOpt) => ({
        url: '/puppeteer/take',
        params: {
          'wesitelink': screenOpt.website,
          'width': screenOpt.width,
          'height': screenOpt.height
        }
      })
    }),
    getAllScreenShots: builder.query({
      query: () => ({
        url: ''
      })
    })
  })
})
