import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../features/LoginForm/model/auth.slice'
import { rtkApi } from '../shared/api/rtkApi'
import { dialogReducer } from '../shared/ui/AppDialog/model/dialog.slice'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['dialog']
}

const rootReducer = combineReducers({
    auth: authReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    dialog: dialogReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        })
            .concat(rtkApi.middleware)
})


export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector