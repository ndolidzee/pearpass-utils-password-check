/**
 * @param {string} password
 * @param {{ length: number, includeSpecialChars: boolean }} rulesConfig
 * @returns {{ isSafe: boolean, rules: Record<string, boolean> }}
 */
export const isPasswordSafe = (password, rulesConfig = {}) => {
  const {
    length = 8,
    includeSpecialChars = true,
    lowerCase = true,
    upperCase = true,
    numbers = true
  } = rulesConfig

  const rules = {
    minLength: password.length >= length,
    hasLowerCase: lowerCase ? /[a-z]/.test(password) : true,
    hasUpperCase: upperCase ? /[A-Z]/.test(password) : true,
    hasNumbers: numbers ? /\d/.test(password) : true,
    hasSymbols: includeSpecialChars
      ? /[[!@#$%^&*()_+\[\]{}|;:,.<>?]]/.test(password)
      : true
  }

  return { isSafe: Object.values(rules).every(Boolean), rules: rules }
}
