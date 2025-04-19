import React from 'react'
import style from "./MainLayout.module.scss"
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import FooterBar from '../components/footerbar/FooterBar'

function MainLayout() {
  return (
    <div className={style.overAll_wrapper_div}>
        <Navbar/>
        
      <main>
        <Outlet/>
      </main>
        <FooterBar/>
    </div>
  )
}

export default MainLayout;
