/**
 * @param {Array<string>} wordsArray
 * @param {{ rules: { capitalLetters?: boolean, symbols?: boolean, numbers?: boolean, words?: number }, errors?: Record<string, string> }} config
 * @returns {{ isSafe: boolean, rules: Record<string, boolean>, errors: string[] }}
 */
export const isPassphraseSafe = (wordsArray, config = {}) => {
  const { rules = {}, errors = {} } = config

  const {
    capitalLetters = true,
    symbols = true,
    numbers = true,
    words = 8
  } = rules

  const rulesCheck = {
    minWords: wordsArray?.length >= words,
    uniqueWords:
      new Set(wordsArray.map((word) => word.replace(/[^a-zA-Z]/g, ''))).size ===
      wordsArray.length,
    capitalLetters: capitalLetters ? /[A-Z]/.test(wordsArray.join('')) : true,
    symbols: symbols
      ? /[!@#$%^&*(),.?":{}|<>]/.test(wordsArray.join(''))
      : true,
    numbers: numbers ? /\d/.test(wordsArray.join('')) : true
  }

  const failedRules = Object.keys(rulesCheck).filter(
    (rule) => !rulesCheck[rule]
  )
  const errorMessages = failedRules.map((rule) => errors[rule])

  return {
    isSafe: failedRules.length === 0,
    rules: rulesCheck,
    errors: errorMessages
  }
}
