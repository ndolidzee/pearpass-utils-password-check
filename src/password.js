/**
 * @param {string} password
 * @param {{ length: number, includeSpecialChars: boolean }} rulesConfig
 * @returns {{ isSafe: boolean, rules: Record<string, boolean> }}
 */
export const isPasswordSafe = (password, rulesConfig) => {
  const { length, includeSpecialChars } = rulesConfig

  const rules = {
    minLength: password.length >= length,
    hasSymbols: includeSpecialChars
      ? /[[!@#$%^&*()_+\[\]{}|;:,.<>?]]/.test(password)
      : true
  }

  return Object.values(rules).every(Boolean)
}
