/**
 * @param {Array<string>} wordsArray
 * @param {{ capitalLetters: boolean, symbols: boolean, numbers: boolean, words: number }} rulesConfig
 * @returns {{ isSafe: boolean, rules: Record<string, boolean> }}
 */
export const isPassphraseSafe = (wordsArray, rulesConfig = {}) => {
  const {
    capitalLetters = true,
    symbols = true,
    numbers = true,
    words = 8
  } = rulesConfig

  const rules = {
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

  return { isSafe: Object.values(rules).every(Boolean), rules: rules }
}
