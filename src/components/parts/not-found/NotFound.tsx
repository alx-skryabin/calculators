import React from 'react'
import {Link} from 'react-router-dom'
import {PATHS} from '../../../configs/route-paths.config'
import {Button, Result} from 'antd'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="as__not-found">
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница, которую вы посетили, не существует."
        extra={
          <Link to={PATHS.main}>
            <Button type="primary">
              <i className="fa-regular fa-compass"/>
              На главную
            </Button>
          </Link>
        }
      />
    </div>
  )
}

export default NotFound
