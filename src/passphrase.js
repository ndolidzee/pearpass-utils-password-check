import { MIN_PASSPHRASE_LENGTH, MIN_PASSPHRASE_WORDS } from './constants'

export const isPassphraseSafe = (wordsArray) => {
  if (!wordsArray?.length || wordsArray.length < MIN_PASSPHRASE_WORDS) {
    return false
  }

  const passphrase = wordsArray.join('')
  if (passphrase.length < MIN_PASSPHRASE_LENGTH) {
    return false
  }

  const hasUpperCase = /[A-Z]/.test(passphrase)
  const hasLowerCase = /[a-z]/.test(passphrase)
  const hasNumber = /\d/.test(passphrase)
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(passphrase)

  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
    return false
  }

  const cleanWords = wordsArray.map((word) => word.replace(/[^a-zA-Z]/g, ''))
  const wordSet = new Set(cleanWords)

  if (wordSet.size !== cleanWords.length) {
    return false
  }

  return true
}
