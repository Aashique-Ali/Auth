import React from "react"
import { useSelector } from "react-redux"
import Navbar from "./Navbar"

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.auth)
  return (
    <>
      <Navbar />
      <div className="w-full bg-green-600 h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl">Welcome to Dashboard </h1>
        <h1 className="text-4xl text-white">{currentUser?.username}</h1>
      </div>
    </>
  )
}

export default Dashboard
