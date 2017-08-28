import {reversePallette} from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['blue', 'blue', 'blue'],
  sedondary: ['yellow', 'yellow', 'yellow'],
  danger: ['red', 'red', 'red'],
  alert: ['orange', 'orange', 'orange'],
  success: ['green', 'green', 'green'],
  grayscale: ['grey', 'grey', 'grey'],
}

theme.reversePallette = reversePallette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

export default theme
