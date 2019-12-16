import { FormikValues, useFormik } from 'formik'
import { object, string } from 'yup'

interface LoginFormProps {
  email: string
  password: string
  remember: boolean
}

const defaultInitialValues: LoginFormProps = {
  email: '',
  password: '',
  remember: false,
}

const DefaultLoginSchema = object().shape({
  password: string().required('Password is required'),
  email: string()
    .email('Invalid email')
    .required('Email is required'),
})

function useLoginForm<T extends FormikValues>({
  initialValues = defaultInitialValues,
  validationSchema = DefaultLoginSchema,
  onSubmit,
}: T) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return { formik }
}

export default useLoginForm
