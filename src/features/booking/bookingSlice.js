import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // ? Action to add a new booking with a unique ID and timestamp
    addBooking: (state, action) => {
      const newBooking = {
        ...action.payload,
        // ? Generate a unique ID for the booking
        id: `TRK-${Date.now()}`,
        status: "received",
        createdAt: new Date().toISOString(),
      };
      state.bookings.push(newBooking);
      state.currentBooking = newBooking;
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateBookingStatus: (state, action) => {
      const { id, status } = action.payload;
      const booking = state.bookings.find((booking) => booking.id === id);
      if (booking) {
        booking.status = status;
      }
    },
  },
});

export const {
  addBooking,
  setCurrentBooking,
  setLoading,
  updateBookingStatus,
} = bookingSlice.actions;
export default bookingSlice.reducer; // This is the default export
