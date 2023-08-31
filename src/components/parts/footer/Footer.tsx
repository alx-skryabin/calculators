import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="as__footer">
      <div className="as__footer_line">
        <span>Feedback? — </span>
        <Link to="https://vk.com/alx.skryabin">vk</Link>
      </div>
      <div className="as__footer_line">
        <span>Improvements? — </span>
        <Link to="https://github.com/alx-skryabin">github</Link>
      </div>
    </div>
  )
}

export default Footer
