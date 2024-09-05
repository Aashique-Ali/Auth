import { useState } from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Home from "./components/Home"
import ProtectRoute from "./components/ProtectRoute"
import { useSelector } from "react-redux"
import Dashboard from "./components/Dashboard"

function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useSelector((state) => state.auth)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectRoute />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="logout"
          element={isAuthenticated ? <Logout /> : <Login />}
        />
        <Route
          path="dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
