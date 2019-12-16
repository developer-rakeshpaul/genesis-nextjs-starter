import get from 'lodash.get'

enum INPUT_STATE {
  DEFAULT,
  VALID,
  ERROR,
}

const getInputStyles = (type: INPUT_STATE) => {
  const baseStyle =
    'appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-blue-300 focus:placeholder-gray-500'
  let inputBorder = 'border border-blue-400 hover:border-blue-600'
  switch (type) {
    case INPUT_STATE.VALID:
      inputBorder = 'border border-green-400 hover:border-green-600'
      break
    case INPUT_STATE.ERROR:
      inputBorder = 'border border-red-500 hover:border-red-700'
      break
    default:
      inputBorder = 'border border-blue-400 hover:border-blue-600'
  }

  return baseStyle + ' ' + inputBorder
}

export default function useFormInputStyles(
  formik: any,
  field: string,
  minLength = 0,
) {
  const len: number = get(formik, `values.${field}.length`, 0)
  const error = get(formik, `errors.${field}`, '')

  const className =
    len === 0 || len < minLength
      ? getInputStyles(INPUT_STATE.DEFAULT)
      : error
      ? getInputStyles(INPUT_STATE.ERROR)
      : getInputStyles(INPUT_STATE.VALID)

  return className
}
