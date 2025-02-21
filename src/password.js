import { COMMON_PASSWORDS } from './constants'

/**
 * @param {string} password
 * @returns {boolean}
 */
export const isPasswordSafe = (password) => {
  if (password && password.length < 5) {
    return false
  }

  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSymbols) {
    return false
  }

  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    return false
  }

  if (/(.)\1{2,}/.test(password)) {
    return false
  }

  return true
}
