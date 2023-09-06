import {FormInstance} from 'antd/es/form/hooks/useForm'
import React, {useEffect} from 'react'
import {Button, Form} from 'antd'

const SubmitButton = ({form}: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false)
  const values = Form.useWatch([], form)

  useEffect(() => {
    form.validateFields({validateOnly: true}).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      },
    )
  }, [values])

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      <i className="fa-solid fa-calculator"/> Рссчитать
    </Button>
  )
}

export default SubmitButton
