import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Page/HomePage'
import Login from './Page/Login'
import Signup from './Page/Signup'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    </div>
  )
}
