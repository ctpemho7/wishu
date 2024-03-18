import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { authReducer } from '../features/LoginForm/model/auth.slice'
import { rtkApi } from '../shared/api/rtkApi'
import { dialogReducer } from '../shared/ui/AppDialog/model/dialog.slice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        dialog: dialogReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(rtkApi.middleware)
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector