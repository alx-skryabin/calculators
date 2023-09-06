import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="as__footer">
      <div className="as__footer_line">
        <span>Feedback? — </span>
        <Link to="https://t.me/AlxSkryabin" target="_blank">telegram</Link>
      </div>
      <div className="as__footer_line">
        <span>Improvements? — </span>
        <Link to="https://github.com/alx-skryabin" target="_blank">github</Link>
      </div>
    </div>
  )
}

export default Footer
