import {REG_EXP} from '../configs/dev.config'
import {toggleFire} from '../store/slices/systemSlice'
import {AppDispatch} from '../store/store'

const runFire = (dispatch: AppDispatch) => {
  dispatch(toggleFire(true))
  setTimeout(() => {
    dispatch(toggleFire(false))
  }, 5000)
}

const validationNumber = (value: string) => {
  if (!value || REG_EXP.IS_NUMBER.test(value)) return Promise.resolve()
  return Promise.reject(new Error('Введите число'))
}

const toMoney = (n: string | number) => {
  const val = typeof n === 'number' ? n : n ? parseFloat(n) : 0
  return val.toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
}

const toNum = (n: string): number => {
  return Number(n.replaceAll(' ', ''))
}

export {
  runFire,
  validationNumber,
  toMoney,
  toNum
}
