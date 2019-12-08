import { FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

export interface RegisterFormProps {
  email: string
  password: string
  name: string
}

export const defaultInitialValues: RegisterFormProps = {
  email: '',
  password: '',
  name: ''
}

export const DefaultRegisterSchema = Yup.object().shape({
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

function useRegisterForm<T extends FormikValues>({
  initialValues = defaultInitialValues,
  validationSchema = DefaultRegisterSchema,
  onSubmit
}: T) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return { formik }
}

export default useRegisterForm
