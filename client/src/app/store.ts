import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '../shared/api/rtkApi'

export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(rtkApi.middleware)
})

export type AppDispatch = typeof store.dispatch