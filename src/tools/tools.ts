import {REG_EXP} from '../configs/dev.config'

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
  validationNumber,
  toMoney,
  toNum
}
