import React, {useState} from 'react'
import {Button, ConfigProvider, Form, Space, Statistic} from 'antd'
import NumberField from '../../components/ui/fields/NumberField'
import {toMoney, toNum} from '../../tools/tools'
import SubmitButton from '../../components/ui/buttons/SubmitButton'
import {COLOR} from '../../configs/dev.config'
import './PetrolCost.scss'

interface IForm {
  distance: string
  expense92: string
  expense95: string
  cost92: string
  cost95: string
  parts: string
  cashback: string
}

interface IRes {
  liters92: string
  liters95: string
  cost92: string
  cost95: string
  deltaCost: string
  parts: string
  parts92: string
  parts95: string
  profitCash92: string
  profitCash95: string
}

const PetrolCost = () => {
  const [form] = Form.useForm()
  const [res, setRes] = useState<IRes | null>(null)

  const validateMessages = {
    required: "Укажите - ${label}!"
  }

  const onSubmitForm = (fields: IForm) => {
    const tenth = toNum(fields.distance) / 100
    const liters92 = toNum(fields.expense92) * tenth
    const liters95 = toNum(fields.expense95) * tenth

    const cost92 = liters92 * toNum(fields.cost92)
    const cost95 = liters95 * toNum(fields.cost95)
    const deltaCost = cost95 - cost92
    const parts92 = cost92 / (toNum(fields.parts) || 1)
    const parts95 = cost95 / (toNum(fields.parts) || 1)
    const profitCash92 = cost92 * ((toNum(fields.cashback) / 100))
    const profitCash95 = cost95 * ((toNum(fields.cashback) / 100))

    setRes({
      liters92: toMoney(liters92),
      liters95: toMoney(liters95),
      cost92: toMoney(cost92),
      cost95: toMoney(cost95),
      deltaCost: toMoney(deltaCost),
      parts: fields.parts,
      parts92: toMoney(parts92),
      parts95: toMoney(parts95),
      profitCash92: toMoney(profitCash92),
      profitCash95: toMoney(profitCash95)
    })
  }

  return (
    <div className="as__page as__page_calc">
      <div className="as__calc_title">
        <h1>Расход бензина</h1>
        <p>Подсчет расхода бензина на заданное расстояние и стоимость поездки с возможностью разделить на компанию.</p>
      </div>

      <div className="as__calc_form">
        <ConfigProvider form={{validateMessages}}>
          <Form form={form} layout="vertical" onFinish={onSubmitForm}>
            <NumberField name="distance" label="Расстояние: км." initial="100"/>
            <div className="as__petrol-cost_grid_2">
              <NumberField name="expense92" label="Средний расход (92) на 100км: л." initial="6"/>
              <NumberField name="expense95" label="Средний расход (95) на 100км: л." initial="9"/>
              <NumberField name="cost92" label="Стоимость (92): руб/л" initial="50"/>
              <NumberField name="cost95" label="Стоимость (95): руб/л" initial="55"/>
              <NumberField name="parts" label="Разделить счет на равные части" initial="2"/>
              <NumberField name="cashback" label="Кешбек: %" initial="5"/>
            </div>

            <Space>
              <SubmitButton form={form}/>
              <Button htmlType="reset" size="large"><i className="fa-solid fa-broom"/> Очистить</Button>
            </Space>
          </Form>
        </ConfigProvider>
      </div>
      <div className="as__calc_result">
        {
          (res !== null)
            ?
            <>
              <br/>
              <hr/>
              <br/>
              <div className="as__petrol-cost_grid_3">
                <Statistic title="Стоимость 92" value={res.cost92}/>
                <Statistic title={`По частям 92 на (${res.parts})`} value={res.parts92}/>
                <Statistic title="Кешбек 92" value={res.profitCash92}
                           valueStyle={{color: toNum(res.profitCash92) > 0 ? COLOR.success.light : ''}}
                           prefix={<i className="fa-solid fa-sack-dollar"/>}
                />
                <Statistic title="Стоимость 95" value={res.cost95}/>
                <Statistic title={`По частям 95 на (${res.parts})`} value={res.parts95}/>
                <Statistic
                  title="Кешбек 95" value={res.profitCash95}
                  valueStyle={{color: toNum(res.profitCash92) > 0 ? COLOR.success.light : ''}}
                  prefix={<i className="fa-solid fa-sack-dollar"/>}
                />
                <Statistic title="Количество 92 в л." value={res.liters92} prefix={<i className="fa-solid fa-flask"/>}/>
                <Statistic title="Количество 95 в л." value={res.liters95} prefix={<i className="fa-solid fa-flask"/>}/>
                <Statistic value={toMoney(Math.abs(toNum(res.deltaCost)))}
                           title={`На 92 ${toNum(res.deltaCost) > 0 ? 'дешевле' : 'дороже'} на`}
                           valueStyle={{color: toNum(res.deltaCost) > 0 ? COLOR.success.light : COLOR.danger.light}}
                           suffix={<i className="fa-solid fa-ruble-sign"/>}
                />
              </div>
            </>
            : null
        }
      </div>
    </div>
  )
}

export default PetrolCost
