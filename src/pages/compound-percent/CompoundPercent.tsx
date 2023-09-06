import React, {useState} from 'react'
import {Button, ConfigProvider, Form, Space, Table, Tooltip} from 'antd'
import {COLOR} from '../../configs/dev.config'
import SubmitButton from '../../components/ui/buttons/SubmitButton'
import NumberField from '../../components/ui/fields/NumberField'
import Column from 'antd/es/table/Column'
import {toMoney, toNum} from '../../tools/tools'
import './CompoundPercent.scss'

interface IForm {
  sum: string
  count: string
  percent: string
  adding: string
}

interface IResultTable {
  key: number
  start: string
  benefit: string
  adding: string
  end: string
}


const CompoundPercent = () => {
  const [form] = Form.useForm()
  const [result, setResult] = useState<IResultTable[]>([])

  const validateMessages = {
    required: "Укажите - ${label}!"
  }

  const onSubmit = ({sum, count, percent, adding}: IForm) => {
    const resultTemp: IResultTable[] = []
    setResult(resultTemp)

    const start = Number(sum)
    const percentDec = (Number(percent) / 100)
    const addingNum = adding ? Number(adding) : 0
    let startTemp = start

    for (let i = 0; i < Number(count); i++) {
      const benefit = ((startTemp * (1 + percentDec)) - startTemp)
      const end = (startTemp + benefit + addingNum)

      const itr: IResultTable = {
        key: i + 1,
        start: toMoney(startTemp),
        benefit: toMoney(benefit),
        adding: toMoney(addingNum),
        end: toMoney(end)
      }
      startTemp = end
      resultTemp.push(itr)
    }

    setResult(resultTemp)
  }

  return (
    <div className="as__page as__page_calc">
      <div className="as__calc_title">
        <h1>Онлайн калькулятор расчета сложных процентов</h1>
        <p>
          <strong>Сложный процент</strong> – начисление процентов в банковском депозите, при котором по окончании
          каждого периода начисленные проценты становятся основной суммой. Таким образом, в следующем периоде проценты
          начисляются на большую сумму, чем в предыдущем, за счет чего вклад растет со скоростью экспоненты.
        </p>
      </div>

      <div className="as__calc_form">
        <ConfigProvider form={{validateMessages}}>
          <Form form={form} layout="vertical" onFinish={onSubmit}>
            <NumberField name="sum" label="Начальный депозит" initial="100000"/>
            <NumberField name="count" label="Количество периодов" initial="12"/>
            <NumberField name="percent" label="Доходность за 1 период %"/>
            <NumberField name="adding" label="Довложения каждый период" required={false}/>

            <Form.Item>
              <Space>
                <SubmitButton form={form}/>
                <Button htmlType="reset"><i className="fa-solid fa-broom"/> Очистить</Button>
              </Space>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
      <div className="as__calc_result">
        {
          result.length
            ? <>
              <hr/>
              <div className="as__compound-percent_more">
                <div>
                  <i className="fa-solid fa-a"/> Точка входа
                  - <strong>{result[0].start}</strong>
                </div>
                <div>
                  <i className="fa-solid fa-b"/> Конечная сумма
                  - <strong>{result[result.length - 1].end}</strong>
                </div>
                <div>
                  <i className="fa-solid fa-plus"/> Сумма довложений
                  - <strong>{toMoney(toNum(result[0].adding) * result.length)}</strong>
                </div>
                {
                  toNum(result[0].adding) >= 0.1
                    ? <div>
                      <i className="fa-solid fa-arrow-up-wide-short"/> Прирост без довложений
                      - <strong>{toMoney((toNum(result[result.length - 1].end) - toNum(result[0].start) - (toNum(result[0].adding) * result.length)))}</strong>
                    </div>
                    : null
                }
                <div>
                  <Tooltip title="С учетом довложений" placement="topRight" color={COLOR.success.light}>
                    <i className="fa-solid fa-arrow-up-wide-short"/> Прирост от точки A
                    - <strong>{toMoney(toNum(result[result.length - 1].end) - toNum(result[0].start))}</strong>
                    <span> <i className="fa-regular fa-circle-question"/></span>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Точка B к точке А" placement="topRight" color={COLOR.success.light}>
                    <i className="fa-solid fa-percent"/> Общий рост депозита
                    <strong> {toMoney(toNum(result[result.length - 1].end) * 100 / toNum(result[0].start) - 100)}</strong> %
                    <span> <i className="fa-regular fa-circle-question"/></span>
                  </Tooltip></div>
              </div>
              <Table dataSource={result} pagination={{pageSize: 60}} scroll={{x: 600}}>
                <Column title="#" dataIndex="key" defaultSortOrder='ascend'/>
                <Column title="Начало" dataIndex="start"/>
                <Column title="Прибыль" dataIndex="benefit"/>
                <Column title="Довложение" dataIndex="adding"/>
                <Column title="Конец" dataIndex="end"/>
              </Table>
            </>
            : null
        }
      </div>
    </div>
  )
}

export default CompoundPercent
