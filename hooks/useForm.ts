import React from 'react'
import { useFormik } from 'formik'

function useForm(formikConfig: any) {
  const [error, setError] = React.useState()
  const formik = useFormik(formikConfig)
  const handleChange = (event: any) => {
    setError(null)
    formik.setFieldValue(event.target.name, event.target.value)
    formik.setFieldTouched(event.target.name, true)
    formik.handleChange(event)
  }
  return { formik, error, setError, handleChange }
}

export default useForm
