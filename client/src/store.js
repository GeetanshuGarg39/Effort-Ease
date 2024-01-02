import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slices/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
  middlewares: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;