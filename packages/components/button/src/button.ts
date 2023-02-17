import { ExtractPropTypes } from 'vue'
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger', 'text']
export const ButtonSize = ['large', 'medium', 'small', 'mini']
export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    },
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    },
  },
  plain: {
    type: Boolean,
    default: false,
  },
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
