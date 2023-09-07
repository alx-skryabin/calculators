import React, {useState} from 'react'
import {ConfigProvider, Form, Statistic} from 'antd'
import NumberField from '../../components/ui/fields/NumberField'
import {toMoney, toNum} from '../../tools/tools'
import './BasePercent.scss'

interface IForm {
  number: string
  percent: string
}

const calcPercentForm1 = (number: string, percent: string) => {
  return toMoney((toNum(number) * toNum(percent)) / 100)
}

const calcPercentForm2 = (number1: string, number2: string) => {
  return toMoney((100 * toNum(number1)) / toNum(number2))
}

const calcPercentForm3 = (number: string, percent: string) => {
  return toMoney(((toNum(percent) / 100) * toNum(number)) + toNum(number))
}

const calcPercentForm4 = (number: string, percent: string) => {
  return toMoney(toNum(number) - ((toNum(percent) / 100) * toNum(number)))
}


const BasePercent = () => {
  const [resForm1, setResForm1] = useState<IForm>({
    number: '100',
    percent: '7'
  })
  const [resForm2, setResForm2] = useState<IForm>({
    number: '25',
    percent: '100'
  })
  const [resForm3, setResForm3] = useState<IForm>({
    number: '100',
    percent: '10'
  })
  const [resForm4, setResForm4] = useState<IForm>({
    number: '100',
    percent: '10'
  })

  const validateMessages = {
    required: "Укажите - ${label}!"
  }

  const onSubmitForm1 = (_: any, fields: IForm) => {
    setResForm1(fields)
  }

  const onSubmitForm2 = (_: any, fields: IForm) => {
    setResForm2(fields)
  }

  const onSubmitForm3 = (_: any, fields: IForm) => {
    setResForm3(fields)
  }

  const onSubmitForm4 = (_: any, fields: IForm) => {
    setResForm4(fields)
  }

  return (
    <div className="as__page as__page_calc">
      <div className="as__calc_title">
        <h1>Калькулятор процентов</h1>
        <p>Частые базовые операции с процентами.</p>
      </div>

      <div className="as__calc_form">
        <ConfigProvider form={{validateMessages}}>
          <Form layout="vertical" onValuesChange={onSubmitForm1}>
            <h2><i className="fa-solid fa-1"/> Процент от числа</h2>
            <div className="as__base-percent_forms">
              <NumberField name="number" label="Число" initial={resForm1.number}/>
              <NumberField name="percent" label="Процент" initial={resForm1.percent}/>
              <div>
                <Statistic
                  title={`${resForm1.percent || 0}% от ${toMoney(resForm1.number)} =`}
                  value={calcPercentForm1(resForm1.number, resForm1.percent)}
                />
              </div>
            </div>
          </Form>

          <hr/>

          <Form layout="vertical" onValuesChange={onSubmitForm2}>
            <h2><i className="fa-solid fa-2"/> Процент числа 1 от числа 2</h2>
            <div className="as__base-percent_forms">
              <NumberField name="number" label="Число 1" initial={resForm2.number}/>
              <NumberField name="percent" label="Число 2" initial={resForm2.percent}/>
              <div>
                <Statistic
                  title={`${toMoney(resForm2.number)} от ${toMoney(resForm2.percent)} =`}
                  value={`${calcPercentForm2(resForm2.number, resForm2.percent)} %`}
                />
              </div>
            </div>
          </Form>

          <hr/>

          <Form layout="vertical" onValuesChange={onSubmitForm3}>
            <h2><i className="fa-solid fa-3"/> Прибавить % к числу</h2>
            <div className="as__base-percent_forms">
              <NumberField name="percent" label="Процент" initial={resForm3.percent}/>
              <NumberField name="number" label="Число" initial={resForm3.number}/>
              <div>
                <Statistic
                  title={`${toMoney(resForm3.number)} + ${resForm3.percent || 0}% =`}
                  value={calcPercentForm3(resForm3.number, resForm3.percent)}
                />
              </div>
            </div>
          </Form>

          <hr/>

          <Form layout="vertical" onValuesChange={onSubmitForm4}>
            <h2><i className="fa-solid fa-4"/> Вычесть % из числа</h2>
            <div className="as__base-percent_forms">
              <NumberField name="percent" label="Процент" initial={resForm4.percent}/>
              <NumberField name="number" label="Число" initial={resForm4.number}/>
              <div>
                <Statistic
                  title={`${toMoney(resForm4.number)} - ${resForm4.percent || 0}% =`}
                  value={calcPercentForm4(resForm4.number, resForm4.percent)}
                />
              </div>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default BasePercent
