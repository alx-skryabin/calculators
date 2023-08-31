import React from 'react'
import {Link} from 'react-router-dom'
import {PATHS} from '../../../configs/route-paths.config'
import './Header.scss'

const Header = () => {
  return (
    <div className="as__header">
      <div className="as__header_logo">
        <Link to={PATHS.main}>
          <i className="fa-solid fa-square-root-variable"/> Calculators online
        </Link>
      </div>
      <div className="as__header_menu">
        <span>5 = 2 × 2</span>
      </div>
    </div>
  )
}

export default Header
