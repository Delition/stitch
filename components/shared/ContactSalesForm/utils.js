import { emailPattern, namePatern } from './constants'

export const getRules = () => ({
  REQUIRED: {
    required: true,
    message: 'Field is required',
  },
  EMAIL: {
    pattern: emailPattern,
    message: 'Invalid email address',
  },
  NAME: {
    pattern: namePatern,
    message: 'Invalid name',
  },
  MIN_VALUE: {
    min: 20,
    message: 'Should be at least 20 characters',
  },
})