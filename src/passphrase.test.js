import { isPassphraseSafe } from './passphrase'

describe('isPassphraseSafe', () => {
  it('should return safe when all default rules are met', () => {
    const words = [
      'Test1!',
      'Word2@',
      'Example3#',
      'Unique',
      'Safe',
      'Pass',
      'Phrase',
      'Another4$'
    ]

    const result = isPassphraseSafe(words)
    expect(result.isSafe).toBe(true)
    expect(result.rules.minWords).toBe(true)
    expect(result.rules.uniqueWords).toBe(true)
    expect(result.rules.capitalLetters).toBe(true)
    expect(result.rules.symbols).toBe(true)
    expect(result.rules.numbers).toBe(true)
  })

  it('should fail the minWords rule when not enough words are provided', () => {
    const words = ['Test1!', 'Word2@']
    const result = isPassphraseSafe(words, { words: 3 })
    expect(result.isSafe).toBe(false)
    expect(result.rules.minWords).toBe(false)
  })

  it('should fail the uniqueWords rule when duplicate words exist after stripping symbols', () => {
    const words = [
      'Hello!',
      'Hello',
      'Unique1',
      'Word2',
      'Example3',
      'Test4',
      'Safe5',
      'Pass6'
    ]

    const result = isPassphraseSafe(words)
    expect(result.isSafe).toBe(false)
    expect(result.rules.uniqueWords).toBe(false)
  })

  it('should fail the capitalLetters rule when no uppercase letters are present', () => {
    const words = [
      'test1!',
      'word2@',
      'example3#',
      'unique',
      'safe',
      'pass',
      'phrase',
      'another1'
    ]

    const result = isPassphraseSafe(words)
    expect(result.isSafe).toBe(false)
    expect(result.rules.capitalLetters).toBe(false)
  })

  it('should pass the capitalLetters rule when disabled in config', () => {
    const words = [
      'test1!',
      'word2@',
      'example3#',
      'unique',
      'safe',
      'pass',
      'phrase',
      'another1'
    ]

    const result = isPassphraseSafe(words, { capitalLetters: false })

    expect(result.isSafe).toBe(true)
    expect(result.rules.capitalLetters).toBe(true)
  })

  it('should fail the symbols rule when no symbol is present', () => {
    const words = [
      'Test1',
      'Word2',
      'Example3',
      'Unique',
      'Safe',
      'Pass',
      'Phrase',
      'Another1'
    ]

    const result = isPassphraseSafe(words)
    expect(result.isSafe).toBe(false)
    expect(result.rules.symbols).toBe(false)
  })

  it('should pass the symbols rule when disabled in config', () => {
    const words = [
      'Test1',
      'Word2',
      'Example3',
      'Unique',
      'Safe',
      'Pass',
      'Phrase',
      'Another1'
    ]

    const result = isPassphraseSafe(words, { symbols: false })
    expect(result.isSafe).toBe(true)
    expect(result.rules.symbols).toBe(true)
  })

  it('should fail the numbers rule when no number is present', () => {
    const words = [
      'Test!',
      'Word@',
      'Example#',
      'Unique',
      'Safe',
      'Pass',
      'Phrase',
      'Another!'
    ]

    const result = isPassphraseSafe(words)
    expect(result.isSafe).toBe(false)
    expect(result.rules.numbers).toBe(false)
  })

  it('should pass the numbers rule when disabled in config', () => {
    const words = [
      'Test!',
      'Word@',
      'Example#',
      'Unique',
      'Safe',
      'Pass',
      'Phrase',
      'Another!'
    ]

    const result = isPassphraseSafe(words, { numbers: false })
    expect(result.isSafe).toBe(true)
    expect(result.rules.numbers).toBe(true)
  })
})
