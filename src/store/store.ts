import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {transactionApi} from "./api/transactionApi";

const rootReducer = combineReducers({
    [transactionApi.reducerPath]: transactionApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(transactionApi.middleware),
    })

const store = setupStore()

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']