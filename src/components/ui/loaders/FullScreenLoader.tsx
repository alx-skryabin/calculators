import React from 'react'
import {COLOR} from '../../../configs/dev.config'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: COLOR.primary.light
}

export const FullScreenLoader = () => {
  return (
    <div style={style}>
      <i className="fas fa-spinner fa-spin fa-3x"/>
    </div>
  )
}
