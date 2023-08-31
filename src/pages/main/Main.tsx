import React from 'react'
import {PATHS} from '../../configs/route-paths.config'
import {Link} from 'react-router-dom'
import './Main.scss'

const Main = () => {
  return (
    <div className="as__page">
      <ul>
        <li>
          <Link to={PATHS.compoundPercent}>Compound percent</Link>
        </li>
      </ul>
    </div>
  )
}

export default Main
