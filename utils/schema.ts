import { string, ref } from 'yup'

export const PASSWORD_MIN_LENGTH = 6
export const passwordRules = [
  'At least 1 upper case letter(A-Z)',
  'At least 1 number(0-9)',
  `At least ${PASSWORD_MIN_LENGTH} characters`,
]

const [uc, numeric, min] = passwordRules

export const passwordSchema = string()
  .required('Please provide a password')
  .test('uc', uc, val => {
    return /[A-Z]/.test(val)
  })
  .test('numeric', numeric, val => {
    return /[0-9]/.test(val)
  })
  .min(PASSWORD_MIN_LENGTH, min)

export const emailSchema = string()
  .email('Please enter a valid email')
  .required('A valid email is required to proceed')

export const confirmPasswordSchema = string()
  .oneOf([ref('password'), null], 'Passwords do not match')
  .required('Password confirm is required')
