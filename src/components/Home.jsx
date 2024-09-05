import React from "react"
import { useSelector } from "react-redux"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] bg-green-600 flex items-center justify-center">
        <h1 className="text-2xl text-white"> homepage</h1>
      </div>
    </>
  )
}

export default Home
