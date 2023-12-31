import React, {useState} from 'react'
import {PATHS} from '../../../configs/route-paths.config'
import {Link} from 'react-router-dom'
import {useAppDispatch} from '../../../hooks/redux.hooks'
import {runFire} from '../../../tools/tools'
import './Header.scss'

const answers: number[] = [3, 5, 7, 2, 4, 9, 1, 6, 8]

const Header = () => {
  const [answer, setAnswer] = useState<number | string>('?')
  const dispatch = useAppDispatch()

  const jokeClick = () => {
    if (answer === 4) return runFire(dispatch)

    const item = answers[Math.floor(Math.random() * answers.length)]
    if (item === 4) runFire(dispatch)
    setAnswer(item)
  }

  return (
    <div className="as__header">
      <div className="as__header_logo">
        <Link to={PATHS.main}>
          <i className="fa-solid fa-square-root-variable"/> Calculators online
        </Link>
      </div>
      <div className="as__header_menu">
        <span
          onClick={jokeClick}
          className={`noselect ${answer === 4 ? 'as__joke-done' : ''}`}
        >
          {answer} = 2 × 2
        </span>
      </div>
    </div>
  )
}

export default Header
