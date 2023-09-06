import React from 'react'
import {Card, Tooltip} from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import {COLOR} from '../../../configs/dev.config'
import {Link} from 'react-router-dom'

const CardMain = ({title, link, text = ''}: {
  title: string,
  link: string,
  text?: string
}) => {
  return (
    <Link to={link}>
      <Card title={title} type="inner" bordered={true} hoverable={true}>
        <Tooltip color={COLOR.success.light} title={text}>
          <Paragraph ellipsis={{rows: 2}}>{text}</Paragraph>
        </Tooltip>
      </Card>
    </Link>
  )
}

export default CardMain
