import { FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

interface LoginFormProps {
  email: string
  password: string
  remember: boolean
}

const defaultInitialValues: LoginFormProps = {
  email: '',
  password: '',
  remember: false
}

const DefaultLoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
})

function useLoginForm<T extends FormikValues>({
  initialValues = defaultInitialValues,
  validationSchema = DefaultLoginSchema,
  onSubmit
}: T) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return { formik }
}

export default useLoginForm
