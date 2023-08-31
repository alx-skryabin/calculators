type Shades = {
  light: string
  dark: string
}

const COLOR: {
  primary: Shades
  danger: Shades
  success: Shades
} = {
  primary: {
    light: '#6C5DD3',
    dark: '#5C4FB3'
  },
  danger: {
    light: '#f54f4e',
    dark: '#f54a43'
  },
  success: {
    light: '#49CC90',
    dark: '#28a745'
  }
}


const REG_EXP: {
  IS_NUMBER: RegExp
} = {
  IS_NUMBER: /^-?\d*(\.\d*)?$/
}

export {
  REG_EXP,
  COLOR
}
