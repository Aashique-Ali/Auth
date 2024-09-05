import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { signUp } from "../features/userSlice"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUp({ username, password }))
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      <div className="bg-green-600 w-full flex justify-center items-center h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className=" flex justify-center items-center flex-col bg-green-500 w-[70%] md:w-[30%] gap-10  h-[400px] rounded-lg"
        >
          <h1 className="text-2xl ">SignUp</h1>
          <input
            className="w-[70%] bg-slate-200 h-10 rounded border-none outline-none px-2"
            type="text"
            name="username"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-[70%]  bg-slate-200 h-10 rounded border-none outline-none px-2"
            type="password"
            name="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 px-8 rounded hover:text-white hover:bg-green-700 bg-green-600"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
