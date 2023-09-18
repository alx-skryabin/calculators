import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../../parts/header/Header'
import Sidebar from '../../parts/sidebar/Sidebar'
import Footer from '../../parts/footer/Footer'
import FireworkEffect from '../firework-effect/FireworkEffect'
import {useAppSelector} from '../../../hooks/redux.hooks'
import './BaseLayout.scss'

export const BaseLayout = () => {
  const {isFire} = useAppSelector((state) => state.system)

  return (
    <div className="as__base-layout">
      <div className="as__base-header">
        <Header/>
      </div>
      <div className="as__base-body">
        {isFire && <FireworkEffect/>}
        <Sidebar/>
        <Outlet/>
      </div>
      <div className="as__base-footer">
        <Footer/>
      </div>
    </div>
  )
}
