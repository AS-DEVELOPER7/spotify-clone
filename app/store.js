import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { spotify } from "./services";

export const store = configureStore({
  reducer: {
    [spotify.reducerPath]: spotify.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotify.middleware),
});
setupListeners(store.dispatch);
