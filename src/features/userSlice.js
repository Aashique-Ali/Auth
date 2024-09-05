import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const user = {
        username: action.payload.username,
        password: action.payload.password,
      }

      const existingUser = state.users.find(
        (user) => user.username === action.payload.username
      )

      if (existingUser) {
        alert("user already exits")
      } else {
        state.users.push(user)
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      )

      if (user) {
        ;(state.currentUser = user), (state.isAuthenticated = true)
      } else {
        alert("Invalid username or password!")
      }
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    },
  },
})

export const { signUp, login, logout } = userSlice.actions
export default userSlice.reducer
