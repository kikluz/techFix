import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/booking/bookingSlice";

// ? Configure and export the Redux store with the booking reducer
export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
