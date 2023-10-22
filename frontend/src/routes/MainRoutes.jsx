import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Login from '../components/Login'
import Signup from '../components/Signup'
import History from '../components/History'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/history' element={<History />}></Route>
           
        </Routes>
    </div>
  )
}

export default MainRoutes