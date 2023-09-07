import React from 'react'
import {validationNumber} from '../../../tools/tools'
import {Form, Input} from 'antd'

const NumberField = ({name, label, initial, required = true}: {
  name: string,
  label: string,
  initial?: string,
  required?: boolean
}) => {
  return (
    <Form.Item
      rules={[
        {required: required},
        () => ({
          validator(_, value) {
            return validationNumber(value)
          }
        })
      ]}
      name={name}
      label={label}
      initialValue={initial || ''}
      hasFeedback
    >
      <Input size="large"/>
    </Form.Item>
  )
}

export default NumberField
