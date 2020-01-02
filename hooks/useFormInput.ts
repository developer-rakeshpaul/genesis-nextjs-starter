import get from 'lodash.get'

export enum INPUT_STATE {
  DEFAULT,
  VALID,
  ERROR,
  DISABLED,
}

export const getInputStyles = (type: INPUT_STATE) => {
  const baseStyle =
    'appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-400 focus:placeholder-gray-500 border '
  let style = ''
  switch (type) {
    case INPUT_STATE.VALID:
      style = 'border-green-300 focus:border-green-400'
      break
    case INPUT_STATE.ERROR:
      style = 'border-red-300 focus:border-red-400'
      break
    case INPUT_STATE.DISABLED:
      style = 'text-gray-400'
      break
    default:
      style = 'border-gray-400 focus:border-blue-400'
  }

  return baseStyle + ' ' + style
}

export const useFormInputStyles = (
  formik: any,
  field: string,
  minLength = 0,
) => {
  const len: number = get(formik, `values.${field}.length`, 0)
  const error = get(formik, `errors.${field}`, '')

  const className =
    !error && (len === 0 || len < minLength)
      ? getInputStyles(INPUT_STATE.DEFAULT)
      : error
      ? getInputStyles(INPUT_STATE.ERROR)
      : getInputStyles(INPUT_STATE.VALID)

  return className
}

export const useFormInputState = (
  formik: any,
  field: string,
  minLength = 0,
) => {
  const len: number = get(formik, `values.${field}.length`, 0)
  const error = get(formik, `errors.${field}`, '')

  const state =
    !error && (len === 0 || len < minLength)
      ? INPUT_STATE.DEFAULT
      : error
      ? INPUT_STATE.ERROR
      : INPUT_STATE.VALID

  return state
}
