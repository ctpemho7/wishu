import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const rtkApi = createApi({
    reducerPath: 'espApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.RENDERER_VITE_API_BASE_URL
    }),
    endpoints: (build) => ({
        test: build.query({
            query: () => `test`,
        })
    }),
})