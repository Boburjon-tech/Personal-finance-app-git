import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"; // bu default export bo'lishi kerak

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});


