
import { useNamespace } from '../../../hooks/use-namespace'
import { ExtractPropTypes } from 'vue'

const colors: Record<string, string> = {
  primary: '#409eef',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399'
}

// 通过vue内置的ExtractPropTypes提取buttonProps的类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export const buttonProps = {
  type: {
    type: String,
    default: ''
  },
  size: {
    type: String
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
}

export const useButton = (props: ButtonProps) => {
  const _type = props.type ? props.type : ''
  const _size = props.size ? props.size : ''

  return {
    _type,
    _size
  }
}

// ratio是指c2占多少颜色
export const colorBlend = (c1: string, c2: string, ratio: number) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  const r1 = parseInt(c1.substring(1, 3), 16)
  const g1 = parseInt(c1.substring(3, 5), 16)
  const b1 = parseInt(c1.substring(5, 7), 16)
  const r2 = parseInt(c2.substring(1, 3), 16)
  const g2 = parseInt(c2.substring(3, 5), 16)
  const b2 = parseInt(c2.substring(5, 7), 16)
  let r: number | string = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g: number | string = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b: number | string = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

// --y-button-bg-color
export const useButtonStyle = (props: ButtonProps) => {
  let styles: Record<string, string> = {}
  const ns = useNamespace('button')

  if (props.disabled) {
    if (props.type) {
      styles = ns.setStyles({
        'bg-color': `${colorBlend(colors[props.type], '#ffffff', 0.5)}`,
        'hover-bg-color': `${colorBlend(colors[props.type], '#ffffff', 0.5)}`,
        'text-color': '#fff'
      })
    } else {
      styles = ns.setStyles({
        'text-color': '#a8abb2'
      })
    }
  } else if (props.type) {
    styles = ns.setStyles({
      'bg-color': `var(--y-color-${props.type})`,
      'text-color': '#fff',
      'hover-bg-color': `${colorBlend(colors[props.type], '#ffffff', 0.3)}`
    })
  } else {
    styles = ns.setStyles({
      'hover-bg-color': `${colorBlend(colors['primary'], '#ffffff', 0.9)}`
    })
  }

  return styles
}

export const useDisabledStyle = (props: ButtonProps) => {
  const ns = useNamespace('button')
  let styles: Record<string, string> = {}
  if (props.disabled) {
    styles = ns.setStyles({
      'bg-color': `${colorBlend(colors[props.type], '#ffffff', 0.5)}`,
      'hover-bg-color': `${colorBlend(colors[props.type], '#ffffff', 0.5)}`
    })
  }
  return styles
}