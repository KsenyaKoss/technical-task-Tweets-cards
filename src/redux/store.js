import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { filterReducer } from "./filter/slice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'token',
//   version: 1,
//   storage,
//   whitelist: ['accessToken', 'refreshToken'],
// };

// const persistConfigTheme = {
//   key: 'theme',
//   version: 1,
//   storage,
//   whitelist: ['theme'],
// };


export const store = configureStore({
    reducer: {
       users: usersReducer, 
       filter: filterReducer,
    },
//     middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV !== 'production',
});


// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//     tasks: tasksReducer,
//     reviews: reviewsReducer,
//     modal: modalReducer,
//     theme: persistReducer(persistConfigTheme, themeReducer),
//   },
 
// export const store = persistStore(store);
