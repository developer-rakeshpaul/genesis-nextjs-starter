import React from 'react'
import { FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

interface RegisterFormProps {
  email: string
  password: string
  name: string
}

const defaultInitialValues: RegisterFormProps = {
  email: '',
  password: '',
  name: ''
}

const DefaultRegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(6),
  name: Yup.string()
    .required()
    .min(2),
  email: Yup.string()
    .email()
    .required()
})

interface RegisterFormProps {
  onSubmit?: (values: RegisterFormProps) => void
}

function useRegisterForm<T extends FormikValues>({
  initialValues = defaultInitialValues,
  validationSchema = DefaultRegisterSchema
}: T) {
  const [error, setError] = React.useState()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
      setError('some error occured')
    }
  })
  return { formik, error }
}

export default useRegisterForm
