import React from 'react'
import {PATHS} from '../../configs/route-paths.config'
import CardMain from '../../components/ui/cards/CardMain'
import './Main.scss'

const Main = () => {
  return (
    <div className="as__page">
      <div className="as__page-main-cards">
        <CardMain
          title="Сложный процент" link={PATHS.compoundPercent}
          text="Начисление процентов, при котором по окончании каждого периода начисленные проценты становятся основной суммой."
        />
      </div>
    </div>
  )
}

export default Main
