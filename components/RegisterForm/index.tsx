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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return { formik }
}

export default useRegisterForm
