import { configureStore } from "@reduxjs/toolkit"
import userreducer from "../features/userSlice"

export const store = configureStore({
  reducer: {
    auth: userreducer,
  },
})
