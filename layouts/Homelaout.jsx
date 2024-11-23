import React from 'react'
import Header from '../src/components/Header'
import { Outlet } from 'react-router-dom'

const Homelaout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Homelaout