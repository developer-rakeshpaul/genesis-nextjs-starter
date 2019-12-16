import { FormikValues, useFormik } from 'formik'
import { object, string } from 'yup'

export interface RegisterFormProps {
  email: string
  password: string
  name: string
}

export const defaultInitialValues: RegisterFormProps = {
  email: '',
  password: '',
  name: '',
}

export const DefaultRegisterSchema = object().shape({
  password: string()
    .required()
    .min(6),
  name: string()
    .required()
    .min(2),
  email: string()
    .email()
    .required(),
})

function useRegisterForm<T extends FormikValues>({
  initialValues = defaultInitialValues,
  validationSchema = DefaultRegisterSchema,
  onSubmit,
}: T) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return { formik }
}

export default useRegisterForm
