import { isPasswordSafe } from './password' // adjust the import path as needed

describe('isPasswordSafe', () => {
  it('should return safe when all default rules are met', () => {
    const password = 'Test123!'
    const result = isPasswordSafe(password)

    expect(result.isSafe).toBe(true)
    expect(result.rules.minLength).toBe(true)
    expect(result.rules.hasLowerCase).toBe(true)
    expect(result.rules.hasUpperCase).toBe(true)
    expect(result.rules.hasNumbers).toBe(true)
    expect(result.rules.hasSymbols).toBe(true)
  })

  it('should fail the minLength rule when the password is too short', () => {
    const password = 'T1!'
    const result = isPasswordSafe(password, { length: 5 })

    expect(result.isSafe).toBe(false)
    expect(result.rules.minLength).toBe(false)
  })

  it('should fail the hasLowerCase rule when no lowercase letters are present', () => {
    const password = 'TEST123!'
    const result = isPasswordSafe(password)

    expect(result.isSafe).toBe(false)
    expect(result.rules.hasLowerCase).toBe(false)
  })

  it('should pass the hasLowerCase rule when it is disabled in the config', () => {
    const password = 'TEST123!'
    const result = isPasswordSafe(password, { lowerCase: false })

    expect(result.isSafe).toBe(true)
    expect(result.rules.hasLowerCase).toBe(true)
  })

  it('should fail the hasUpperCase rule when no uppercase letters are present', () => {
    const password = 'test123!'
    const result = isPasswordSafe(password)

    expect(result.isSafe).toBe(false)
    expect(result.rules.hasUpperCase).toBe(false)
  })

  it('should pass the hasUpperCase rule when it is disabled in the config', () => {
    const password = 'test123!'
    const result = isPasswordSafe(password, { upperCase: false })

    expect(result.isSafe).toBe(true)
    expect(result.rules.hasUpperCase).toBe(true)
  })

  it('should fail the hasNumbers rule when no numbers are present', () => {
    const password = 'Test!test'
    const result = isPasswordSafe(password)

    expect(result.isSafe).toBe(false)
    expect(result.rules.hasNumbers).toBe(false)
  })

  it('should pass the hasNumbers rule when it is disabled in the config', () => {
    const password = 'Test!test'
    const result = isPasswordSafe(password, { numbers: false })

    expect(result.isSafe).toBe(true)
    expect(result.rules.hasNumbers).toBe(true)
  })

  it('should fail the hasSymbols rule when no special characters are present', () => {
    const password = 'Test1234'
    const result = isPasswordSafe(password)

    expect(result.isSafe).toBe(false)
    expect(result.rules.hasSymbols).toBe(false)
  })

  it('should pass the hasSymbols rule when it is disabled in the config', () => {
    const password = 'Test1234'
    const result = isPasswordSafe(password, { includeSpecialChars: false })

    expect(result.isSafe).toBe(true)
    expect(result.rules.hasSymbols).toBe(true)
  })
})
