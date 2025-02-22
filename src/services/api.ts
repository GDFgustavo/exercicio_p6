import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Foods } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Foods[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<Foods, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCapaMenu: builder.query<Foods, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetMenuQuery, useGetCapaMenuQuery } =
  api

export default api
