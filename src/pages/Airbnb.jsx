import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import "./Airbnb.css"
import Nav from '../components/header/Nav'
const Airbnb = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Nav/>
          <div >
            <Outlet/>
          </div>
        <Footer/>
    </div>
  )
}

export default Airbnb