import get from 'lodash.get'

export enum INPUT_STATE {
  DEFAULT,
  VALID,
  ERROR,
}

const getInputStyles = (type: INPUT_STATE) => {
  const baseStyle =
    'appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-400 focus:placeholder-gray-500 border '
  let inputBorder = ''
  switch (type) {
    case INPUT_STATE.VALID:
      inputBorder = 'border-green-300 hover:border-green-400'
      break
    case INPUT_STATE.ERROR:
      inputBorder = 'border-red-300 hover:border-red-400'
      break
    default:
      inputBorder = 'border-gray-400 hover:border-blue-400'
  }

  return baseStyle + ' ' + inputBorder
}

export function useFormInputStyles(formik: any, field: string, minLength = 0) {
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

export function useFormInputState(formik: any, field: string, minLength = 0) {
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
